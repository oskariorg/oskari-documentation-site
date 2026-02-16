import { promises as fs } from 'fs';
import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionContentPage';
import EventsAndRequestsSidebarContent from '../../components/EventsAndRequestsSidebarContent';

export default async function EventsVersionPage({
  params,
}: {
  params: Promise<{ version: string }>
}) {

  const { version } = await params;
  const fileContents = await fs.readFile('_content/api/versions/'+version+'/events.json', 'utf-8');
  const events = JSON.parse(fileContents);
  //const events = (await import('_content/api/versions/'+version+'/events.json')).default;
  const eventsBaseRef = '/documentation/api/events/'+version+'/';

  return <ApiSectionContentPage
    version={version}
    sideBarContent={<EventsAndRequestsSidebarContent title='Select event' elements={events} baseHref={eventsBaseRef}/>}
    mainContent={<ApiDocChangeLog version={version}/>}
    baseHref='/documentation/api/events/'/>;
}
