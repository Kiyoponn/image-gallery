import { Roboto } from '@next/font/google'
import { buildLegacyTheme } from 'sanity'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const brand = {
  '--brand': '#5A8CFF',

  '--info': '#F81CE5',
  '--success': '#0070F3',
  '--error': '#FF0000',
  '--warning': '#F5A623',

  '--neutral-one': '#F8FAFC',
  '--neutral-five': '#94A3B8',
  '--neutral-ten': '#0F172A',
}

export const galleryTheme = buildLegacyTheme({
  // base theme colors
  '--black': brand['--neutral-ten'],
  '--white': brand['--neutral-one'],

  '--gray': brand['--neutral-five'],
  '--gray-base': brand['--neutral-five'],

  '--component-bg': brand['--neutral-ten'],
  '--component-text-color': brand['--neutral-one'],

  // brand colors
  '--brand-primary': brand['--brand'],

  // default button colors
  '--default-button-color': brand['--neutral-five'],
  '--default-button-primary-color': brand['--brand'],
  '--default-button-success-color': brand['--success'],
  '--default-button-warning-color': brand['--warning'],
  '--default-button-danger-color': brand['--error'],

  // state colors
  '--state-info-color': brand['--info'],
  '--state-success-color': brand['--success'],
  '--state-warning-color': brand['--warning'],
  '--state-danger-color': brand['--error'],

  // navbar colors
  '--main-navigation-color': brand['--neutral-ten'],
  '--main-navigation-color--inverted': brand['--neutral-one'],

  '--focus-color': brand['--brand'],

  '--font-family-base': roboto.className,
})
