import allPosts from '@/_content/coordinators/';
import AvatarCard from '@/components/Cards/AvatarCard'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { commitee, jointLogos } from '@/utils/constants'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Community',
}

const COMMERCIAL_SUPPORT = [
  {
    name: 'Advian',
    url: 'https://www.advian.fi/',
    text: 'Advian specializes in refined analytics, location information and artificial intelligence, providing solutions across various industries. We develop intelligent solutions that utilize data and automation to improve efficiency. Advian\'s service offering includes the implementation, development, and integration of Oskari platforms, as well as related maintenance services.'
  },
  {
    name: 'CGI Finland',
    url: 'https://www.cgi.com/fi/fi',
    text: ''
  },
  {
    name: 'Gispo Finland Ltd.',
    url: 'https://gispo.fi/en/',
    text: 'Gispo is a full service GIS house that specialises in FOSS4G (Free and Open Source Software for Geospatial) tools. We provide consulting, training and support for many open source geospatial technologies. Gispo develops and maintains solutions built on Oskari, and can also provide training and workshops in setting up and using Oskari.'
  },
  {
    name: 'Hubble',
    url: 'https://hubble.fi/',
    text: ''
  },
  {
    name: 'Phz Full Stack',
    url: 'https://phz.fi/',
    text: ''
  },
  {
    name: 'Siili',
    url: 'https://www.siili.com/',
    text: 'Siili is a full-spectrum digital partner, pioneering AI-driven solutions. We help businesses leverage AI for smarter, faster, and more impactful transformations. Our consultants also develop and implement the Oskari map platform, building intuitive, dynamic mapping solutions. At our core? A thriving community where AI meets humanity. Make AI Real.'
  },
  {
    name: 'Sitowise',
    url: 'https://www.sitowise.com/',
    text: ''
  },
  {
    name: 'Ubigu',
    url: 'https://ubigu.fi/en/',
    text: ''
  },
]

export default function CommunityPage() {
  return (
    <Layout heroTitle='Community' heroSmall>
      <div>
        <Text>
          Community is Oskari’s core value. Oskari Community includes growing
          group of organizations, individuals and developers putting their
          interests together to improve and develop Oskari software. Members of
          the Oskari community share openly their skills and knowledge with each
          other and develop Oskari together. At the community, we are constantly
          developing new solutions and ways of working. Thanks to active
          development by the community, Oskari stays up to date. Everyone is
          welcome to participate in the development of Oskari. There are
          different ways people can join Oskari development community.
        </Text>
      </div>
      <HighlightBox
        otter
        style={{
          backgroundColor: '#fafafa',
        }}
        contentStyles={{
          paddingBottom: '4rem',
          paddingTop: '4rem',
        }}
        left
      >
        <h2>Coordinators</h2>
        <Text>
          The community is coordinated by the National Land Survey of Finland.
          Oskari coordination is carried out by the technical coordinator, the
          product owner and the communications coordinator.
        </Text>
        <div className='flex flex-wrap justify-center lg:justify-around py-14 gap-16 w-full'>
          {allPosts
            .sort((a, b) => (!a.order || !b.order ? -1 : a.order - b.order))
            .map((coordinator) => {
              const { name, title, organisation, avatar } = coordinator
              return (
                <AvatarCard
                  key={name}
                  name={name}
                  title={title}
                  organisation={organisation}
                  avatar={avatar || ''}
                  filePath={coordinator.path}
                />
              )
            })}
        </div>
      </HighlightBox>
      <div className='my-24'>
        <h2>Project steering committee</h2>
        <Text>
          Oskari Project Steering Committee (PSC) is responsible for updating
          Oskari Roadmap and discusses the technical issues around Oskari.org in
          order to ensure consistent maintenance of the software. When new
          proposals are added to the Roadmap, the PSC members are informed and
          discussion on the suggested features should be active. Committing the
          feature is approved by the Project Steering Committee. Trusted
          developers can also be granted commit rights to the repository.
        </Text>
        <Text>
          Oskari PSC will be compiled from active contributors, Oskari Community
          Members and Project owners. Anybody interested in working in Oskari
          PSC can become a member (see Adding members).Oskari PSC is a steering
          group, a not a management group. This means that the PSC’s job is to
          describe and decide which new features are adopted to Oskari.org
          repository. The implementation of these features are done by Community
          members or Project owner organizations in their projects. Oskari PSC
          also advises in issues related to Oskari development. The rules for
          Oskari PSC are adopted from GeoServer, GeoNode & other OSGeo projects.
        </Text>
        <div className='flex flex-wrap justify-center lg:justify-around py-16 gap-16 w-full'>
          {commitee.map(({ name, title, organisation, img: avatar }) => (
            <AvatarCard
              key={name}
              name={name}
              title={title}
              organisation={organisation}
              avatar={avatar || '/assets/images/kuva_placeholder.png'}
              content=''
            />
          ))}
        </div>
      </div>
      <div className='py-10'>
        <h2>Joint development forum</h2>
        <Text>
          Joint Development Forum is a tight group of organisations that have an
          interest in developing Oskari together. It is formed by several
          organisational members providing funding for joint development,
          communication and bug fixing.
        </Text>
        <Text>Joint Development Forum, JDF, meets on a monthly basis.</Text>
        <div className='flex flex-wrap justify-center py-14 gap-x-8 gap-y-16 w-full'>
          {jointLogos.map((logo) => (
            <Image
              src={`/assets/images/logos/${logo}`}
              alt={`${logo} logo`}
              width={200}
              height={200}
              key={logo}
              className='object-contain h-auto'
            />
          ))}
        </div>
      </div>
      <div>
        <h2>Commercial support</h2>
        <Text>
          There are a number of organizations in the Oskari community that offer
          commercial support for Oskari. Support can be training, developing,
          installation or service management. Oskari is open source software and
          free to use but you don&apos;t always have the resources to install,
          manage and customize the software to your needs so commercial services
          are essential part of the open source ecosystem. If your organisation
          provides Oskari services commercially and is not found on the list,
          please make a pull request.
        </Text>
        <div>
          <h3>Companies offering commercial support</h3>
          <ul className='list-disc list-inside [&_a]:underline'>
            {COMMERCIAL_SUPPORT.map(({ name, url, text }) => (
              <li key={url}>
                <a href={url} rel='noreferrer nofollow' target='_blank'>
                  {name}
                </a>
                <br></br>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
