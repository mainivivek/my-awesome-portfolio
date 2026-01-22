import { motion } from "framer-motion";
import { Code2, Layers, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code following best practices",
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Building reusable components for scalable applications",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing UI/UX for fast, responsive experiences",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in Agile teams with strong communication",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Dedicated to crafting{" "}
            <span className="text-gradient">exceptional</span> web experiences
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dedicated React developer with 3.6 years of experience crafting dynamic, 
            responsive, and scalable web applications using HTML, CSS, JavaScript, React, 
            and Redux Toolkit. Specialized in building modular reusable components, 
            seamless REST API integration, UI performance optimization, and delivering 
            accessible, cross-device interfaces.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-subtle transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
