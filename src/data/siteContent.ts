// Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂ Type Definitions Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ

export interface PersonData {
  name: string;
  image: string;
  bio: string;
  linkedin: string;
}

export interface PublicationData {
  id: string;
  title: string;
  type: string;
  date: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  description: string;
  image: string;
  imageRef?: string;
  imageFootnote?: string;
  content: string;
  region?: string;
}

export interface EventData {
  title: string;
  date: string;
  type: string;
  location: string;
  description: string;
  link: string;
  featured: boolean;
}

export interface GalleryImageData {
  url: string;
  caption: string;
  location: string;
}

export interface ContactInfoData {
  title: string;
  desc: string;
  value: string;
  href: string;
}

export interface PillarData {
  title: string;
  description: string;
}

export interface CategoryData {
  title: string;
  limit: string;
  desc: string;
}

export interface SiteContent {
  home: {
    heroTagline: string;
    heroSubtitle: string;
    heroButton1: string;
    heroButton2: string;
    visionBadge: string;
    visionHeading: string;
    visionBody: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    visionQuote: string;
    welcomeImage: string;
    focusAreasTitle: string;
    focusAreas: string[];
    ierfWayTitle: string;
    ierfWaySubtitle: string;
    ierfWayPillars: { title: string; body: string }[];
    volgaTeaserHeading: string;
    volgaTeaserBody: string;
    digiTeaserHeading: string;
    digiTeaserBody: string;
    ctaHeading: string;
    ctaBody: string;
  };
  about: {
    subtitle: string;
    whoWeAre: string;
    whatWeDoIntro: string;
    pillars: PillarData[];
    visionParagraphs: string[];
    focusAreas: string[];
    whyIerfParagraphs: string[];
  };
  team: {
    leadership: PersonData[];
    technicalTeam: PersonData[];
    advisor: PersonData;
    scholarlyNetwork: PersonData[];
  };
  publications: PublicationData[];
  events: {
    subtitle: string;
    items: EventData[];
  };
  writeForUs: {
    subtitle: string;
    categories: CategoryData[];
    guidelines: string[];
    ctaHeading: string;
    ctaBody: string;
    submissionEmail: string;
  };
  contact: {
    subtitle: string;
    heading: string;
    subheading: string;
    body: string;
    info: ContactInfoData[];
  };
  volgaToGanga: {
    subtitle: string;
    mainQuote: string;
    paragraphs: string[];
    ctaPhase: string;
    ctaHeading: string;
    ctaBody: string;
  };
  digieurasia: {
    subtitle: string;
    heading: string;
    quote: string;
    images: GalleryImageData[];
    ctaHeading: string;
    ctaBody: string;
    submissionEmail: string;
  };
  ierfTalks: {
    subtitle: string;
    heading: string;
    body: string;
  };
  footer: {
    description: string;
    newsletterTitle: string;
    newsletterBody: string;
  };
  settings: {
    siteName: string;
    siteLogo: string;
    socials: {
      x: string;
      instagram: string;
      linkedin: string;
      youtube: string;
    };
    footerCopyright: string;
  };
}

// Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂ Default Content Ã¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂÃ¢ÂÂ

