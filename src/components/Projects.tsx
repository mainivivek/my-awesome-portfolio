import { motion } from "framer-motion";
import { CreditCard, ShoppingCart, Wrench, Users, Calendar } from "lucide-react";

const projects = [
  {
    icon: CreditCard,
    title: "ARES Mobile App",
    role: "Mobile Application Developer",
    description: "Contributed to critical modules focused on financial transactions and card security.",
    highlights: [
      "Card Management & Controls for Debit and Virtual Cards",
      "Transaction PIN setup and management",
      "QR payment and phone-number-based money transfer",
      "Secure API integration and data handling",
    ],
    tech: ["React Native", "REST APIs", "Security"],
  },
  {
    icon: ShoppingCart,
    title: "OCC E-commerce (Oracle)",
    role: "Web Developer",
    description: "Worked on Oracle Commerce Cloud and Oracle Storefront Framework using React.",
    highlights: [
      "Product Listing Page (PLP) development",
      "Product Detail Page (PDP) implementation",
      "Add to Cart functionality",
      "Bug fixes and feature enhancements",
    ],
    tech: ["React", "Oracle Commerce Cloud", "APIs"],
  },
  {
    icon: Wrench,
    title: "Commerce Tools Platform",
    role: "React Developer",
    description: "Designed and implemented scalable UI architecture for e-commerce platform.",
    highlights: [
      "Multiple shipping options integration",
      "Pricing and promotions features",
      "Enhanced UI/UX with Slick-carousel",
      "Code reviews and documentation",
    ],
    tech: ["React", "Redux", "Formik", "Axios"],
  },
  {
    icon: Users,
    title: "HRMS Dashboard",
    role: "Web Developer",
    description: "Built comprehensive HR management system with modern UI components.",
    highlights: [
      "Dashboard module development",
      "Employee Directory features",
      "Projects management interface",
      "Backend API integration",
    ],
    tech: ["React", "Material-UI", "REST APIs"],
  },
  {
    icon: Calendar,
    title: "Interview Portal",
    role: "React Developer",
    description: "Implemented complete interview management system with Azure authentication.",
    highlights: [
      "Microsoft Login with Azure Authentication",
      "Admin dashboards for employee management",
      "Candidate interview scoring system",
      "Secure authentication integration",
    ],
    tech: ["React", "Azure AD", "Authentication"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:glow-subtle transition-all duration-300">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-primary font-mono">{project.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-muted text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
