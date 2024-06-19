import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation/Navigation'

interface LayoutProps {
  children: React.ReactNode
  heroSmall?: boolean
  heroTitle?: string,
  isFrontPage?: boolean
}

export default function Layout({
  children,
  heroSmall = false,
  heroTitle = 'Oskari – a mapping tool that adapts to your needs',
  isFrontPage = false
}: LayoutProps) {
  return (
    <>
      <Navigation />
      <Hero small={heroSmall} title={heroTitle} isFrontPage={isFrontPage}/>
      <main className='content-wrapper content-grid'>{children}</main>
      <Footer />
    </>
  )
}
