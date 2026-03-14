export const siteConfig = {
  name: "Premium Desk Worker",
  tagline: "Elite Remote Work Solutions",
  description: "Premium virtual assistant services for high-performing entrepreneurs. Get back 20+ hours per week with our elite desk worker solutions.",
  url: "https://premiumdeskworker.com",
  
  // Navigation
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" }
    ],
    cta: { label: "Book Discovery Call", href: "#contact" }
  },
  
  // Hero section
  hero: {
    badge: "Now Booking Q2 2025",
    title: "Reclaim Your Time, Scale Your Business",
    subtitle: "Premium virtual assistants tailored for entrepreneurs who value their time at $500+/hour. Get back 20+ hours weekly.",
    cta: {
      primary: { label: "Book Discovery Call", href: "#contact" },
      secondary: { label: "View Case Studies", href: "#testimonials" }
    }
  },
  
  // Services
  services: [
    {
      title: "Executive Assistance",
      description: "Calendar management, email handling, travel coordination, and executive-level support.",
      icon: "🎯",
      features: ["Calendar optimization", "Email triage", "Travel coordination", "Meeting preparation"]
    },
    {
      title: "Content Production",
      description: "Full content pipeline management from research to publishing across all platforms.",
      icon: "📝",
      features: ["Content research", "Draft creation", "Platform publishing", "Analytics tracking"]
    },
    {
      title: "Business Operations",
      description: "Streamline your business processes with dedicated operations management.",
      icon: "⚙️",
      features: ["Process documentation", "CRM management", "Team coordination", "Reporting systems"]
    }
  ],
  
  // Pricing tiers
  pricing: [
    {
      name: "Essential",
      price: "$2,499",
      period: "/month",
      description: "Perfect for solopreneurs needing 20 hours/week",
      features: [
        "20 hours/month",
        "Executive assistance",
        "Email management",
        "Basic content support",
        "Weekly check-ins"
      ],
      cta: { label: "Get Started", href: "#contact" }
    },
    {
      name: "Premium",
      price: "$4,999",
      period: "/month",
      description: "Ideal for scaling businesses needing 40 hours/week",
      popular: true,
      features: [
        "40 hours/month",
        "Full executive support",
        "Content production pipeline",
        "Operations management",
        "Daily standups",
        "Priority support"
      ],
      cta: { label: "Book Call", href: "#contact" }
    },
    {
      name: "Enterprise",
      price: "$8,999",
      period: "/month",
      description: "For established businesses requiring 80+ hours/week",
      features: [
        "80+ hours/month",
        "Dedicated team lead",
        "Full business operations",
        "Content strategy",
        "24/7 priority support",
        "Custom integrations"
      ],
      cta: { label: "Contact Sales", href: "#contact" }
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      quote: "My Premium Desk Worker gives me back 25 hours every week. That's an extra $12,500 in revenue monthly.",
      author: "Sarah Chen",
      company: "Tech Startup Founder",
      avatar: "👩‍💼"
    },
    {
      quote: "The quality of work is exceptional. They handle everything from email to content creation seamlessly.",
      author: "Marcus Rodriguez",
      company: "E-commerce Entrepreneur",
      avatar: "👨‍💻"
    },
    {
      quote: "Best investment I've made in my business. The ROI is astronomical.",
      author: "Alex Thompson",
      company: "Consulting Firm Owner",
      avatar: "👨‍💼"
    }
  ],
  
  // FAQ
  faq: [
    {
      question: "How quickly can I get started?",
      answer: "Most clients are onboarded within 48 hours after our discovery call."
    },
    {
      question: "What's your screening process?",
      answer: "We only hire the top 1% of virtual assistants with proven track records and specialized training."
    },
    {
      question: "Can I scale up or down?",
      answer: "Absolutely. We offer flexible plans that can be adjusted monthly based on your needs."
    },
    {
      question: "What tools do you use?",
      answer: "We're experts in Slack, Notion, Asana, Google Workspace, and all major productivity platforms."
    }
  ]
};

export type SiteConfig = typeof siteConfig;