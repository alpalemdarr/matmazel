'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Logo from './Logo'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check initial scroll position
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    checkScroll()
    
    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(8px)' : 'blur(0px)',
          boxShadow: isScrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : '0 0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <nav className="relative container mx-auto px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <Logo variant={isScrolled ? 'light' : 'dark'} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-body tracking-wide transition-colors duration-300 ease-in-out ${
                  isScrolled ? 'text-black hover:text-champagne' : 'text-white hover:text-champagne'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/ekipmatmazelizmit"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-body tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-black hover:text-champagne' : 'text-white hover:text-champagne'
              }`}
            >
              Instagram
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 relative z-10"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className={`block w-6 h-px ${isScrolled ? 'bg-black' : 'bg-white'}`}
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.span 
              className={`block w-6 h-px ${isScrolled ? 'bg-black' : 'bg-white'}`}
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.span 
              className={`block w-6 h-px ${isScrolled ? 'bg-black' : 'bg-white'}`}
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1],
                height: { duration: 0.3 }
              }}
              className="md:hidden mt-4 pb-4 space-y-4 overflow-hidden"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm font-body tracking-wide transition-colors duration-300 ease-in-out ${
                      isScrolled ? 'text-black hover:text-champagne' : 'text-white hover:text-champagne'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <a
                  href="https://www.instagram.com/ekipmatmazelizmit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-sm font-body tracking-wide transition-colors duration-300 ease-in-out ${
                    isScrolled ? 'text-black hover:text-champagne' : 'text-white hover:text-champagne'
                  }`}
                >
                  Instagram
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

