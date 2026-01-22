import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { Metadata } from 'next'
import HighlightBox from '@/components/HighlightBox'
import Button from '@/components/Button'
export const metadata: Metadata = {
  title: 'Oskari Roadmap',
}


export default function OskariRoadmapPage() {
  return (
    <Layout heroSmall heroTitle='Oskari Roadmap' decorateLinks={true}>
      <div>
        <h2 id="roadmap">Oskari Roadmap 2026</h2>
        <Text>
        <div>
          Oskari roadmap for 2026 is a compiled by the many organisations that use Oskari and are members of the Oskari Joint Development Forum (JDF).
        </div>
        <div>
          In 2026, Oskari development consists of both the development of the Oskari core and re-organizing and enhancing the work of the JDF.
        </div>
        <div>
          Oskari core development in 2026 consists of the following:
        <list>
            <b>Library updates</b> (Q1-Q4)
            Update the existing libraries to keep Oskari up-to-date and to take care of security considerations.
            
            <b>Migrating the old jQuery components to React (Q1-Q4)</b>
            The React migration has been going on for some time now and in Oskari 3.0. major release a big effort

            Combining My Data and My Places (the spatial datasets the user uploads and the features user can draw on map)
            Improvements on documentation
        </list>
        </div>
        <div>
          The Oskari JDF will continue to work on keeping Oskari as a product that is up-to-date and easy to use. 
          In order to do so, one of the aims for 2026 is to apply for a project funding to do joint developing of Oskari between organisations.
        </div>
        </Text>
      </div>
      <div>
      <h2 id="release_schedule">Release schedule</h2>
        <Text>
        New Oskari versions are being released 2-4 times a year. Usually there is a new version every 3-4 months.
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
