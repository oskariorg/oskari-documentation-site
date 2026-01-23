import { promises as fs } from 'fs';

import slugify from 'slugify';
import ApiSectionContentPage from '../../../components/ApiSectionContentPage';
import HtmlContentPage from '../../../components/HtmlContentPage';
import Error from '@/components/Error';
import { OskariEventOrRequest } from '@/types/api';
import EventsAndRequestsSidebarContent from '../../../components/EventsAndRequestsSidebarContent';
import path from 'path';
export default async function RequestsContentPage({
  params
}: {
  params: Promise<{ version: string, slug: string }>
}) {

  const { version, slug } = await params;
  const basePath = '_content/api/versions/' + version + '/';
  const fileContents = await fs.readFile(basePath+'requests.json', 'utf-8');
  const requests = JSON.parse(fileContents);
  // const requests = (await import('_content/api/versions/' + version + '/requests.json')).default;
  const requestsBaseRef = '/documentation/api/requests/' + version + '/';

  const foundItem = requests.find((element: OskariEventOrRequest) => slugify(element.name) === slug);
  if (!foundItem) {
    return <Error text='No request doc found' code='404' />
  }

  const normalized = path.normalize(foundItem.path);
  const imagesRelativePath = normalized.substring(0, normalized.lastIndexOf(path.sep));
  const imagesPath = '/assets/api/'+version+'/'+imagesRelativePath;

  return <ApiSectionContentPage
    version={version}
    sideBarContent={<EventsAndRequestsSidebarContent title='Select request' elements={requests} baseHref={requestsBaseRef}/>}
    mainContent={<HtmlContentPage mdPath={basePath + '/' + foundItem.path} imagesPath={imagesPath}/>}
    baseHref='/documentation/api/requests/'/>;
}
