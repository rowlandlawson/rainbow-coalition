export interface Project {
  title: string;
  year: string;
  note: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  area: string;
  role: string;
  photo: string;
  bio: string;
  vision: string;
  mission: string;
  projects: Project[];
}

export interface Office {
  num: number;
  key: string;
  title: string;
  sub: string;
  color: string;
  colorClass: string;
  borderClass: string;
  bgTint: string;
  badgeBg: string;
  people: Candidate[];
}

export const offices: Office[] = [
  {
    num: 1,
    key: "president",
    title: "President & Vice President",
    sub: "Federal Republic of Nigeria · National Ticket",
    color: "#e8090e",
    colorClass: "text-[#e8090e]",
    borderClass: "border-[#e8090e]",
    bgTint: "bg-[#fff0f2]",
    badgeBg: "bg-[#e8090e]",
    people: [
      {
        id: "president-0",
        name: "His Excellency Bola Ahmed Tinubu, GCFR",
        party: "APC",
        area: "President",
        role: "Presidential Candidate",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636265/tinubu-removebg-preview_kad87v.png",
        bio: "President of the Federal Republic of Nigeria. Former Governor of Lagos State, leading visionary reforms in national infrastructure, economy, and social welfare under the Renewed Hope Agenda.",
        vision:
          "A secure, prosperous, and united Nigeria where economic opportunity reaches every citizen in every corner of our federation.",
        mission:
          "Reforming key macroeconomic structures, expanding critical transit and power infrastructure, and empowering Nigerian youth and businesses.",
        projects: [
          {
            title: "Renewed Hope Infrastructure Development Fund",
            year: "2024",
            note: "Connecting coastal highways, ports, and national transport networks",
          },
          {
            title: "National Student Loan & Education Access Scheme",
            year: "2024",
            note: "Providing tuition-free loans to higher education students nationwide",
          },
        ],
      },
      {
        id: "president-1",
        name: "Sen. Kashim Shettima",
        party: "APC",
        area: "Vice President",
        role: "Vice Presidential Candidate",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636265/shettima-removebg-preview_vopw3w.png",
        bio: "Vice President of Nigeria, former two-term Governor of Borno State, and former distinguished Senator. Recognized for exceptional crisis management, public governance, and education reform.",
        vision:
          "An inclusive nation leveraging technology, agriculture, and human capital to become Africa's premier economic powerhouse.",
        mission:
          "Supervising economic councils, driving nationwide MSME empowerment clinics, and fostering national social harmony.",
        projects: [
          {
            title: "National MSME & Enterprise Support Clinics",
            year: "2024",
            note: "Delivering grants and technical assistance to thousands of small businesses",
          },
          {
            title: "National Agricultural & Food Security Council",
            year: "2023",
            note: "Expanding mechanized farming and agro-processing hubs across states",
          },
        ],
      },
    ],
  },
  {
    num: 2,
    key: "governor",
    title: "Governor & Deputy Governor",
    sub: "Rivers State · Executive Ticket",
    color: "#f77f00",
    colorClass: "text-[#f77f00]",
    borderClass: "border-[#f77f00]",
    bgTint: "bg-[#fff7ed]",
    badgeBg: "bg-[#f77f00]",
    people: [
      {
        id: "governor-0",
        name: "Rt. Hon. Ogundu Kingsley Chinda",
        party: "APC",
        area: "Governor",
        role: "Governorship Candidate",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636264/chinda-nobg_zgyuvt.png",
        bio: "Distinguished legal practitioner, veteran National Assembly leader, and experienced public servant. Renowned for integrity, legislative excellence, and steadfast defense of grassroots welfare.",
        vision:
          "A modern, peaceful, and industrialized Rivers State where oil and marine wealth directly uplift every citizen and community.",
        mission:
          "Deploying transparent governance, modern riverine infrastructure, robust security networks, and widespread job creation.",
        projects: [
          {
            title: "Rural Electrification & Road Connectivity Programs",
            year: "2023",
            note: "Connecting isolated communities to urban trade centers",
          },
          {
            title: "Statewide Youth Technical & Maritime Training Hubs",
            year: "2022",
            note: "Equipping riverine youth with high-demand maritime skills",
          },
        ],
      },
      {
        id: "governor-1",
        name: "Alobo Hon. Engr Major Jack",
        party: "APC",
        area: "Deputy Governor",
        role: "Deputy Governorship Candidate",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636265/major_jack-removebg-preview_zv36eq.png",
        bio: "Accomplished engineer, grassroots community leader, and dedicated public servant. A proud Kalabari son committed to bridging riverine development with state executive execution.",
        vision:
          "Equitable coastal infrastructure and sustainable riverine economies across all 23 local government areas.",
        mission:
          "Overseeing state infrastructural standards, rural development initiatives, and technical vocational empowerment programs.",
        projects: [
          {
            title: "Shoreline Protection & Jetty Modernization Schemes",
            year: "2023",
            note: "Protecting coastal communities from erosion and improving water transit",
          },
          {
            title: "Community Solar Power & Potable Water Schemes",
            year: "2022",
            note: "Installing reliable clean energy in riverine fishing settlements",
          },
        ],
      },
    ],
  },
  {
    num: 3,
    key: "senate",
    title: "Senator",
    sub: "Rivers West Senatorial District",
    color: "#f7d117",
    colorClass: "text-[#b45309]",
    borderClass: "border-[#f7d117]",
    bgTint: "bg-[#fefce8]",
    badgeBg: "bg-[#f7d117]",
    people: [
      {
        id: "senate-0",
        name: "Felix Obuah",
        party: "APC",
        area: "Rivers West Senatorial District",
        role: "Senatorial Candidate",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636264/felix_obua-removebg-preview_d8zydp.png",
        bio: "Veteran administrator, esteemed political leader, and renowned philanthropist known popularly as 'Go-Round'. Deeply dedicated to social welfare, youth advancement, and robust riverine representation.",
        vision:
          "A vocal, fearless representation in the Nigerian Senate that secures federal projects, environmental cleanup, and jobs for Rivers West.",
        mission:
          "Sponsoring landmark legislation for Niger Delta development, maritime security, environmental restitution, and educational scholarships.",
        projects: [
          {
            title: "Rivers West Comprehensive Scholarship Fund",
            year: "2023",
            note: "Tuition and stipends for tertiary students across the senatorial district",
          },
          {
            title: "Artisanal Fishermen & Small Business Credit Schemes",
            year: "2022",
            note: "Providing low-interest micro-grants to riverine business owners",
          },
        ],
      },
    ],
  },
  {
    num: 4,
    key: "reps",
    title: "House of Representatives",
    sub: "Akuku-Toru/Asari-Toru Federal Constituency",
    color: "#2a9d57",
    colorClass: "text-[#2a9d57]",
    borderClass: "border-[#2a9d57]",
    bgTint: "bg-[#f0fdf4]",
    badgeBg: "bg-[#2a9d57]",
    people: [
      {
        id: "reps-0",
        name: "Hon. Isobo Jack",
        party: "APC",
        area: "Akuku-Toru / Asari-Toru Federal Constituency",
        role: "House of Reps Candidate",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636264/isobo_jack-removebg-preview_qi7wf5.png",
        bio: "Passionate community advocate, skilled administrator, and grassroots leader representing the shared destiny of Akulga and Asalga in the Green Chamber.",
        vision:
          "A prosperous Kalabari kingdom connected by modern maritime transit, uninterrupted power, and vibrant youth enterprise.",
        mission:
          "Demanding fair federal revenue allocation, coastal highway links, and modern vocational hubs for Akuku-Toru and Asari-Toru.",
        projects: [
          {
            title: "Federal Constituency Riverine Transport Safety Program",
            year: "2023",
            note: "Providing standardized life-jackets, outboard engines, and safety buoys",
          },
          {
            title: "Youth Digital Innovation & Coding Academies",
            year: "2023",
            note: "Empowering 500+ local youth with remote digital working skills",
          },
        ],
      },
    ],
  },
  {
    num: 5,
    key: "assembly",
    title: "State House of Assembly",
    sub: "Akuku-Toru Constituencies I & II (Pick your ward)",
    color: "#2872d8",
    colorClass: "text-[#2872d8]",
    borderClass: "border-[#2872d8]",
    bgTint: "bg-[#eff6ff]",
    badgeBg: "bg-[#2872d8]",
    people: [
      {
        id: "assembly-0",
        name: "Hon. Victor Dagogo-Jack",
        party: "APC",
        area: "Akuku-Toru Constituency 1",
        role: "State Assembly Candidate · Constituency 1",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636264/vitor_danagog_jack-removebg-preview_gtfgu2.png",
        bio: "Dedicated public servant and constituency champion committed to effective, accountable representation for the people of Akuku-Toru Constituency 1 in the Rivers State House of Assembly.",
        vision:
          "Upgraded public schools, primary healthcare centers in every ward, and robust youth employment in Constituency 1.",
        mission:
          "Enacting progressive state legislation and ensuring state budget appropriations directly benefit our local communities.",
        projects: [
          {
            title: "Constituency 1 Primary Healthcare Upgrade",
            year: "2023",
            note: "Refurbishing ward clinics and supplying essential pharmaceuticals",
          },
          {
            title: "Secondary School Science Lab Equipment Project",
            year: "2022",
            note: "Equipping local secondary schools with modern physics and chemistry kits",
          },
        ],
      },
      {
        id: "assembly-1",
        name: "Hon. Lolo Opuende",
        party: "APC",
        area: "Akuku-Toru Constituency 2",
        role: "State Assembly Candidate · Constituency 2",
        photo:
          "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636264/lolo_opuende-removebg-preview_ku4ygz.png",
        bio: "Grassroots mobilizer, respected civic leader, and stalwart advocate dedicated to delivering the democratic dividends to the communities of Akuku-Toru Constituency 2.",
        vision:
          "Revitalized fishing settlements, clean drinking water, and expanded trade opportunities for the women and youth of Constituency 2.",
        mission:
          "Sponsoring targeted constituency development bills and holding state ministries accountable for rural projects in our communities.",
        projects: [
          {
            title: "Artisanal Fishing Equipment & Cold-Chain Grants",
            year: "2023",
            note: "Empowering local fishing cooperatives with modern gear and solar cooling",
          },
          {
            title: "Women In Enterprise Micro-Grants",
            year: "2022",
            note: "Providing seed grants to over 300 market women across local wards",
          },
        ],
      },
    ],
  },
];
