'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-semibold tracking-wider mb-4">
              MATMAZEL
            </h3>
            <p className="text-sm text-light-grey font-body leading-relaxed">
              Premium Hair & Make Up Studio
              <br />
              İzmit, Turkey
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-heading font-semibold tracking-wide mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-light-grey hover:text-champagne transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-light-grey hover:text-champagne transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-light-grey hover:text-champagne transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-light-grey hover:text-champagne transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-light-grey hover:text-champagne transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-heading font-semibold tracking-wide mb-4 uppercase">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/ekipmatmazelizmit"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-light-grey hover:text-champagne transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-light-grey hover:text-champagne transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-light-grey/20 mt-8 md:mt-12 pt-8">
          <p className="text-xs text-light-grey text-center font-body">
            © {new Date().getFullYear()} MATMAZEL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

