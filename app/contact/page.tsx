'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Since this is a static site, we'll use mailto
    const mailtoLink = `mailto:info@matmazel.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              Contact Us
            </h1>
            <div className="w-32 h-px bg-champagne mx-auto mb-8" />
            <p className="text-xl md:text-2xl font-body text-black/70 leading-relaxed">
              Get in touch with MATMAZEL
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-light tracking-wider mb-8">
                  Visit Our Studio
                </h2>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-sm font-heading font-semibold tracking-wide uppercase mb-2 text-champagne">
                      Address
                    </h3>
                    <p className="text-lg font-body text-black/70">
                      İzmit, Kocaeli
                      <br />
                      Turkey
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-semibold tracking-wide uppercase mb-2 text-champagne">
                      Connect
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="https://www.instagram.com/ekipmatmazelizmit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg font-body text-black/70 hover:text-champagne transition-colors duration-300"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://wa.me/905XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg font-body text-black/70 hover:text-champagne transition-colors duration-300"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="tel:+905XXXXXXXXX"
                        className="block text-lg font-body text-black/70 hover:text-champagne transition-colors duration-300"
                      >
                        Phone
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="aspect-video bg-light-grey/20 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.5!2d29.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiAyOcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-light tracking-wider mb-8">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body tracking-wide mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-grey/30 bg-white focus:outline-none focus:border-champagne transition-colors duration-300 font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body tracking-wide mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-grey/30 bg-white focus:outline-none focus:border-champagne transition-colors duration-300 font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-body tracking-wide mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-light-grey/30 bg-white focus:outline-none focus:border-champagne transition-colors duration-300 font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-body tracking-wide mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-light-grey/30 bg-white focus:outline-none focus:border-champagne transition-colors duration-300 font-body resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 border border-black text-black font-body tracking-wide hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-wider mb-6">
              Book Your Appointment
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto mb-8" />
            <p className="text-lg font-body text-light-grey mb-8 leading-relaxed">
              Ready to experience the MATMAZEL difference? Book your appointment today.
            </p>
            <motion.a
              href="https://www.instagram.com/ekipmatmazelizmit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border border-champagne text-champagne font-body tracking-wide hover:bg-champagne hover:text-black transition-all duration-300"
            >
              Book via Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

