export const presentationData = {
  team: [
    {
      id: 1,
      name: "Vansh Saini",
      role: "Team Leader",
      city: "Roorkee, Uttarakhand",
      borderColor: "border-t-[#1a5c1a]",
      bgColor: "bg-green-50",
      why: "Growing up near Ganga plains of Uttarakhand, witnessed farmers losing crops every season due to lack of technology. Inspired to build AI solutions for real farmers."
    },
    {
      id: 2,
      name: "Chitransh",
      role: "AI & Backend Dev",
      city: "Saharanpur, Uttar Pradesh",
      borderColor: "border-t-[#8b6f47]",
      bgColor: "bg-amber-50",
      why: "From Saharanpur's sugarcane belt, saw farmers lose 30-40% income to middlemen. Wants to build tech that gives farmers direct market access."
    },
    {
      id: 3,
      name: "Ayushi Kumari",
      role: "UI/UX & Research",
      city: "Muzaffarnagar, Bihar",
      borderColor: "border-t-[#d4853c]",
      bgColor: "bg-orange-50",
      why: "Family background in Bihar farming showed how govt schemes never reach actual farmers. Driven to change this with AI-powered information systems."
    },
    {
      id: 4,
      name: "Dev Prakash Azad",
      role: "ML & Data Engineer",
      city: "Ayodhya, Uttar Pradesh",
      borderColor: "border-t-[#c9a03a]",
      bgColor: "bg-yellow-50",
      why: "From Ayodhya's rural outskirts, saw weather uncertainty destroy crop yields every season. Mission to give every farmer a data scientist in their pocket."
    }
  ],
  problems: [
    {
      id: 1,
      icon: "🌱",
      title: "Silent Crop Killer",
      hindi: "फसल की बीमारी देर से पता चलती है",
      deepExplanation: "Farmer spends 6 months growing crop. One pest attack destroys 80% overnight. No instant diagnosis in local language.",
      stat: "₹92,000 Cr lost annually",
      whyFails: "No instant diagnosis in local language"
    },
    {
      id: 2,
      icon: "💸",
      title: "Middlemen Trap",
      hindi: "बिचौलिये 30-40% कमाई हड़प लेते हैं",
      deepExplanation: "Tomato costs ₹8/kg to grow, sold to middleman ₹5, consumer pays ₹40. Farmer earns the LEAST in entire chain.",
      stat: "Farmer gets only 23% of final price",
      whyFails: "No direct farmer-to-market platform exists"
    },
    {
      id: 3,
      icon: "🚜",
      title: "Harvest Season Crisis",
      hindi: "गेहूं कटाई में Harvester मिलता ही नहीं",
      deepExplanation: "Every April millions need harvesters simultaneously. No booking system exists. Ripe crop rots waiting for machine.",
      stat: "40% harvest loss from delayed machinery",
      whyFails: "No Uber-like system for farm machinery booking"
    },
    {
      id: 4,
      icon: "🗣️",
      title: "Technology Built for Cities",
      hindi: "70% किसान English apps use नहीं कर सकते",
      deepExplanation: "900+ agri-tech startups, almost all English-only. The farmer who needs help most is excluded from every solution built for farmers.",
      stat: "700M rural Indians excluded",
      whyFails: "Apps exclude rural farmers without English literacy"
    },
    {
      id: 5,
      icon: "📋",
      title: "Govt Scheme Black Hole",
      hindi: "सरकार हर साल 2 लाख करोड़ की योजनाएं देती है — 90% किसानों को पता ही नहीं",
      deepExplanation: "PM-KISAN, Fasal Bima Yojana, Soil Health Card — dozens of schemes exist with real financial benefits. But awareness is near zero in rural areas. Middlemen charge fees to help with FREE schemes.",
      stat: "Only 30% of eligible farmers claim their benefits",
      whyFails: "No single platform aggregates all schemes, checks eligibility, and guides application in local language."
    },
    {
      id: 6,
      icon: "🌦️",
      title: "Unpredictable Weather is Destroying Farming — Farmers Have No Warning System",
      hindi: "अनियमित बारिश और तापमान से फसल बर्बाद — किसान के पास कोई warning नहीं",
      deepExplanation: "Climate change has made Indian monsoon completely unpredictable. A farmer who sprays fertilizer before unexpected rain loses everything. Generic weather apps show city-level forecasts — useless for a specific farm.",
      stat: "Climate change causes ₹50,000 Crore crop loss yearly",
      whyFails: "IMD forecasts are district-level. No system gives field-specific 48-hour actionable advice."
    }
  ],
  features: [
    { emoji: "🔍", en: "Crop Disease Detection", hi: "फोटो से बीमारी पहचानो" },
    { emoji: "⚡", en: "Smart Weather Alerts", hi: "48 घंटे पहले Alert" },
    { emoji: "💹", en: "Mandi Price Intelligence", hi: "Best मंडी खुद suggest करे" },
    { emoji: "📜", en: "Govt Scheme Finder", hi: "Govt योजना खोजो" },
    { emoji: "🚜", en: "Machine Booking", hi: "Harvester बुको — Ola जैसा" },
    { emoji: "🚚", en: "Transport Booking", hi: "फसल मंडी तक पहुंचाओ" },
    { emoji: "📅", en: "Seasonal Pre-booking", hi: "Wheat Season pre-book करो" },
    { emoji: "📊", en: "Crop Supply Prediction", hi: "Oversupply warning पहले मिले" },
    { emoji: "🔮", en: "Future Farm Simulator", hi: "2030 में खेत का भविष्य देखो" },
    { emoji: "🌱", en: "Soil Health Tracker", hi: "Long-term मिट्टी monitor करो" },
    { emoji: "🎤", en: "Voice AI", hi: "बोलो — AI सुनेगा" },
    { emoji: "👥", en: "Kisan Community Forum", hi: "किसान से किसान की बात" },
    { emoji: "🧪", en: "Fake Fertilizer Detector", hi: "असली/नकली खाद पहचानो" },
    { emoji: "🤝", en: "Direct Buyer Connect", hi: "Zero बिचौलिया Market" },
    { emoji: "💳", en: "Kisan Credit Score", hi: "AI Credit Score बनाओ" },
    { emoji: "📰", en: "Kisan News & Updates", hi: "Govt schemes, daily news" },
    { emoji: "💡", en: "Personalized Crop Advisor", hi: "Personalized फसल सलाह" },
    { emoji: "🚨", en: "Pest Outbreak Prediction", hi: "कीट attack early warning" },
    { emoji: "💧", en: "Smart Irrigation Planner", hi: "पानी बचाओ — AI से" },
    { emoji: "🌍", en: "Climate Farming Planner", hi: "Climate change adapt करो" },
    { emoji: "⚙️", en: "Farm Equipment Sharing", hi: "Machinery किराये पर लो" },
    { emoji: "📈", en: "AI Soil Timeline", hi: "Soil history track करो" },
    { emoji: "💰", en: "Zero Middleman Market", hi: "Directly बेचो, ज्यादा कमाओ" }
  ],
  techStack: [
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-Learn"] },
    { category: "GenAI/NLP", items: ["Gemini API", "LangChain", "HuggingFace"] },
    { category: "Satellite", items: ["NASA MODIS", "Sentinel Hub"] },
    { category: "Weather", items: ["OpenWeatherMap", "NOAA Data"] },
    { category: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL"] },
    { category: "Mobile", items: ["React Native", "Flutter"] },
    { category: "Database", items: ["MongoDB", "Redis"] },
    { category: "Maps", items: ["Google Maps API", "Mapbox"] }
  ],
  workflow: [
    { step: 1, en: "Real-time Data Collection", hi: "रियल-टाइम डेटा संग्रह" },
    { step: 2, en: "AI Processing & Analysis", hi: "कृत्रिम बुद्धिमत्ता विश्लेषण" },
    { step: 3, en: "Personalized Insights", hi: "व्यक्तिगत अंतर्दृष्टि" },
    { step: 4, en: "Farmer Notification", hi: "किसान सूचना" },
    { step: 5, en: "Market Connection", hi: "बाजार संबंध" },
    { step: 6, en: "Feedback Loop", hi: "प्रतिक्रिया लूप" }
  ],
  impact: {
    stats: [
      { icon: "👨‍🌾", label: "Farmers Impacted", value: "140M+" },
      { icon: "🌾", label: "Crop Yield Increase", value: "+35%" },
      { icon: "💰", label: "Income Increase", value: "₹2-3 Lakh/year" },
      { icon: "🌍", label: "Area Covered", value: "All States" }
    ],
    cards: [
      {
        id: 1,
        title: "Social Impact",
        en: "Empowering rural communities with technology and knowledge sharing",
        hi: "ग्रामीण समुदायों को प्रौद्योगिकी से सशक्त करना",
        color: "bg-green-100"
      },
      {
        id: 2,
        title: "Economic Impact",
        en: "Doubling farmer income and reducing operational costs",
        hi: "किसान आय दोगुनी करना और लागत कम करना",
        color: "bg-yellow-100"
      },
      {
        id: 3,
        title: "Environmental Impact",
        en: "Promoting sustainable farming practices and resource management",
        hi: "टिकाऊ खेती और संसाधन प्रबंधन को बढ़ावा देना",
        color: "bg-blue-100"
      },
      {
        id: 4,
        title: "Target Audience",
        en: "Marginal & small farmers, agricultural entrepreneurs, AgriTech enthusiasts",
        hi: "सीमांत और छोटे किसान, कृषि उद्यमी",
        color: "bg-purple-100"
      }
    ]
  },
  prototype: {
    screens: [
      { id: 1, title: "Dashboard", color: "#1a5c1a" },
      { id: 2, title: "Weather", color: "#6b8e6b" },
      { id: 3, title: "Alerts", color: "#e8b84b" },
      { id: 4, title: "Market", color: "#8b6f47" }
    ],
    flowStages: [
      { stage: 1, label: "Sign Up" },
      { stage: 2, label: "Input Data" },
      { stage: 3, label: "Analyze" },
      { stage: 4, label: "Recommend" },
      { stage: 5, label: "Monitor" }
    ]
  },
  research: [
    {
      id: 1,
      title: "Agricultural Statistics",
      en: "NSSO 2023 - National agricultural census data",
      hi: "राष्ट्रीय कृषि जनगणना डेटा",
      source: "NSSO 2023"
    },
    {
      id: 2,
      title: "Crop Science Research",
      en: "ICAR - Indian Council of Agricultural Research findings",
      hi: "भारतीय कृषि अनुसंधान परिषद निष्कर्ष",
      source: "ICAR"
    },
    {
      id: 3,
      title: "Rural Development",
      en: "NABARD 2024 - Financial inclusion in rural areas",
      hi: "ग्रामीण क्षेत्रों में वित्तीय समावेशन",
      source: "NABARD 2024"
    },
    {
      id: 4,
      title: "Food Security",
      en: "FAO - Global food security assessment",
      hi: "वैश्विक खाद्य सुरक्षा आकलन",
      source: "FAO"
    },
    {
      id: 5,
      title: "AI & Fairness",
      en: "Google PAIR - Responsible AI for agriculture",
      hi: "कृषि के लिए जिम्मेदार कृत्रिम बुद्धिमत्ता",
      source: "Google PAIR"
    },
    {
      id: 6,
      title: "Sustainable Development",
      en: "World Bank - Climate action and rural prosperity",
      hi: "जलवायु कार्रवाई और ग्रामीण समृद्धि",
      source: "World Bank"
    }
  ]
};
