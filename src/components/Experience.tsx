import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl bg-gradient-card border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 glow-subtle">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Software Engineer</h3>
                <p className="text-primary font-mono">DigitalSprint.AI Solutions</p>
                <p className="text-sm text-muted-foreground mt-1">3.6 years of experience</p>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Developed and maintained modular, reusable React components to build scalable web applications",
                "Collaborated closely with product and backend teams to integrate REST APIs and optimize frontend performance",
                "Implemented efficient state management using Redux Toolkit to enhance application stability",
                "Ensured full responsiveness and accessibility (WCAG standards) across devices and browsers",
                "Applied modern React best practices in Agile/sprint-based development with focus on clean code delivery",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-xl bg-gradient-card border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 glow-subtle">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
                <p className="text-primary font-mono">Lingaraj Appa Engineering College, Bidar</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA: 8.26</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-xl bg-gradient-card border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 glow-subtle">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Certifications</h3>
                <p className="text-sm text-muted-foreground mt-1">Professional development & learning</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "React Native: Mobile App Development (CLI) – Udemy",
                "Coding Interview Preparation – Meta",
                "HTML and CSS in Depth – Meta",
                "React Basics – Meta",
                "Introduction to Front-End Development – Meta",
                "Programming with JavaScript – Meta",
                "Version Control – Meta",
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
