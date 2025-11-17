"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-[#1a1a1a] text-white pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,194,168,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-wider mb-6">
              MATMAZEL
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-body tracking-widest text-champagne mb-8 uppercase">
              Premium Hair & Make Up Studio
            </p>
            <motion.a
              href="https://www.instagram.com/ekipmatmazelizmit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border border-champagne text-champagne font-body tracking-wide hover:bg-champagne hover:text-black transition-all duration-300"
            >
              Book Appointment via Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-wider mb-6">
              About the Studio
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto mb-8" />
            <p className="text-lg font-body text-black/70 leading-relaxed mb-8">
              MATMAZEL is a premier hair and makeup studio dedicated to
              providing luxury beauty services for women in İzmit. Our expert
              team combines artistry with precision to create stunning looks
              that enhance your natural beauty.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm font-body tracking-wide text-black border-b border-black hover:text-champagne hover:border-champagne transition-colors duration-300"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
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
              Our Services
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Hair Styling",
                description:
                  "Expert cuts and styling tailored to your unique style",
              },
              {
                title: "Coloring",
                description:
                  "Professional color services with premium products",
              },
              {
                title: "Bridal Hair",
                description:
                  "Specialized bridal hair designs for your special day",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 border border-champagne mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-champagne/10" />
                </div>
                <h3 className="text-xl font-heading font-medium tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-light-grey font-body leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-block text-sm font-body tracking-wide text-champagne border-b border-champagne hover:text-white hover:border-white transition-colors duration-300"
            >
              View All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-wider mb-6">
              Gallery
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="aspect-square bg-light-grey/20 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 to-black/10 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-champagne/30">+</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/gallery"
              className="inline-block text-sm font-body tracking-wide text-black border-b border-black hover:text-champagne hover:border-champagne transition-colors duration-300"
            >
              View Full Gallery →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              Testimonials
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl font-body italic text-light-grey mb-6 leading-relaxed">
                &ldquo;MATMAZEL transformed my look for my wedding day. The team
                is incredibly talented and professional. I felt like a
                princess!&rdquo;
              </p>
              <p className="text-sm font-body tracking-wide text-champagne uppercase">
                — Sarah K.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-wider mb-6">
              Visit Our Studio
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto mb-8" />
            <p className="text-lg font-body text-black/70 leading-relaxed mb-8">
              Located in the heart of İzmit, our studio offers a luxurious and
              comfortable environment for all your beauty needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border border-black text-black font-body tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