export const defaultContent: SiteContent = {
  "home": {
    "heroTagline": "Researching Eurasia, Bridging Continents.",
    "heroSubtitle": "India Eurasia Research Forum (IERF) is an independent initiative dedicated to promoting research, dialogue and people to people cooperation between India and Eurasia.",
    "heroButton1": "Our Vision",
    "heroButton2": "Read Research",
    "visionBadge": "Institutional Vision",
    "visionHeading": "Welcome to IERF",
    "visionBody": "In a rapidly transforming Eurasia, marked by multi-vector foreign policies and connectivity realignments, IERF serves as a vital enabler for strategic re-engagement.",
    "stat1Value": "15+",
    "stat1Label": "Countries Covered",
    "stat2Value": "50+",
    "stat2Label": "Policy Insights",
    "visionQuote": "\"Driving evidence-based continental re-engagement to help India build enduring strategic depth.\"",
    "welcomeImage": "/images/welcome_new.webp",
    "focusAreasTitle": "STRATEGIC PILLARS",
    "focusAreas": [
      "India's multidimensional engagement with Eurasian countries",
      "Political, economic and socio-cultural developments in Eurasia",
      "Regional cooperation and integration frameworks across Eurasia",
      "Resource geopolitics and geoeconomic developments",
      "Regional Security in the Eurasian context",
      "BRICS and SCO as Eurasian regional organisations",
      "Eurasian civilisations and cultural hybridity in the twenty-first century"
    ],
    "ierfWayTitle": "The IERF Way",
    "ierfWaySubtitle": "Building Lasting Legacies",
    "ierfWayPillars": [
      {
        "title": "Scholarly Rigour",
        "body": "Driving evidence-based continental re-engagement to build strategic depth."
      },
      {
        "title": "People’s Repository",
        "body": "Documenting the living fabric of diverse civilisations through local lenses."
      },
      {
        "title": "Strategic Interplay",
        "body": "Enabling regional cooperation based on sovereignty and shared prosperity."
      },
      {
        "title": "DigiEurasia",
        "body": "Building a curated digital archive of Indo-Eurasian cultural landscapes."
      }
    ],
    "volgaTeaserHeading": "Volga to Ganga Dialogues",
    "volgaTeaserBody": "Our flagship platform exploring the civilisational, cultural and intellectual linkages between India and the wider Eurasian region. Fostering mutual understanding through reflective conversations that transcend geopolitics.",
    "digiTeaserHeading": "Upcoming Project: DigiEurasia Gallery",
    "digiTeaserBody": "A community-driven digital repository documenting the living fabric and diverse landscapes of our shared civilizations. Launching soon for contributors and photographers.",
    "ctaHeading": "Ready to collaborate?",
    "ctaBody": "Join IERF in reimagining Eurasian studies for the 21st century. We are always looking for contributors who value academic integrity and strategic depth."
  },
  "about": {
    "subtitle": "Bridging the intellectual and strategic gap between India and Eurasia.",
    "whoWeAre": "The India Eurasia Research Forum (IERF) is India’s first research network dedicated to a comprehensive study of the Eurasian region. Our team comprises early career researchers, journalists, policymakers and emerging voices from India’s leading public universities, including the Jawaharlal Nehru University and the University of Delhi. Together, we endeavour to bridge the intellectual and strategic gap between India and Eurasia, a region comprising Russia, Greater Central Asia and the Caucasus. To bridge this gap, IERF operates at the intersection of scholarly rigour and diplomatic engagement. The forum will serve as a platform for advancing cooperation and trust across Eurasia while supporting India’s evolving global engagement by fostering cross-border cultural exchanges through an interdisciplinary approach.",
    "whatWeDoIntro": "IERF aims to foster informed dialogue and multidimensional engagement between India and Eurasia. Currently, as part of our foundational mission, IERF’s work is based on four pillars:",
    "pillars": [
      {
        "title": "Research",
        "description": "Conduct in-depth research on Eurasian geopolitics, economics, and culture to build research pathways between India and Eurasia. Promote and build a comprehensive repository of Indian perspectives on Eurasia."
      },
      {
        "title": "Dialogue",
        "description": "Facilitate informed dialogue through publications, seminars, and conferences. Foster greater cultural understanding and civilisational dialogue between India and the Eurasian countries through the Volga to Ganga Dialogue series."
      },
      {
        "title": "Engagement",
        "description": "Promote multidimensional engagement across India and Eurasia through academic collaboration and public diplomacy initiatives. To promote Track 2 dialogues between India and the Eurasian countries in the future."
      },
      {
        "title": "Policy Impact",
        "description": "Provide up-to-date & policy-relevant insights to decision-makers and industry leaders. To shape the policy landscape of foreign policy-making in the region on Eurasian affairs, particularly in regional cooperation, resource geopolitics, economic developments, and civilisational discourse."
      }
    ],
    "visionParagraphs": [
      "At the India Eurasia Research Forum (IERF), we believe that informed research and open dialogue are essential to building resilient partnerships and sustained engagement. The forum provides a platform for researchers, policymakers, and practitioners from India and Eurasia to explore the deep historical, cultural, and strategic ties that connect these dynamic regions, ensuring that academic enquiry and research effectively inform public discourse and shape the policy landscape.",
      "As part of IERF’s vision, we promote a homegrown Indian perspective on Eurasian affairs. Our long-term vision is to become a leading India-origin academic platform that promotes research and publications on all aspects of Eurasian political, economic, and socio-cultural developments, particularly those that can have implications for India.",
      "IERF’s vision also extends to bringing India and Eurasia closer together — not just through analysis, publications and talks, but through shared stories and ideas that bridge gaps. We believe Eurasian studies need to be reimagined in Indian academic and policy-making circles, and IERF intends to fill this space."
    ],
    "focusAreas": [
      "India’s multidimensional engagement with Eurasian countries",
      "Political, economic and socio-cultural developments in Eurasia",
      "Regional cooperation and integration frameworks across Eurasia",
      "Resource geopolitics and geoeconomic developments",
      "Regional Security in the Eurasian context",
      "BRICS and SCO as Eurasian regional organisations",
      "Eurasian civilisations and cultural hybridity in the twenty-first century"
    ],
    "whyIerfParagraphs": [
      "India’s role on the global stage is expanding rapidly, with a growing think-tank culture, particularly those dedicated to studying the various dimensions of India’s global engagements. While India’s global footprint grows, dedicated research on the vast Eurasian landmass — a region closely intertwined with India’s history and vital to its future — has often been overlooked.",
      "At IERF, we recognise the need to overcome this inertia by building an effective research ecosystem that provides up-to-date analysis of the latest developments, policy-relevant insights and fosters cross-border knowledge exchanges between India and Eurasia. IERF remains open to engaging with people from walks of life interested in exploring the new frontiers of Eurasian studies. We follow an inclusive working style and adhere to the highest standards of academic enquiry."
    ]
  },
  "team": {
    "leadership": [
      {
        "name": "Rahul Gupta",
        "image": "/images/image10.webp",
        "bio": "Rahul Gupta is a Senior Research Fellow with the Centre for Russian and Central Asian Studies at the School of International Studies, Jawaharlal Nehru University, New Delhi, India. He is currently pursuing a PhD at the same institution. His research interests include Eurasian geopolitics, regional connectivity between South and Central Asia, and international organisations in the Global South, with a focus on BRICS and SCO. An early career researcher specialising in post-Soviet studies, he has published extensively, including with SAGE, Routledge and the London School of Economics and Political Science Review of Books.",
        "linkedin": "https://www.linkedin.com/in/rahul-gupta-a8907110a/"
      },
      {
        "name": "Sujal Yadav",
        "image": "/images/image8.webp",
        "bio": "Sujal Yadav is a Senior Research Fellow with the Centre for Russian and Central Asian Studies at the School of International Studies, Jawaharlal Nehru University, New Delhi, India. He is currently pursuing a PhD at the same institution. His research interests include Russian foreign policy, cultural diplomacy, Russian literature, and cultural studies. An early career researcher specialising in contemporary Russian studies, her primary focus is on how non-traditional actors/institutions interact with traditional actors to shape global affairs.",
        "linkedin": "https://www.linkedin.com/in/sujal-yadav-235025208/"
      }
    ],
    "technicalTeam": [
      {
        "name": "Abhishek Singh",
        "image": "/images/abhishek.webp",
        "bio": "Abhishek Singh is a researcher from Jawaharlal Nehru University (JNU) and co-founder of an AI startup. An Assistant Professor specialising in complex systems, his work focuses on the intersection of emerging technologies, intelligence, and public diplomacy. He leads the digital architecture and strategic execution for IERF.",
        "linkedin": "https://www.linkedin.com/in/abhisheksingh22141/"
      },
      {
        "name": "Avadhesh Kumar",
        "image": "/images/avadhesh.webp",
        "bio": "Avadhesh Kumar is a researcher at IIT Delhi and co-founder of an AI startup. Currently pursuing an M.Tech in Computer Technology, his work focuses on the intersection of systems engineering and advanced artificial intelligence, with specific expertise in high-performance Transformer models and mathematical reasoning in LLMs. He leads the technical development and systems architecture for IERF.",
        "linkedin": "https://www.linkedin.com/in/avadhak/"
      }
    ],
    "advisor": {
      "name": "Dr. Pravesh Kumar Gupta",
      "image": "/images/image1.webp",
      "bio": "Dr Pravesh Kumar Gupta is an Associate Fellow at the Vivekananda International Foundation (VIF) and an expert on Eurasian geopolitics. He holds a PhD in Central Asian Studies from the School of International Studies, Jawaharlal Nehru University (JNU), New Delhi. His research focuses on the society and politics of the Central Asian Republics, the geopolitics of Central and South Asia, energy security, and trans-regional connectivity and energy linkages between Central and South Asia.\n\nDr Gupta's views are regularly published in leading platforms, such as The Hindustan Times, The Financial Express, Dunyo Information Agency (Information Agency of the Ministry of Foreign Affairs of the Republic of Uzbekistan), and the Valdai Discussion Club. He has authored a book and contributed chapters to several edited volumes in his areas of specialisation. He has also served as an International Election Observer during the Presidential Elections in Uzbekistan in 2021 and the constitutional referendum in 2023.",
      "linkedin": "https://www.linkedin.com/in/dr-pravesh-kumar-gupta-57a607187/"
    },
    "scholarlyNetwork": [
      {
        "name": "Kishan Srinivas",
        "image": "/images/image9.webp",
        "bio": "Kishan Srinivas is a Master's student of Political Science at the Department of Political Science, University of Delhi, India. He holds a B.Tech in Electronics and Communication Engineering from Presidency University, Bangalore, India. With an interdisciplinary academic background, Kishan's areas of research interest include the intersection of Science and Technology with Political Science and International Relations. His research also includes studying the role of technology in Diplomacy and International Relations. He has previously worked as an AI and Geopolitical Risk intern at Hozint.",
        "linkedin": "https://www.linkedin.com/in/kishansrinivas070520"
      },
      {
        "name": "Arkadyute Nath",
        "image": "/images/image7.webp",
        "bio": "Arkadyute has completed his undergraduate studies in English literature from Hansraj College, University of Delhi. He is currently working as a Program Assistant and Social Media Manager at TGMC, under ArtSpeaks India.",
        "linkedin": "https://www.linkedin.com/in/arkadyute-nath-503008379/"
      },
      {
        "name": "Ravi Raj",
        "image": "/images/image14.webp",
        "bio": "Ravi Raj is a research scholar at the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University (JNU), New Delhi. His research focuses on nuclear nonproliferation, peacebuilding and conflict resolution in Eurasia, energy geopolitics, and India–Russia relations. He has participated in several international academic and policy forums, including the Nasser Fellowship in Egypt. He regularly contributes analytical pieces on global and regional security affairs.",
        "linkedin": "https://www.linkedin.com/in/ravi-raj-165145278/"
      },
      {
        "name": "Vaibhavi Gupta",
        "image": "/images/image5.webp",
        "bio": "Vaibhavi Gupta is a Junior Research Fellow with the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University, New Delhi, India. She is currently pursuing a PhD at the same institution. Her research interests include post-colonial and critical theories of IR, Russian literature and philosophy. As an early career researcher specialising in post-Soviet and contemporary Russian studies, her primary focus is on how non-traditional actors/institutions interact with traditional actors to shape global affairs.",
        "linkedin": "https://www.linkedin.com/in/vaibhavi-g-67363b226/"
      },
      {
        "name": "Saumya Tomar",
        "image": "/images/Saumya.webp",
        "bio": "Saumya Tomar is a Junior Research Fellow at the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University, New Delhi. She is a PhD candidate at the same institution. Her research interests include climate change, environmental security and environmental governance in Eurasia, with a special focus on the Arctic and Baltic Region. Her work examines how environmental transformation influences governance structures, disrupts economic activity, and shapes geopolitical dynamics in the Post-Soviet space.",
        "linkedin": "https://www.linkedin.com/in/saumya-tomar-6b2a76345/"
      },
      {
        "name": "Aditya Harsh",
        "image": "/images/image11.webp",
        "bio": "Aditya is a PhD candidate at the Centre for Russian and Central Asian Studies (CRCAS), School of International Studies, Jawaharlal Nehru University (JNU). His research engages with foreign policy analysis, especially Russia's foreign policy behaviour and India's strategic positioning within Russian policy frameworks. He has written on issues such as soft power, shifting geopolitical alignments, and the evolving dynamics of regional and global politics. His research aims to provide policy-relevant insights into contemporary geopolitical trends and their implications for India's foreign policy and regional security.",
        "linkedin": "https://www.linkedin.com/in/aditya-harsh-474050250/"
      },
      {
        "name": "Avik Sarkar",
        "image": "/images/image3.webp",
        "bio": "Avik Sarkar is a Senior Research Fellow with the Centre for Political Studies, Jawaharlal Nehru University, New Delhi. He works at the intersection of agrarian political economy and Subaltern Studies in India. His PhD thesis interrogates the fall of the world's longest-serving democratically elected Communist government in the Indian state of West Bengal. He is also interested in colonial-era Indian engagements with Germany and Russia. With deep interest in political philosophy, he advocates the need to blend Indian and non-Eurocentric conceptual universes.",
        "linkedin": ""
      },
      {
        "name": "Harshal Raj Patel",
        "image": "/images/image12.webp",
        "bio": "Harshal Raj Patel completed his undergraduate studies in Philosophy at Hansraj College, University of Delhi. His final-year dissertation examined meritocracy and the concept of justice. His research interests include society, diplomatic history, and South Asian affairs. Alongside his academic pursuits, he has worked as a consultant at a New Delhi-based political consultancy. He is also a freelance columnist and contributes regularly to The Tribune, covering nationalism, geopolitics, and diplomatic history.",
        "linkedin": "https://www.linkedin.com/in/harshal-raj-patel-b81682259/"
      },
      {
        "name": "Jyotsna Yadav",
        "image": "",
        "bio": "Jyotsna is a PhD student at the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University, New Delhi. Her areas of interest include Geopolitics, Critical Infrastructure and Governance in Eurasia, with special focus on the Arctic. Her work examines the evolving geopolitical tensions in the Arctic High North and the increasing securitisation of the global commons.",
        "linkedin": "https://www.linkedin.com/in/jyotsna-yadav-289a7a220?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      }
    ]
  },
  "publications": [
    {
      "id": "india-chabahar-final",
      "title": "From Ayni to Chabahar: India’s Strategic Retreat from Central Asia?",
      "type": "Commentary",
      "date": "May 2024",
      "author": "Rahul Gupta",
      "description": "While India’s exit from the Ayni Airbase was seen as a symbolic loss, the winding down of operations at Chabahar could significantly undermine India’s Central Asia outreach and weaken its long-term presence in Eurasia.",
      "image": "/images/publications/StockImage_Commentary.jpg",
      "content": "<p>For the last two decades, India tried to expand its presence in its extended neighbourhood, a set of regions beyond South Asia which significantly affect its growth and security. While the extended neighbourhood approach towards West Asia and East Asia was relatively successful, registering significant growth in terms of trade and investments in the last decade, Central Asia continues to lie on the outskirts of India’s Extended Neighbourhood despite tall claims. The latest developments in the region, such as India’s exit from the Ayni Airbase in Tajikistan last year, and more significantly, its decision to pull out of the Chabahar port project following the expiring US sanctions’ exemption will diminish India’s presence in Central Asia. The ongoing US-Israeli attack on Iran and rising Chinese and Pakistani footprint in the region might further signal India’s strategic retreat from a geopolitically significant Eurasia.</p><h3>Central Asia’s significance in India’s Extended Neighbourhood</h3><p>For much of the post-Soviet period, Indian policy makers and analysts acknowledged India’s strategic interests in Central Asia, emphasising its immense hydrocarbon and critical mineral reserves. The region’s significance was further supported by South Asia’s historical linkages with Central Asia, as for several centuries, the Silk Road was the conduit of Eurasian continental trade and the site of hybridisation of cultures across Eurasia. From a regional security perspective, India’s security was closely tied to the region as its threat perceptions and many of its ruling dynasties originated from Central Asia. Meanwhile, India realised it had limited options and instruments to project influence in the region despite its importance in Eurasian geopolitics.</p><p>Following the dissolution of the Soviet Union, India recognised the newly independent Central Asian republics, terming the region “high priority”. However, domestic economic restructuring in India and post-Soviet economic headwinds and political instability in Central Asia kept bilateral trade below the potential. Despite inconsequential trade turnover as part of each other’s total foreign trade, India continued to reiterate Central Asia’s significance in the extended neighbourhood. Focusing on high-level diplomatic outreach to the region, Prime Minister Narendra Modi’s visited all the five Central Asian republics in 2015, a first in India’s diplomatic history. Regional security was another area of concern for India as the spread of religious fundamentalism and extremism from the Afghanistan-Pakistan region made it necessary to have a security presence in Central Asia.</p><h3>India’s connectivity push in Central Asia in the Post-Cold War era</h3><p>Riding on the geopolitical momentum of the twenty-first century and in response to emerging energy and human security challenges, India shifted it geoeconomic approach to the region. It signed the multi-modal International North South Transport Corridor in 2000 with Russia and Iran to develop overland trade between India, Iran and Russia, with the objective to reach markets in Central Asia and Europe. Following years of negotiations over funding, customs regulations, and other operational bottlenecks, India soon realised the importance of Iran in connecting with Central Asia and Afghanistan. The INSTC’s transnational scale and huge investment demands, however, nudged India to develop more regionally-oriented, Iran-linked infrastructure to connect with Central Asia.</p><h3>Chabahar and the illusion of regional connectivity</h3><p>In 2015, India signed the Chabahar port project with Iran, projecting it as a gateway to Central Asia and to deliver humanitarian aid to Afghanistan. Iran’s only deep-water sea port, Chabahar addressed Indian concerns over Pakistan’s denial of overland access to Afghanistan. The port’s regional profile rose when India signed the Ashgabat Agreement in 2018, and in 2021, proposed Chabahar’s integration in INSTC, projecting Indian influence in the region for the first time. India endorsed the port’s regional utility by successfully lobbying the US government to exempt Chabahar from sanctions. In May 2024, India’s Indian Ports Global Limited (IPGL) signed a ten-year contract with Iran’s Port and Maritime Organisation (PMO) to develop the Shahid-Beheshti terminal of Chabahar port, committing $120 million for developing the port and offering a $250 million line of credit for expanding Chabahar-related regional infrastructure.</p><h3>India’s ad hoc approach to Central Asia</h3><p>Evidently, Chabahar became the lodestar of India’s connectivity push with Central Asia in the last decade. It was also projected as India’s only viable land-link with Afghanistan, delivering over 2.5 million tons of wheat and humanitarian aid during the Covid-19 pandemic to the embattled country. India’s bilateral trade with Central Asian republics also doubled in the last decade, partly due to Chabahar’s operationalisation and due to strengthening of the institutional framework of relations through dialogue and summit-level frameworks in 2019 and 2022. Modest growth in India-Central Asia trade notwithstanding, the quantum of trade still remains much less than that of Russia, China and Turkey’s trade with the region. Nevertheless, India’s excellent relations with Iran and Central Asia made Chabahar a successful example of India’s regional diplomacy in an otherwise complex region, giving landlocked Central Asian countries access to the Indian Ocean.</p><h3>US sanctions on Iran and India’s Strategic Retreat from Central Asia</h3><p>India’s optimism over its foreign policy posturing of strategic autonomy, however, turned to be short lived in the wake of the US President’s twenty-five percent tariffs threat to countries doing trade with Iran early this year. Facing rising US pressure, India had already been reducing oil and gas imports from Iran, with bilateral trade going down from $17 billion in 2018-2019 to $1.68 billion in 2024-2025, but the latest US threat comes as a significant setback. The Economic Times reported early this year that following US’ sanctions exemption expiring in September last year, India had begun winding up operations at Chabahar, transferring the remaining financial commitment to Iran and exiting from operations at the port.</p><p>This news comes at the backdrop of another revelation in October last year that India had exited the Ayni Airbase, a small functional airbase on the outskirt of the Tajik capital of Dushanbe, which India refurbished in the early 2000s and used as a listening post near the Tajik-Afghan border. The exit from Ayni Airbase last year was still seen as a symbolic loss, given India’s already limited security presence in the region. However, the winding up of Indian operations at Chabahar, a project in which India has invested close to half a billion dollars and extensive diplomatic capital, will have lasting repercussions.</p><p>On a bilateral level, India’s already strained trade ties with Iran comes in the backdrop of the rapidly evolving situation in West Asia. As the US-Israeli attack on Iran unfolds, reports suggest aerial damage around the port city of Chabahar, even though there is no damage reported at the India operated Shahid Beheshti terminal However, the Israeli-US strikes on Iran’s critical infrastructure will complicate India’s limited operational role in the port, and discourage private investment in the future. In a region which India considers its extended neighbourhood, stepping down from Chabahar without an alternative will undermine India’s already limited engagement with Central Asia. On the other hand, it will strengthen Pakistan’s credibility to the Central Asian republics for accessing the Indian ocean through Chinese-led BRI infrastructure. In the wider region, ceding space to China and Pakistan will erode India’s long-term presence in Eurasia.</p><hr/><p><i>Rahul Gupta is a Senior Research Fellow at the Centre for Russian and Central Asian Studies, School of International Studies, Jawaharlal Nehru University, New Delhi, India. He is also the Founder Director of India Eurasia Research Forum (IERF).<br/><br/>The views expressed by the author are solely their own and do not reflect or represent those of the India Eurasia Research Forum (IERF).</i></p>"
    },
    {
      "id": "nur-stories-from-eurasia",
      "title": "A Journey of Dialogue and Discovery: My Experience in India",
      "type": "Stories from Eurasia",
      "date": "2025",
      "author": "Nurbolat Toktamys",
      "description": "In 2025, I had the privilege of visiting India as a delegate of the 3rd India Central Asia Youth Delegation Forum. For me, the journey was more than a diplomatic event or an international conference.",
      "image": "/images/publications/Stock2_StoriesFromEurasia.jpeg",
      "content": "<p>In 2025, I had the privilege of visiting India as a delegate of the 3rd India Central Asia Youth Delegation Forum. For me, the journey was more than a diplomatic event or an international conference. It was a deeply meaningful opportunity to experience a country that has long maintained historical, cultural, and intellectual ties with Central Asia.</p><p>As someone who grew up in Kazakhstan and now teaches chemistry at the Nazarbayev Intellectual School in Turkestan, I have always been interested in how countries collaborate through education, science, and youth engagement. The forum offered exactly that: a platform where young professionals from Central Asia could exchange ideas with Indian counterparts about regional cooperation, innovation, and cultural understanding.</p><p>From the moment I arrived, India left a strong impression on me. The scale, diversity, and energy of the country was remarkable. Cities moved at an intense rhythm, yet there was also a sense of openness and curiosity among the people I met. India felt both ancient and modern at the same time – a place where centuries-old traditions coexist with technological innovation and ambitious economic development.</p><br/><i>A traditional Indian reception for the Central Asian Youth Delegation, March, 2025</i><br/><br/><p>The Youth Forum itself was organised at a very high level by New Delhi. The program included discussions with policymakers, scholars, and young leaders who shared perspectives on regional cooperation between India and Central Asia. These conversations highlighted the strategic importance of strengthening people-to-people connections and building cross-cultural connections. While governments can establish diplomatic frameworks, it is often students, researchers, and young professionals who build the real bridges between societies.</p><p>One of the most memorable aspects of the visit was interacting with fellow participants from different countries. Delegates from Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan, and Turkmenistan had the opportunity to share their views on regional development and cultural exchange. At the same time, Indian participants introduced us to the intellectual and cultural diversity of their country. These conversations were not limited to formal sessions. Some of the most valuable exchanges happened during informal discussions, shared meals, and cultural visits.</p><p>India’s cultural richness also left a lasting impression on me. Walking through historical landmarks and observing daily life offered insights that no book or lecture could fully convey. The architecture, art, and traditions reflected a long and complex history that has shaped the identity of the country. At the same time, I was struck by how strongly young Indians are engaging with global issues such as technology, entrepreneurship, and sustainable development.</p><p>Another aspect that impressed me was India’s commitment to education and knowledge exchange. As an educator myself, I was particularly interested in how universities, research institutions, and policy think tanks collaborate to support innovation and international dialogue. The forum demonstrated that India sees education and youth engagement as important tools of public diplomacy and regional cooperation.</p><br/><i>At the Indian Institute of Technology, Delhi, India</i><br/><br/><p>For me, the visit also reinforced the historical connections between Central Asia and India, which are more than a millennium old. For centuries, trade routes, cultural exchange, and intellectual interaction linked the two regions. Today, these connections continue in new forms through academic partnerships, cultural initiatives, and youth forums such as the one I attended. It was inspiring to see how modern diplomacy is built upon these historical ties.</p><p>One of my main takeaways from the experience is the importance of dialogue and mutual understanding. When people from different countries meet and share their perspectives, stereotypes disappear, and genuine partnerships can emerge. International cooperation becomes more meaningful when it is supported by personal relationships and cultural awareness.</p><p>As a teacher, this experience also influenced how I think about education. I realised that preparing students for the future requires more than strong academic knowledge. It also requires global awareness, cultural openness, and the ability to collaborate with people from different backgrounds. Experiences like the India – Central Asia Youth Forum demonstrate the value of international engagement in shaping the next generation of leaders.</p><br/><i>From a meeting with educationists and industry leaders</i><br/><br/><p>When I returned to Kazakhstan, I shared my experiences with colleagues and students. Many of them were curious to learn more about India – its culture, society, and opportunities for collaboration. This exchange of stories and perspectives is exactly how international understanding grows: through individual experiences that inspire broader curiosity and dialogue.</p><p>Looking back, my visit to India was not only a professional opportunity but also a personal journey of discovery. It allowed me to see a country that is vibrant, diverse, and forward-looking. More importantly, it reminded me that meaningful cooperation between regions begins with human connections.</p><p>Initiatives such as the India – Central Asia Youth Forum play an important role in strengthening these connections. By bringing together young people from different societies, they help build the foundations for long-term cooperation and goodwill.</p><p>I hope that exchanges between India and Central Asia will continue to grow in the coming years. The potential for collaboration in education, science, culture, and innovation is enormous. For young professionals like me, participating in such initiatives is both a privilege and a responsibility – to carry forward the spirit of dialogue and partnership that these forums represent.</p><hr/><p><i>Nurbolat Toktamys teaches chemistry at the Nazarbayev Intellectual School of Science and Mathematics in Turkestan, Kazakhstan. He mentors students in scientific research and actively promotes international youth dialogue, educational collaboration, and cultural exchange between Central Asia and the broader Eurasian region.<br/><br/>The views expressed by the author are solely their own and do not represent those of the India Eurasia Research Forum (IERF).</i></p>"
    },
    {
      "id": "eurasia-strategic-calculus",
      "title": "Eurasia in India's Strategic Calculus",
      "type": "Perspectives/Special Research Note",
      "date": "31 March, 2026",
      "author": "Dr. Pravesh Gupta",
      "description": "Globally, Eurasia refers to the world's largest continuous landmass, combining Europe and Asia as a single supercontinent.",
      "image": "/images/publications/StockImage_SpecialResearchNote.jpeg",
      "content": "<br/><i>A view of the Rashtrapati Bhawan, New Delhi, India</i><br/><br/><p>Globally, Eurasia refers to the world's largest continuous landmass, combining Europe and Asia as a single supercontinent. The term originated in the 19th century as a geographical construct. Later, it was popularised by political geographers to describe the combined Europe-Asia landmass without artificial divisions like the Ural Mountains. In geopolitical discourse, it gained prominence through Halford Mackinder's Heartland theory in the early 20th century. Mackinder’s Heartland theory suggested that control of the Eurasian core (especially Central Asia) is pivotal to global dominance. In the post-Soviet era, this geopolitical reading of Eurasia has evolved. Russian thinkers like Alexander Dugin advocated it as Eurasianism and have framed it as a unique civilizational space blending Slavic, Turkic, and steppe elements.</p><p>Because of the geostrategic location and abundance of natural resources, Eurasia has long been a playground for major power play in the twenty-first century. For each major power engaged in Eurasia, distinct conceptions of the construct reflect their geopolitical interests. Russia’s conception of ‘Sphere of Influence’ and resisting Western dominance in its backyard is one of its main geopolitical objectives in Eurasia. For China, the region is important for both economic and security interests. For the US and the West, Eurasia is seen as a theatre for containing Russia and China, the heartland’s dominant powers. While all such distinct national conceptions of Eurasia treat Central Asia as the locus region, the term itself has become a ‘definitional morass’, evading strict definitions or geographical strictures.</p><p>For India, Eurasia is not merely geographical but a civilizational and strategic continuum rooted in ancient linkages spanning across millennia. Much before the Silk Road, the Indian subcontinent, or South Asia today, frequently exchanged ideas, commodities, peoples and philosophies with this region. In the twenty-first century, it represents India's extended neighbourhood beyond the maritime domain, encompassing energy-rich Central Asia, the Caspian Sea linked-Caucasus region, and Russia. Afghanistan also occupies a pivotal place in India’s conception of Eurasia as it serves as an interface between Central and South Asia, and is sometimes treated simultaneously as part of India’s immediate and extended neighbourhoods.</p><p>Unlike the Western view of Eurasia as a heartland prize or Russian civilizational narrative, India's conception of Eurasia emphasises mutual respect for sovereignty, multipolarity, and balanced partnerships. The region itself is vital for India's energy security - oil, gas, uranium and critical minerals. The forces of extremism and radicalisation in the region, especially in the Afghanistan-Pakistan border region, makes the area of strategic interest to India. As a result, India has promoted counter-terrorism cooperation with Afghanistan and the Central Asian republic. Another major driving force in India’s Eurasia calculus include the imperative of trade diversification with this underexplored region, and to prevent its encirclement by any single power.</p><p>New Delhi's potential focus on the Eurasian region is also driven by its historical and cultural ties to Eurasian countries, especially Russia and the Central Asian Republics. For India’s Eurasia strategy, Central Asia serves as the core, Afghanistan as a gateway, the South Caucasus as a strategic partner for shared interests in regional connectivity, and Russia as a reliable partner. India rejects zero-sum games and aspires to forge strategic partnerships and alliances with countries with common interests in regional stability, economic development, and multilateral cooperation. India's view avoids ideological framing, focusing on developmental partnerships and is rooted in the principle of strategic autonomy.</p><p>New Delhi continues to describe the region as part of its ‘extended neighbourhood’ and a ‘natural partner.’ Yet, this narrative has not translated into tangible strategic or economic gains. The Eurasian region presents immense economic opportunities for India. By leveraging its historical connections with the region, India aims to foster stronger people-to-people relations, promote tourism, and enhance cultural diplomacy. Rich in natural resources and strategically located along key trade routes, the region offers the potential for enhanced trade, investment, and energy cooperation.</p><p>India can tap into these markets, diversify its economic engagements, and strengthen its energy security. India's engagement with Eurasia is also crucial for maintaining a balance of power in the region as it seeks to promote a multipolar Eurasian order as a precursor to a just multipolar world. Unlike China and Russia's increasing assertiveness in Eurasia through initiatives such as the Belt and Road Initiative (BRI) and the Shanghai Cooperation Organisation (SCO), India however, lacks strong institutional grounding or a regional grouping of its own through which it can actively participate in safeguarding its interests and counterbalance regional imbalances.</p><p>In the contemporary era, India's foreign policy has leaned towards the maritime domain (Indo-Pacific, Act East, Quad). On closer enquiry, this is partly due to the colonial legacy of the partition of South Asia in 1947 and the subsequent Pakistani refusal to allow India passage to Afghanistan and Central Asia. These structural constraints have led to relative Indian neglect of continental Eurasia in the last seven decades, despite enduring civilizational ties and several material linkages predating the partition of the subcontinent. India’s ‘Connect Central Asia’ policy in 2012 marked a shift, but implementation lagged amid maritime priorities and continuing instability in Afghanistan.</p><p>Prime Minister Narendra Modi’s visit to all the five Central Asian countries in 2015 signalled a high point in India’s regional outreach. However, high-level exchanges have since remained limited; the last state visit to India by a Central Asian leader was of Uzbek President Shavkat Mirziyoyev in 2018. Even though India-Central Asia relations matured in the last decade, beginning with the institutionalisation of dialogue at the foreign ministers’ level in 2019, the first India–Central Asia Summit convened virtually in 2022, and the SCO Summit under India’s presidency held in a virtual format in 2023, the absence of sustained, in-person high-level engagements has contributed to a perception that India’s engagement with Central Asia has lost momentum.</p><p>Broader geopolitical developments, including the fallout of the Russian-Ukrainian war, tensions in West Asia centring Iran, and shifting Eurasian connectivity dynamics, are reshaping the strategic calculations of the regional countries in Eurasia. Regional states are increasingly pursuing multi-vector foreign policies while expanding their engagement with a wide range of external partners. These developments, while presenting a complex geopolitical situation, are opening a sliver of opportunity for India. The country is well-placed as a neutral balancer with strong and resilient ties with Russia and Central Asian countries.</p><p>However, limited connectivity and the gap between policy formulation and implementation continue to hinder India’s Eurasia strategy. To bridge this gap, India must adopt a consolidated, multi-pronged continental strategy prioritising alternative connectivity; including exploring air and digital connectivity. Leveraging soft power, including expanding educational cooperation, promoting cultural connections, bolstering people-to-people contacts and capacity-building programmes must be given high priority. In the absence of direct connectivity, incentivised investments (especially by private sector and through global arms of Indian public sector undertakings), localisation of bilateral economic activities, and digital cooperation have huge potential to grow.</p><p>Integrating Eurasia into India's broader grand strategy by balancing its maritime and continental dimensions is essential for sustained, meaningful engagement in the region. Despite geopolitical, logistical, and infrastructural barriers, New Delhi can steadily expand its influence through consensual partnerships that prioritize mutual respect for sovereignty and shared prosperity. Reclaiming India’s continental thinking in terms of foreign and defence policy does not necessarily mean undermining its maritime priorities. It only needs a thorough, interest-based reassessment of India’s strategic alignments through a bold engagement with the region and an ability to think beyond the obvious.</p><p>Against this evolving backdrop, the India Eurasia Research Forum (IERF) stands uniquely positioned to bridge persistent gaps and accelerate sustained, high-impact engagement between India and Eurasian stakeholders. As a dedicated platform focused exclusively on India-Eurasia ties, unlike broader think tanks with diversified mandates, IERF delivers targeted, high-quality research and facilitates multi-stakeholder dialogues. It convenes Track 1.5 and Track 2 initiatives that bring together government officials, domain experts, civil society, academia, and private-sector actors to address priority domains. This will include Physical and digital connectivity (including INSTC optimization, Chabahar synergies, air/digital corridors, and emerging tech linkages), security and counter-terrorism cooperation, energy security and critical minerals, cultural and people-to-people ties (education, tourism, capacity-building, and heritage diplomacy) and multipolarity and balanced regional dynamics.</p><p>Through regular seminars, webinars, policy roundtables, and Track 1.5 exchanges, IERF will generate actionable outputs such as commentaries, policy briefs, articles, joint research publications, and facilitate bilateral/multilateral exchanges. These efforts amplify India's strategic voice in Eurasian discourse while ensuring reciprocal insights flow back to New Delhi. This will help foster mutual understanding and consensus-driven partnerships.</p><p>In a rapidly transforming Eurasia, marked by multi-vector foreign policies and connectivity realignments, IERF will serve as a vital enabler. By driving evidence-based continental re-engagement, it will help India build enduring strategic depth that complements its continental priorities, safeguarding national interests through sovereignty-respecting cooperation and shared prosperity.</p><hr/><p><i>Dr. Pravesh Kumar Gupta is an Associate Fellow at the Vivekananda International Foundation (VIF). He is also the Research Advisor to the India Eurasia Research Forum (IERF). Dr. Gupta is an expert on Eurasian geopolitics and his research focuses on the society and politics of Central Asia, energy security and sustainability, and trans-regional connectivity linkages between Central and South Asia.</i></p>"
    }
  ],
  "events": {
    "subtitle": "Join our expert-led discussions, seminars, and our flagship dialogue series bridging India and Eurasia.",
    "items": [
      {
        "title": "Volga to Ganga Dialogues",
        "date": "Ongoing Platform",
        "type": "Flagship Series",
        "location": "New Delhi / Virtual",
        "description": "The Volga to Ganga Dialogues is India Eurasia Research Forum’s flagship platform dedicated to exploring the civilisational, cultural and intellectual linkages between India and the wider Eurasian region.",
        "link": "/events/volga-to-ganga",
        "featured": true
      },
      {
        "title": "India-Central Asia Relations: The Road Ahead",
        "date": "May 15, 2026",
        "type": "Webinar",
        "location": "Virtual",
        "description": "An expert panel discussing the future of strategic and economic partnerships between India and the Central Asian Republics.",
        "link": "#",
        "featured": false
      },
      {
        "title": "Connectivity Corridors in Eurasia",
        "date": "June 02, 2026",
        "type": "Roundtable",
        "location": "New Delhi",
        "description": "A focused discussion on the evolving logistics networks and their implications for trans-regional trade.",
        "link": "#",
        "featured": false
      }
    ]
  },
  "writeForUs": {
    "subtitle": "Contribute your insights to India's first research network dedicated to the comprehensive study of the Eurasian region.",
    "categories": [
      {
        "title": "Perspectives",
        "limit": "Up to 1500 words",
        "desc": "Original and analytically grounded articles on broad themes related to Eurasia. Explore geopolitics, geoeconomics, regional connectivity, security, energy, culture and history."
      },
      {
        "title": "Commentary",
        "limit": "Up to 1200 words",
        "desc": "Brief commentaries on contemporary developments and unfolding regional dynamics. Informed, timely analysis of regional shifts in India’s engagement."
      },
      {
        "title": "Stories from Eurasia",
        "limit": "Up to 1000 words",
        "desc": "Travel accounts and cultural portraits of Indian and Eurasian cities. Highlighting everyday encounters, cultural experiences, and people-to-people connections."
      }
    ],
    "guidelines": [
      "Structured & Correct: Articles should be well-written and factually correct.",
      "Original Content: Submissions must not have been published elsewhere.",
      "No in-text citations: IERF does not use endnotes or in-text citations.",
      "Hyperlinks only: All references must be hyperlinked directly in the text.",
      "Pitching: We accept unsolicited submissions, but pitching first is welcome."
    ],
    "ctaHeading": "Ready to publish?",
    "ctaBody": "\"Please send your submission along with a brief author bio (50 words) and a profile picture to our editorial team.\"",
    "submissionEmail": "submissions@indiaeurasia.org"
  },
  "contact": {
    "subtitle": "Get in touch with our team for research inquiries, membership details, or potential collaborations.",
    "heading": "Global Reach,",
    "subheading": "Local Insight.",
    "body": "We are always open to hearing from scholars, policy experts, and organizations interested in the India-Eurasian dialogue.",
    "info": [
      {
        "title": "Email Us",
        "desc": "For general inquiries and research collaborations",
        "value": "connect@indiaeurasia.org",
        "href": "mailto:connect@indiaeurasia.org"
      },
      {
        "title": "Visit Us",
        "desc": "",
        "value": "New Delhi, India",
        "href": "#"
      },
      {
        "title": "Call Us",
        "desc": "",
        "value": "+91 7982288501",
        "href": "tel:+917982288501"
      }
    ]
  },
  "volgaToGanga": {
    "subtitle": "Exploring the civilisational, cultural and intellectual linkages between India and the wider Eurasian region.",
    "mainQuote": "\"The Volga to Ganga Dialogues is India Eurasia Research Forum’s flagship platform dedicated to exploring the civilisational, cultural and intellectual linkages between India and the wider Eurasian region.\"",
    "paragraphs": [
      "Drawing inspiration from the deep historical linkages and intellectual traditions that have connected societies across the Eurasian landmass, the dialogue series brings together scholars, diplomats, artists and practitioners to engage in reflective conversations that transcend geopolitics.",
      "The dialogue series seeks to foster mutual understanding, people-to-people connections, and a shared appreciation of the enduring ties between the regions falling between the Volga and the Ganga river basins."
    ],
    "ctaPhase": "Phase: Initiative Launch",
    "ctaHeading": "Coming Soon",
    "ctaBody": "Stay tuned for updates on our upcoming hybrid and physical dialogue series."
  },
  "digieurasia": {
    "subtitle": "A curated community gallery capturing the physical and human geography of India and Eurasia.",
    "heading": "Capturing the living fabric of our civilizations.",
    "quote": "\"At IERF, we believe that true diplomacy begins with the eyes of the people. Your lens helps us document the common horizons and diverse landscapes of our shared landmass.\"",
    "images": [
      {
        "url": "/images/digieurasia/landscape-1.webp",
        "caption": "Modern Architecture of Nur-Sultan, Kazakhstan",
        "location": "Kazakhstan"
      },
      {
        "url": "/images/digieurasia/landscape-2.webp",
        "caption": "The heart of Central Asia - Architectural detail",
        "location": "Nur-Sultan"
      },
      {
        "url": "/images/digieurasia/landscape-3.webp",
        "caption": "Ancient motifs in a modern capital",
        "location": "Kazakhstan"
      },
      {
        "url": "/images/digieurasia/landscape-4.webp",
        "caption": "Aerial view of the Rashtrapati Bhawan",
        "location": "New Delhi, India"
      }
    ],
    "ctaHeading": "Submit your lens",
    "ctaBody": "Attach up to three photos in PNG/JPG format reflecting the architecture, geography, or cultural fabric of Indo-Eurasia. Please include a one-line caption and confirm you are the original photographer.",
    "submissionEmail": "submissions@indiaeurasia.org"
  },
  "ierfTalks": {
    "subtitle": "Expert perspectives and scholarly dialogues on Eurasian affairs.",
    "heading": "Coming up soon",
    "body": "We are currently curating a series of high-impact talks featuring leading scholars, policymakers, and industry experts. Stay tuned for our inaugural session."
  },
  "footer": {
    "description": "An independent research and public diplomacy platform dedicated to strengthening dialogue and deepening cooperation between India and Eurasia.",
    "newsletterTitle": "Join our Newsletter",
    "newsletterBody": "Receive the latest insights and updates from the IERF network."
  },
  "settings": {
    "siteName": "India Eurasia Research Forum",
    "siteLogo": "/logo.webp",
    "socials": {
      "x": "https://x.com/IndiaEurasia",
      "instagram": "https://www.instagram.com/indiaeurasiaresearchforum/",
      "linkedin": "https://www.linkedin.com/company/indiaeurasia/",
      "youtube": "https://www.youtube.com/@indiaeurasia"
    },
    "footerCopyright": "© 2026 India Eurasia Research Forum. All rights reserved."
  }
};
