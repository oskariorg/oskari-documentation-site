import { promises as fs } from 'fs';
import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionContentPage';
import EventsAndRequestsSidebarContent from '../../components/EventsAndRequestsSidebarContent';

export default async function RequestsVersionPage({
  params,
}: {
  params: Promise<{ version: string }>
}) {

  const { version } = await params;
  const fileContents = await fs.readFile('_content/api/versions/'+version+'/requests.json', 'utf-8');
  const requests = JSON.parse(fileContents);
  // const requests = (await import('_content/api/versions/'+version+'/requests.json')).default;
  const requestsBaseRef = '/documentation/api/requests/'+version+'/';

  return <ApiSectionContentPage
    version={version}
    sideBarContent={<EventsAndRequestsSidebarContent title='Select request' elements={requests} baseHref={requestsBaseRef}/>}
    mainContent={<ApiDocChangeLog version={version}/>}
    baseHref='/documentation/api/requests/'/>;
}
