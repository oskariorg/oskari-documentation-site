import '../styles/main.scss'
import type { Metadata } from 'next'
import { leagueSpartan, mavenPro } from '@/utils/fonts'
import { MetadataHelper } from '@/utils/metadataHelper'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://oskari.org'
const ogImage = MetadataHelper.getOskariDefaultImage()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Oskari Map Application Platform',
    default: 'Oskari Map Application Platform',
  },
  description:
    'Oskari is a framework for easily building multipurpose web mapping applications utilizing distributed Spatial Data Infrastructures like INSPIRE.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Oskari Map Application Platform',
    description:
      'Oskari is a framework for easily building multipurpose web mapping applications utilizing distributed Spatial Data Infrastructures like INSPIRE.',
    images: [
      {
        url: ogImage,
        alt: 'Oskari Map Application Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${mavenPro.variable} ${leagueSpartan.variable}`}>
        {children}
      </body>
    </html>
  )
}
