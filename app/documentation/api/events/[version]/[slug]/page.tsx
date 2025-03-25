
import slugify from 'slugify';
import ApiSectionContentPage from '../../../components/ApiSectionContentPage';
import HtmlContentPage from '../../../components/HtmlContentPage';
import Error from '@/components/Error';
import { OskariEventOrRequest } from '@/types/api';
import EventsAndRequestsSidebarContent from '../../../components/EventsAndRequestsSidebarContent';
import path from 'path';

export default async function EventsContentPage({
  params
}: {
  params: Promise<{ version: string, slug: string }>
}) {

  const { version, slug } = await params;
  const basePath = '_content/api/versions/' + version + '/';
  const events = (await import('_content/api/versions/' + version + '/events.json')).default;
  const eventsBaseRef = '/documentation/api/events/' + version + '/';

  const foundItem = events.find((element: OskariEventOrRequest) => slugify(element.name) === slug);
  if (!foundItem) {
    return <Error text='No event doc found' code='404' />
  }

  const normalized = path.normalize(foundItem.path);
  const imagesRelativePath = normalized.substring(0, normalized.lastIndexOf(path.sep));
  const imagesPath = '/assets/api/'+version+'/'+imagesRelativePath;

  return <ApiSectionContentPage
    version={version}
    sideBarContent={<EventsAndRequestsSidebarContent title='Select event' elements={events} baseHref={eventsBaseRef}/>}
    mainContent={<HtmlContentPage mdPath={basePath + '/' + foundItem.path} imagesPath={imagesPath}/>}
    baseHref='/documentation/api/events/'/>;
}
