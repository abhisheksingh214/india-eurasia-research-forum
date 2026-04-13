import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, defaultContent } from '../data/siteContent';

const STORAGE_KEY = 'ierf_site_content';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  resetToDefaults: () => void;
  exportContent: () => void;
  importContent: (json: string) => boolean;
}

const ContentContext = createContext<ContentContextType | null>(null);

function deepMerge(defaults: any, saved: any): any {
  if (saved === null || saved === undefined) return defaults;
  if (typeof defaults !== 'object' || Array.isArray(defaults)) return saved;
  const result: any = { ...defaults };
  for (const key of Object.keys(defaults)) {
    if (key in saved) {
      if (typeof defaults[key] === 'object' && !Array.isArray(defaults[key]) && defaults[key] !== null) {
        result[key] = deepMerge(defaults[key], saved[key]);
      } else {
        result[key] = saved[key];
      }
    }
  }
  // Also bring in any keys from saved that aren't in defaults
  for (const key of Object.keys(saved)) {
    if (!(key in defaults)) {
      result[key] = saved[key];
    }
  }
  return result;
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return deepMerge(defaultContent, parsed);
      }
    } catch (e) {
      console.warn('Failed to load saved content:', e);
    }
    return defaultContent;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.warn('Failed to save content:', e);
    }
  }, [content]);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(defaultContent);
  };

  const exportContent = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ierf-content-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importContent = (json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      const merged = deepMerge(defaultContent, parsed);
      setContent(merged);
      return true;
    } catch (e) {
      console.error('Failed to import content:', e);
      return false;
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetToDefaults, exportContent, importContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): ContentContextType {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within a ContentProvider');
  return ctx;
}
