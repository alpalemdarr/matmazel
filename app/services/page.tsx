'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Hair Styling',
    description: 'Expert cuts and styling tailored to your unique style and face shape. Our stylists work with you to create the perfect look that enhances your natural features.',
    icon: '✂️',
  },
  {
    title: 'Coloring',
    description: 'Professional color services using premium products. From subtle highlights to bold transformations, we create stunning color results that complement your skin tone.',
    icon: '🎨',
  },
  {
    title: 'Cuts',
    description: 'Precision cuts that frame your face beautifully. Whether you prefer classic elegance or modern edge, our expert cuts are designed to suit your lifestyle.',
    icon: '💇',
  },
  {
    title: 'Bridal Hair',
    description: 'Specialized bridal hair designs for your special day. We work closely with you to create the perfect bridal look that matches your dress and personal style.',
    icon: '👰',
  },
  {
    title: 'Professional Makeup',
    description: 'Expert makeup application for any occasion. From natural everyday looks to glamorous evening makeup, we enhance your beauty with professional techniques.',
    icon: '💄',
  },
]

export default function Services() {
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
              Our Services
            </h1>
            <div className="w-32 h-px bg-champagne mx-auto mb-8" />
            <p className="text-xl md:text-2xl font-body text-black/70 leading-relaxed">
              Premium beauty services tailored to you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-light-grey/30 p-8 hover:border-champagne transition-colors duration-300"
                >
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-medium tracking-wide mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm font-body text-black/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
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
              Ready to Transform Your Look?
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto mb-8" />
            <p className="text-lg font-body text-light-grey mb-8 leading-relaxed">
              Book your appointment today and experience the MATMAZEL difference.
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
    </div>
  )
}

