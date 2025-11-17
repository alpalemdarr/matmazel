'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  logoPath?: string
}

export default function Logo({ variant = 'light', className = '', logoPath }: LogoProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    if (logoPath) return logoPath
    // Try different logo file names
    if (variant === 'dark') {
      return '/logo-white.png'
    }
    return '/logo.png'
  })

  // Update image source when logoPath or variant changes
  useEffect(() => {
    if (logoPath) {
      setImgSrc(logoPath)
    } else {
      if (variant === 'dark') {
        setImgSrc('/logo-white.png')
      } else {
        setImgSrc('/logo.png')
      }
    }
  }, [logoPath, variant])

  const handleError = () => {
    // Fallback to alternative logo paths
    if (imgSrc.includes('logo-white.png')) {
      setImgSrc('/logo-dark.png')
    } else if (imgSrc.includes('logo-dark.png')) {
      setImgSrc('/logo.png')
    } else if (imgSrc.includes('logo.png')) {
      setImgSrc('/matmazel-logo.png')
    } else if (imgSrc.includes('matmazel-logo.png')) {
      setImgSrc('/logo-light.png')
    }
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center"
      >
        <div className="relative w-[100px] h-[43px] sm:w-[110px] sm:h-[47px] md:w-[130px] md:h-[56px] lg:w-[150px] lg:h-[64px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgSrc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={imgSrc}
                alt="MATMAZEL - Official Hair & Make Up Studio"
                fill
                className="object-contain object-left"
                priority
                onError={handleError}
                sizes="(max-width: 640px) 100px, (max-width: 768px) 110px, (max-width: 1024px) 130px, 150px"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </Link>
  )
}
