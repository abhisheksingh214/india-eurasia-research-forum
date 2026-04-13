export interface Publication {
  id: string;
  title: string;
  type: string;
  date: string;
  author: string;
  description: string;
  image: string;
  content: string; // HTML or Markdown format string
}

export const publications: Publication[] = [
  {
    id: 'strategic-calculus-eurasia',
    title: "Eurasia in India's Strategic Calculus",
    type: 'Special Research Note',
    date: '31 March, 2026',
    author: 'Dr. Pravesh Gupta',
    description: "IERF serves as a vital enabler in a rapidly transforming Eurasia, driving evidence-based continental re-engagement to help India build enduring strategic depth.",
    image: '/images/publications/rashtrapati-bhawan.jpg',
    content: `
      <p>In a rapidly transforming Eurasia, marked by multi-vector foreign policies and connectivity realignments, IERF will serve as a vital enabler. By driving evidence-based continental re-engagement, it will help India build enduring strategic depth that complements its continental priorities, safeguarding national interests through sovereignty-respecting cooperation and shared prosperity.</p>
      
      <h3>Connectivity Realignments</h3>
      <p>The shifting strategic landscape requires a nuanced understanding of regional dynamics. India's engagement with Eurasia is not just about trade, but about building long-term partnerships that respect sovereignty and promote shared growth.</p>
      
      <p>Dr. Pravesh Kumar Gupta is an Associate Fellow at the Vivekananda International Foundation (VIF). He is also the Research Advisor to the India Eurasia Research Forum (IERF). Dr. Gupta is an expert on Eurasian geopolitics and his research focuses on the society and politics of Central Asia, energy security and sustainability, and trans-regional connectivity linkages between Central and South Asia.</p>
    `
  },
  {
    id: 'chabahar-strategic-stakes',
    title: "In the Shadow of Conflicts: India’s Strategic Stakes in Chabahar Port",
    type: 'Perspectives',
    date: 'April 2026',
    author: 'Rahul Gupta',
    description: "As regional tensions escalate, India's operational role in Chabahar faces new complexities. Maintaining this strategic gateway is essential for India's long-term Eurasian presence.",
    image: '/images/publications/chabahar-stakes.jpg',
    content: `
      <p>On a bilateral level, India’s already strained trade ties with Iran comes in the backdrop of the rapidly evolving situation in West Asia. As the US-Israeli attack on Iran unfolds, reports suggest aerial damage around the port city of Chabahar, even though there is no damage reported at the India operated Shahid Beheshti terminal. However, the Israeli-US strikes on Iran’s critical infrastructure will complicate India’s limited operational role in the port, and discourage private investment in the future.</p>
      
      <h3>Geopolitical Implications</h3>
      <p>In a region which India considers its extended neighbourhood, stepping down from Chabahar without an alternative will undermine India’s already limited engagement with Central Asia. On the other hand, it will strengthen Pakistan’s credibility to the Central Asian republics for accessing the Indian ocean through Chinese-led BRI infrastructure. In the wider region, ceding space to China and Pakistan will erode India’s long-term presence in Eurasia.</p>
      
      <p>Rahul Gupta is the Founder Director of India Eurasia Research Forum (IERF) and a Senior Research Fellow at JNU, New Delhi. His work focuses on regional connectivity and strategic partnerships in the Eurasian landmass.</p>
    `
  },
  {
    id: 'nur-sultan-futuristic-heart',
    title: 'Nur-Sultan: The Futuristic Heart of Central Asia',
    type: 'Stories from Eurasia',
    date: 'March 2026',
    author: 'Nurbolat Toktamys',
    description: "A vivid journey through Kazakhstan's capital, where ancient traditions coexist with technological innovation and ambitious global development.",
    image: '/images/publications/nur-sultan-1.jpg',
    content: `
      <p>From the moment I arrived, India left a strong impression on me. The scale, diversity, and energy of the country was remarkable. Cities moved at an intense rhythm, yet there was also a sense of openness and curiosity among the people I met. India felt both ancient and modern at the same time – a place where centuries-old traditions coexist with technological innovation and ambitious economic development.</p>
      
      <h3>The Bridge of Civilizations</h3>
      <p>Nur-Sultan serves as a literal and figurative bridge between Europe and Asia. Its architecture reflects this dual identity, standing as a testament to the country's vision for the future while remaining grounded in the rich cultural fabric of the Kazakh people.</p>
      
      <p>Nurbolat Toktamys is a cultural observer and scholar exploring the intersections of identity, urban landscape, and regional diplomacy in Eurasia.</p>
    `
  },
  {
    id: 'special-research-note-gupta',
    title: 'Special Research Note: Eurasian Stability',
    type: 'Working Papers',
    date: 'December 2025',
    author: 'Dr. Pravesh Kumar Gupta',
    description: 'A comprehensive working paper assessing the economic achievements and integration challenges of the EAEU over the past decade.',
    image: '/images/pexels-arthousestudio-4328296.jpg',
    content: `
      <p>Drawing inspiration from the deep historical linkages and intellectual traditions that have connected societies across the Eurasian landmass, this research note explores the civilisational, cultural and intellectual linkages between India and the wider Eurasian region.</p>
      
      <h3>A Multidimensional Approach</h3>
      <p>Eurasia is becoming one of the most consequential geopolitical spaces of the twenty-first century. At IERF, we aim to foster a deeper understanding of the region’s evolving dynamics from a distinctly Indian perspective. Our long-term vision is to become a leading India-origin academic platform that promotes research and publications on all aspects of Eurasian political, economic, and socio-cultural developments.</p>
      
      <p>The Volga to Ganga Dialogues is our flagship platform dedicated to these explorations. It brings together scholars, diplomats, artists and practitioners to engage in reflective conversations that transcend geopolitics, fostering mutual understanding and people-to-people connections.</p>
    `
  }
];
