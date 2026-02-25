import mongoose from "mongoose";
import dotenv from "dotenv"
import CategorySchema from "./model/CategorySchema.js";

dotenv.config()

await mongoose.connect(process.env.MONGO_URI);

const categories = [
  // Tech
  { name: "IT & Software", slug: "it-software" },
  { name: "Engineering", slug: "engineering" },
  { name: "Data Science & AI", slug: "data-science-ai" },
  { name: "Cyber Security", slug: "cyber-security" },
  { name: "DevOps & Cloud", slug: "devops-cloud" },
  { name: "Product Management", slug: "product-management" },

  // Design & Creative
  { name: "Design & Creative", slug: "design-creative" },
  { name: "UI / UX Design", slug: "ui-ux-design" },
  { name: "Content Writing", slug: "content-writing" },
  { name: "Video & Animation", slug: "video-animation" },

  // Business & Sales
  { name: "Marketing & Sales", slug: "marketing-sales" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Business Development", slug: "business-development" },
  { name: "E-commerce", slug: "ecommerce" },

  // Finance & Legal
  { name: "Finance & Accounting", slug: "finance-accounting" },
  { name: "Banking & Insurance", slug: "banking-insurance" },
  { name: "Audit & Taxation", slug: "audit-taxation" },
  { name: "Legal & Compliance", slug: "legal-compliance" },

  // HR & Operations
  { name: "Human Resources", slug: "human-resources" },
  { name: "Administration", slug: "administration" },
  { name: "Operations", slug: "operations" },
  { name: "Supply Chain & Logistics", slug: "supply-chain-logistics" },

  // Healthcare & Education
  { name: "Healthcare & Medical", slug: "healthcare-medical" },
  { name: "Pharmaceutical", slug: "pharmaceutical" },
  { name: "Education & Training", slug: "education-training" },
  { name: "Research & Development", slug: "research-development" },

  // Industry & Skilled
  { name: "Manufacturing", slug: "manufacturing" },
  { name: "Construction & Real Estate", slug: "construction-real-estate" },
  { name: "Automobile", slug: "automobile" },
  { name: "Electrical & Electronics", slug: "electrical-electronics" },

  // Support & Services
  { name: "Customer Support", slug: "customer-support" },
  { name: "BPO / KPO", slug: "bpo-kpo" },
  { name: "Hospitality & Travel", slug: "hospitality-travel" },
  { name: "Retail & Store Operations", slug: "retail-store-operations" },

  // Media & Public
  { name: "Media & Journalism", slug: "media-journalism" },
  { name: "Public Relations", slug: "public-relations" },
  { name: "Government & Public Sector", slug: "government-public-sector" },
 
];


await CategorySchema.insertMany(categories);

console.log("Categories seeded");
process.exit();
