import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Clock, Globe, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    title: "Email Us",
    details: [
      { text: "hello@growthrix.club", href: "mailto:hello@growthrix.club" },
      { text: "contact@growthrix.club", href: "mailto:contact@growthrix.club" },
      { text: "marketing@growthrix.club", href: "mailto:marketing@growthrix.club" },
    ],
  },
  {
    icon: <Phone size={20} />,
    title: "Call Us",
    details: [
      { text: "+91 9370587430", href: "tel:+919370587430" },
      { text: "+91 9359893847", href: "tel:+919359893847" },
    ],
  },
  {
    icon: <Globe size={20} />,
    title: "Follow Us",
    details: [
      { text: "LinkedIn", href: "https://www.linkedin.com/company/growthrix-club/" },
      { text: "Instagram", href: "https://www.instagram.com/growthrix.club" },
      { text: "X (Twitter)", href: "https://x.com/Growthrix" },
    ],
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 section-dark overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6"
            >
              <MessageSquare size={14} />
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl lg:text-6xl font-bold text-hero-foreground mb-5"
            >
              Let's Build Your{" "}
              <span className="text-gradient">Growth Engine</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-hero-muted text-lg max-w-2xl mx-auto"
            >
              Book a free strategy call, ask questions, or get a custom growth plan for your business.
            </motion.p>
          </div>
        </section>

        {/* Cal.com + Contact Info */}
        <section className="py-20 section-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cal.com Embed */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="rounded-3xl border border-border bg-card overflow-hidden card-shadow">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg">Book a Strategy Call</h3>
                        <p className="text-muted-foreground text-sm">Free 30-minute consultation with Shubham More</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full" style={{ minHeight: "650px" }}>
                    <iframe
                      src="https://cal.com/shubhammore?embed=true&theme=light"
                      width="100%"
                      height="650"
                      frameBorder="0"
                      title="Book a meeting with Shubham More"
                      className="w-full"
                      allow="payment"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Contact Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {contactInfo.map((info) => (
                  <div key={info.title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <h4 className="font-display font-bold">{info.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail) => (
                        <a
                          key={detail.text}
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quick CTA */}
                <div className="rounded-2xl section-dark p-6">
                  <h4 className="font-display font-bold text-hero-foreground mb-2">Prefer a quick chat?</h4>
                  <p className="text-hero-muted text-sm mb-4">
                    WhatsApp us directly for instant responses.
                  </p>
                  <a
                    href="https://wa.me/919370587430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-success text-success-foreground font-semibold text-sm hover:shadow-lg transition-all"
                  >
                    Chat on WhatsApp
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

export default Contact;
