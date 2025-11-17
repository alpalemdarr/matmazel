'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Placeholder gallery images - in production, these would be fetched from Instagram API or stored locally
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `Gallery image ${i + 1}`,
}))

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
              Gallery
            </h1>
            <div className="w-32 h-px bg-champagne mx-auto mb-8" />
            <p className="text-xl md:text-2xl font-body text-black/70 leading-relaxed">
              Our latest work and transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.id)}
                className="aspect-square bg-light-grey/20 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 to-black/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-4xl text-white">+</span>
                </div>
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-light-grey/20 to-black/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
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
              Follow Us on Instagram
            </h2>
            <div className="w-24 h-px bg-champagne mx-auto mb-8" />
            <p className="text-lg font-body text-light-grey mb-8 leading-relaxed">
              See more of our work and stay updated with the latest trends and styles.
            </p>
            <motion.a
              href="https://www.instagram.com/ekipmatmazelizmit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border border-champagne text-champagne font-body tracking-wide hover:bg-champagne hover:text-black transition-all duration-300"
            >
              Visit Our Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full aspect-square bg-light-grey/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              ×
            </button>
            <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-light-grey/20 to-black/10" />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

