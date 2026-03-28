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
    id: 'instability-central-asia',
    title: 'Instability in Central Asia: Implications for India',
    type: 'Policy Briefs',
    date: 'March 2026',
    author: 'Dr. Pravesh Kumar Gupta',
    description: 'An in-depth analysis of recent geopolitical shifts in the Central Asian region and how they impact India\'s strategic interests and energy security.',
    image: '/images/istockphoto-171116980-1024x1024.jpg',
    content: `
      <p>The geopolitical landscape of Central Asia is undergoing a period of significant transformation, driven by both internal shifts and external pressures. As the region navigates these changes, the implications for India's strategic interests, particularly in energy security and regional connectivity, are profound.</p>
      
      <h3>Geopolitical Shifts</h3>
      <p>Recent developments have highlighted the fragility of existing stability frameworks. Power transitions, economic fluctuations, and evolving security alliances are reshaping the traditional influence of regional and global powers. For India, these shifts present both challenges and opportunities to deepen its engagement through initiatives like the International North-South Transport Corridor (INSTC).</p>
      
      <h3>Strategic Interests for India</h3>
      <p>India's 'Connect Central Asia' policy reflects the multi-dimensional nature of its interests. Beyond energy, the region serves as a critical partner in counter-terrorism and maritime security. Maintaining stability in Central Asia is essential for preventing the spillover of extremist ideologies and ensuring safe transit for trade.</p>
      
      <p>At IERF, we believe that India must adopt a proactive and nuanced approach, focusing on people-to-people connections and development partnerships that go beyond mere geopolitical calculations.</p>
    `
  },
  {
    id: 'brics-expansion-future',
    title: 'The Future of the BRICS Expansion',
    type: 'Reports',
    date: 'February 2026',
    author: 'Rahul Gupta',
    description: 'Examining the inclusion of new member states and what it means for the Global South\'s economic trajectory.',
    image: '/images/pexels-aghyadnajjar-4623859.jpg',
    content: `
      <p>The recent expansion of BRICS marks a pivotal moment in the evolution of global governance. By including new member states from across the Global South, the bloc is positioning itself as a more representative and influential voice on the world stage.</p>
      
      <h3>Economic Rebalancing</h3>
      <p>The addition of resource-rich and strategically located nations significantly enhances BRICS' collective economic weight. This rebalancing has the potential to challenge established global financial structures and promote alternative trade and settlement mechanisms, such as the use of local currencies.</p>
      
      <h3>Internal Dynamics & Challenges</h3>
      <p>However, expansion also brings challenges of coordination and consensus-building. Diverse political systems and varying economic priorities among the new members will require a strong institutional framework to maintain cohesion and achieve shared goals.</p>
      
      <p>For India, the expanded BRICS provides a platform to champion the interests of the Global South while balancing its relationships with both Eastern and Western powers.</p>
    `
  },
  {
    id: 'soft-power-cultural-diplomacy',
    title: 'Soft Power & Cultural Diplomacy in Eurasia',
    type: 'Articles',
    date: 'January 2026',
    author: 'Sujal Yadav',
    description: 'A study on how educational exchange programs and cultural exports are reshaping regional trust and bilateral relations.',
    image: '/images/pexels-mesut-yalcin-1233429888-27914446.jpg',
    content: `
      <p>In the complex arena of Eurasian geopolitics, soft power and cultural diplomacy are emerging as vital tools for building trust and long-term partnerships. Beyond hard power dynamics, the exchange of ideas, education, and artistic expression plays a crucial role in shaping perceptions and fostering regional stability.</p>
      
      <h3>The Role of Education</h3>
      <p>Educational exchange programs, such as student scholarships and research collaborations, create a network of future leaders who possess a deep understanding and appreciation of each other's cultures. These 'bridges of knowledge' are essential for overcoming historical prejudices and building a shared future.</p>
      
      <h3>Cultural Exports</h3>
      <p>From cinema and music to literature and art, cultural exports provide a window into the values and aspirations of a society. Promoting these exports across Eurasia helps build a positive image and creates a sense of collective identity among diverse populations.</p>
      
      <p>IERF's 'Volga to Ganga Dialogue' is a testament to the power of cultural diplomacy in connecting the ancient civilizations of India and Eurasia through reflective conversations that transcend politics.</p>
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
