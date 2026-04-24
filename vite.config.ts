import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

import fs from 'fs';

function localUploadPlugin() {
  return {
    name: 'local-upload-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/api/upload') && req.method === 'POST') {
          const url = new URL(req.url, `http://${req.headers.host}`);
          const filename = url.searchParams.get('filename') || `upload_${Date.now()}.png`;
          const uploadDir = path.resolve(__dirname, 'public/images/uploads');
          
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
          }

          const safeFilename = filename.replace(/[^a-zA-Z0-9.\-_]/g, '_');
          const filePath = path.join(uploadDir, safeFilename);

          const writeStream = fs.createWriteStream(filePath);
          req.pipe(writeStream);

          req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ url: `/images/uploads/${safeFilename}` }));
          });

          req.on('error', (err) => {
            console.error('Upload Error:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          });
          return;
        }

        if (req.url?.startsWith('/api/save_content') && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const dataPath = path.resolve(__dirname, 'src/data/siteContent.ts');
              const fileContent = fs.readFileSync(dataPath, 'utf-8');
              const splitStr = 'export const defaultContent: SiteContent = ';
              if (fileContent.includes(splitStr)) {
                const parts = fileContent.split(splitStr);
                const newContent = parts[0] + splitStr + JSON.stringify(data, null, 2) + ';\n';
                fs.writeFileSync(dataPath, newContent, 'utf-8');
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } else {
                throw new Error("Could not find defaultContent export in siteContent.ts");
              }
            } catch (err: any) {
              console.error('Save Content Error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), localUploadPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-framer': ['motion'],
            'vendor-icons': ['lucide-react'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
