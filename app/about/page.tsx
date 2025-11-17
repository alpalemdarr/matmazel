"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-light-grey/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light tracking-wider mb-6">
              About MATMAZEL
            </h1>
            <div className="w-32 h-px bg-champagne mx-auto mb-8" />
            <p className="text-xl md:text-2xl font-body text-black/70 leading-relaxed">
              Where artistry meets elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-light tracking-wider mb-8">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg font-body text-black/70 leading-relaxed">
                <p>
                  At MATMAZEL, we believe that every woman deserves to feel
                  beautiful, confident, and empowered. Our mission is to provide
                  exceptional hair and makeup services that enhance your natural
                  beauty while creating a luxurious, personalized experience.
                </p>
                <p>
                  We are committed to using only the finest products and
                  techniques, staying current with the latest trends in beauty
                  and fashion, and ensuring that each client leaves our studio
                  feeling their absolute best.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-light tracking-wider mb-8">
                Professional Background
              </h2>
              <div className="space-y-6 text-lg font-body text-black/70 leading-relaxed">
                <p>
                  Our team consists of highly trained and experienced
                  professionals who have dedicated their careers to the art of
                  beauty. With years of experience in the industry, our stylists
                  and makeup artists bring a wealth of knowledge and creativity
                  to every session.
                </p>
                <p>
                  We continuously invest in education and training to stay at
                  the forefront of beauty trends and techniques, ensuring that
                  our clients receive the highest quality service possible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-light tracking-wider mb-8">
                Our Vision
              </h2>
              <div className="space-y-6 text-lg font-body text-black/70 leading-relaxed">
                <p>
                  MATMAZEL envisions becoming the premier destination for luxury
                  beauty services in İzmit and beyond. We strive to create a
                  space where artistry, elegance, and innovation come together
                  to deliver an unparalleled beauty experience.
                </p>
                <p>
                  Our vision extends beyond just providing services—we aim to
                  build lasting relationships with our clients, becoming their
                  trusted beauty partners for all of life&apos;s special
                  moments, from everyday elegance to once-in-a-lifetime
                  celebrations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-wider mb-6">
              Our Values
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Excellence",
                description:
                  "We are committed to delivering the highest standards in every service we provide.",
              },
              {
                title: "Luxury",
                description:
                  "We create an atmosphere of sophistication and elegance for our clients.",
              },
              {
                title: "Innovation",
                description:
                  "We stay ahead of trends and continuously evolve our techniques and offerings.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-heading font-medium tracking-wide mb-4 text-champagne">
                  {value.title}
                </h3>
                <p className="text-sm text-light-grey font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
