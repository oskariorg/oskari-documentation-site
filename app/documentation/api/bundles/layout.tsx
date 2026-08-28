import DefaultLayout from '@/components/Layout'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '../../docs/loading'
import { MetadataHelper } from '@/utils/metadataHelper'

const defaultOgImage = MetadataHelper.getOskariDefaultImage()

export const metadata: Metadata = {
  title: 'API Bundles',
  openGraph: {
    title: 'API Bundles',
    images: [
      {
        url: defaultOgImage,
        alt: 'Oskari Map Application Platform',
      },
    ],
  },
  twitter: {
    title: 'API Bundles',
    images: [defaultOgImage],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout heroSmall heroTitle={'Oskari API Documentation'}>
      <div className='container--content'>
        <div className='layout--docs'>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </DefaultLayout>
  )
}
