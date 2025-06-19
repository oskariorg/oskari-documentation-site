import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { Metadata } from 'next'
import HighlightBox from '@/components/HighlightBox'
import Button from '@/components/Button'
import Link from 'next/link'
import DiscoverPage from '../page'
export const metadata: Metadata = {
  title: 'Getting Started',
}

export default function GettingStartedPage() {
  return (
    <Layout heroSmall heroTitle='Getting Started' decorateLinks={true}>
      <div>
        <Text>
          This site contains all the relevant links for finding the information you need about Oskari. The material has been divided under different user groups and customed to their needs.
        </Text>
      </div>
      <div>
        <h2 id="owners-procurers">Getting Started for Admins, Owners & Procurers</h2>
        <Text>
        <div>
          If you need help with the admin tools, see our <Link href='/documentation/faq#for-admins'>FAQ for Oskari admins.</Link>
        </div>
        <div>
          If you want to have a quick overview of what Oskari is about in technical perspective, see <Link href='https://oskari.org/documentation/docs/latest/1-Introduction#Welcome'>the Introduction chapter of Oskari documentation.</Link>
        </div>
        <div>
          If you want to understand Oskari&apos;s infrastructure, <Link href='/documentation/docs/latest/1-Introduction#Application-environment'>see an example of Oskari&apos;s framework.</Link>
        </div>
        <div>
          Some thoughts on <Link href='discover/procurement'>how to procure Oskari-related work.</Link>
        </div>
        </Text>
      </div>
      <div>
      <h2 id="developers">Getting Started for Developers</h2>
        <Text>
          <div>
          <a href='https://github.com/oskariorg/oskari-frontend'>Oskari front-end repository</a>
          </div>
          <div>
          <a href='https://github.com/oskariorg/oskari-server'>Oskari server repository</a>
          </div>
        <Link href='/documentation/docs/latest/2-Setup-instructions#Setup-instructions'>Setting up an Oskari instance</Link>
          <div>
          <a href='https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md'>Updating an old Oskari instance (Migration Guide)</a>
          </div>
          <Link href='/documentation/docs/latest/8-Configuration-instructions#Configuration-instructions'>Configuring Oskari</Link>
          <div>
          <Link href='/documentation/docs/latest/1-Introduction#Application-environment'>See an example of Oskari framework</Link>
          </div>
          <Link href='/documentation/docs/latest/7-Developing-instructions#Developing-instructions'>Developing Oskari-based applications</Link>
          <div>
          <a href='https://demo.oskari.org'>Open the demo and try out Oskari yourself!</a>
          </div>
          <Link href='/examples/rpc-api'>Try out the RPC and its features</Link>
        </Text>
      </div>
      <div>
      <h2 id="commercial-partners">Getting Started for Commercial partners</h2>
        <Text>
        <Link href='/documentation/docs/latest/1-Introduction#Welcome'>Introduction to Oskari, incl. what technical skills are needed, technical overview, basic concepts.</Link>
          <div>
          <Link href='/documentation/docs/latest/1-Introduction#Application-environment'>An example of an Oskari framework.</Link>
          </div>
        </Text>
      </div>
      <div>
      <h2 id="end-users">Getting Started for End-users</h2>
        <Text>
          <Link href='/discover'> What is Oskari?</Link>
          <div>
          <Link href='/documentation/faq#for-developers'>How to report bugs in Oskari?</Link>
          </div>
          To contact Oskari Joint Development Forum, <Link href='mailto:info@oskari.fi'>send us an e-mail</Link>
          <div>
          Tutorials:
          </div>
          <Link href='/documentation/faq#for-endusers'>Embedding maps</Link>
          <div>
          <Link href='/documentation/faq#for-endusers'>Various other tutorials</Link>
          </div>
        </Text>
      </div>

      <HighlightBox
        style={{
          margin: '6rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.625rem' }}>Give it a try!</h3>
          <p style={{ textAlign: 'center', fontSize: '1.125rem' }}>
            Try out the Oskari demo!
          </p>
          <Button
            variant='dark'
            title='Try Oskari demo'
            href='https://demo.oskari.org/'
            external
            newWindow
          />
        </div>
      </HighlightBox>
    </Layout>
  )
}
