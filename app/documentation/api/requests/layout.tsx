import DefaultLayout from '@/components/Layout'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '../../docs/loading'

export const metadata: Metadata = {
  title: 'API Requests',
  openGraph: {
    title: 'API Requests',
  },
  twitter: {
    title: 'API Requests',
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
