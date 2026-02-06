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
          Oskari roadmap for 2026 is a compiled by the many organisations that use Oskari and are members of the Oskari Joint Development Forum (JDF).
        </Text>
        <Text>
          Oskari&apos;s coordinators and the Oskari JDF will continue to work on keeping Oskari as a product that is up-to-date and easy to use. 
          In order to do so, one of the aims for 2026 is to apply for a project funding to do joint developing of Oskari between organisations.
        </Text>
        <Text>
          In 2026, Oskari development focuses on both the development of the Oskari core and re-organizing and enhancing the work of the JDF.
        </Text>
        <Text>
          Oskari core development in 2026 consists of the following:
        </Text>
        <Text>
            <b>Library updates (Q1-Q4)</b>
        </Text>
        <Text>     
            Updating the existing libraries makes sure that Oskari is up-to-date, safe to use and operates smoothly.
        </Text>
        <Text>   
            <b>Migrating the old jQuery components to React (Q1-Q4)</b>
         </Text>
        <Text>
            Migrating to React will make Oskari easier to use for developers and simplifies maintaining the Oskari codebase.
            A big leap forward in React migration was made in the Oskari 3.0 update yet some components are still based on jQuery.
        </Text>
        <Text>
            <b>Combining My Data (userlayer) and My Places (myplaces) to a new bundle: myfeatures (Q1-Q2)</b>
        </Text>
        <Text>
            This is a functionality that will replace My Places (features that user draws on map) and My Data (spatial datasets that user uploads to an Oskari instance). 
            The functionality from user perspective is the same as userlayer today but the internal code will be rewritten on both frontend and server.
            Preview of the functionality was published in 3.2.0 update in November 2025 and developing will continue in 2026.
        </Text>
        <Text>
            <b>Improvements on the documentation (Q1-Q4)</b>
        </Text>
        <Text>
            To make sure that Oskari is easy to implement and develop, the documentation has to be comprehensive and up-to-date.
            In 2026 the work on improving the documentation will begin with revising the RPC section and going through the issues listed <a href='https://github.com/oskariorg/oskari-documentation/issues'>in the GitHub repo of documentation</a>.
        </Text>

        <h2 id="process">The Oskari Roadmap process</h2>
        <Text>
        Oskari software is developed different parties: the National Land Survey of Finland, which is coordinating the Oskari project, organizations that use and develop Oskari and individual Oskari community members. 
        The development is based on jointly created vision described in the Roadmap and the individual needs of Oskari developing organizations.
        The source code provided by the community members or other developers will be integrated into the core Oskari software if deemed suitable. 
        The development projects should document the created source code with good codes of conduct, so that the reuse of the code is fluent.    
        The technical team of NLS FI checks the documentation before a commit can take place.
        
        </Text>

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
