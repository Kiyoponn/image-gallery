'use client'

import { NextStudio } from 'next-sanity/studio'
import defineConfig from '@/sanity.config'

export default function AdminPage() {
  return <NextStudio config={defineConfig} />
}
