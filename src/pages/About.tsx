import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Globe, BarChart3, Code, Bot, Users, Rocket, CheckCircle2, TrendingUp, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import growthrixLogo from "@/assets/growthrix-logo.jpeg";
import shubham1 from "@/assets/shubham-1.png";
import shubham2 from "@/assets/shubham-2.png";

const industries = [
  "Real Estate", "SaaS Business", "Fintech", "Ecommerce", "EdTech", "Travel"
];

const skills = [
  { icon: <Target size={20} />, label: "Performance Marketing (Meta + Google Ads)" },
  { icon: <TrendingUp size={20} />, label: "Lead Generation Funnel Strategy" },
  { icon: <Code size={20} />, label: "WordPress & Conversion Website Development" },
  { icon: <BarChart3 size={20} />, label: "SEO & AI SEO Strategy" },
  { icon: <Bot size={20} />, label: "Marketing Automation & AI Agent Integration" },
  { icon: <Globe size={20} />, label: "Global Client Acquisition Systems" },
];

const achievements = [
  "Worked with clients across Ecommerce, Real Estate, EdTech, Travel, and Fintech",
  "Built high-converting marketing funnels and lead generation systems",
  "Helped brands scale using performance marketing + SEO + automation",
  "Built a service structure designed for global clients",
  "Developed AI-driven marketing workflow concepts for future SaaS vision",
  "Built and trained an internal execution team and interns",
];

const timeline = [
  {
    phase: "The Beginning",
    title: "Freelancing & Self-Learning",
    desc: "Started learning digital marketing practically by working with small businesses, startups, and local brands. Built expertise from the ground up with limited resources but a clear vision.",
    icon: <Lightbulb size={20} />,
  },
  {
    phase: "The Realization",
    title: "Agencies Should Be Growth Partners",
    desc: "Observed how businesses struggle not because of bad products — but because of weak marketing systems and poor lead pipelines. This mindset shift defined everything.",
    icon: <Zap size={20} />,
  },
  {
    phase: "The Build",
    title: "Growthrix Club is Born",
    desc: "Founded Growthrix with a mission to help businesses grow using real performance marketing and intelligent automation. Started as a performance marketing and website-focused agency.",
    icon: <Rocket size={20} />,
  },
  {
    phase: "The Evolution",
    title: "From Agency to Growth Tech",
    desc: "Now evolving into a growth technology company with a long-term vision to build AI-driven marketing tools and SaaS products for global businesses across India, US, UK, UAE, AU, CA, SG.",
    icon: <Globe size={20} />,
  },
];

const currentFocus = [
  "Performance Marketing for global clients",
  "AI SEO & Automated Content Systems",
  "Lead Generation Infrastructure",
  "Conversion-Focused Website Development",
  "AI Sales & Presales Automation",
  "Building foundation for future marketing SaaS products",
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 section-dark overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
            <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6"
                >
                  <Users size={14} />
                  About Growthrix Club
                </motion.span>
                <h1 className="font-display text-4xl lg:text-6xl font-bold text-hero-foreground mb-6">
                  Building the Future of{" "}
                  <span className="text-gradient">Growth Marketing</span>
                </h1>
                <p className="text-hero-muted text-lg leading-relaxed">
                  From a solo freelancer to a global performance marketing agency — the story of turning a vision into a growth engine for businesses worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="relative hidden lg:block"
              >
                <div className="relative w-80 h-96 mx-auto">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                  <img src={shubham2} alt="Shubham More - Founder" className="relative w-full h-full object-cover rounded-3xl border-2 border-primary/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 section-light overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              {/* Founder card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="sticky top-28 rounded-3xl border border-border bg-card p-8 card-shadow">
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 border-2 border-primary/20">
                    <img src={shubham1} alt="Shubham More" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-1">Shubham More</h3>
                  <p className="text-primary font-semibold text-sm mb-4">Founder & CEO, Growthrix Club</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Performance marketing expert, automation strategist, and entrepreneur focused on building scalable digital growth systems for global businesses.
                  </p>
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Industries We Serve</p>
                    <div className="flex flex-wrap gap-2">
                      {industries.map((ind) => (
                        <span key={ind} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">{ind}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.label} className="flex items-center gap-3 text-sm">
                        <div className="text-primary">{skill.icon}</div>
                        <span className="text-muted-foreground">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <a
                      href="https://www.linkedin.com/company/growthrix-club/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                    >
                      Connect on LinkedIn <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Story */}
              <div className="lg:col-span-3 space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                    The <span className="text-gradient">Founder's</span> Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Shubham More is the Founder of Growthrix, a performance-driven digital marketing and AI automation agency focused on helping businesses scale globally through data, strategy, and advanced marketing systems.
                    </p>
                    <p>
                      Coming from a strong self-built background, Shubham started his journey in digital marketing with limited resources but a clear vision — to build a global agency that delivers real business growth, not just marketing services.
                    </p>
                    <p>
                      Instead of following a traditional job-based career path, he chose entrepreneurship early and focused on building scalable digital assets, client acquisition systems, and global service frameworks.
                    </p>
                    <p>
                      His core strength lies in combining <strong className="text-foreground">business strategy + marketing execution + automation scalability</strong>.
                    </p>
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-display text-2xl font-bold mb-6">Achievements So Far</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {achievements.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                      >
                        <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-24 section-dark overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-hero-foreground mb-4">
                The <span className="text-gradient">Growthrix</span> Journey
              </h2>
              <p className="text-hero-muted max-w-xl mx-auto">
                From a vision to a global growth agency — every milestone shaped who we are today.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  {/* Vertical line */}
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[22px] top-12 bottom-0 w-px bg-primary/20" />
                  )}
                  {/* Icon */}
                  <div className="absolute left-0 top-0 w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{item.phase}</span>
                  <h3 className="font-display text-xl font-bold text-hero-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-hero-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Focus & Vision */}
        <section className="py-24 section-light overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold mb-6">
                  Current <span className="text-gradient">Focus</span>
                </h2>
                <div className="space-y-3">
                  {currentFocus.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="font-display text-3xl font-bold mb-6">
                  Our <span className="text-gradient">Vision</span>
                </h2>
                <div className="rounded-3xl border border-border bg-card p-8 card-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Rocket size={24} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To transform Growthrix from a digital marketing agency into a <strong className="text-foreground">global growth technology company</strong> and build scalable AI-driven tools that help businesses grow faster, smarter, and more predictably.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where every business, regardless of size, has access to enterprise-grade marketing infrastructure powered by AI — and Growthrix is at the center of building that future.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Let's Grow Together
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
