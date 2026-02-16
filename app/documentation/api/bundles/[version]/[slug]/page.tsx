
import { promises as fs } from 'fs';
import slugify from 'slugify';
import ApiSectionContentPage from '../../../components/ApiSectionContentPage';
import BundlesSidebarContent from '../../../components/BundlesSidebarContent';
import HtmlContentPage from '../../../components/HtmlContentPage';
import Error from '@/components/Error';
import path from 'path';

export default async function BundlesContentPage({
  params
}: {
  params: Promise<{ version: string, slug: string }>
}) {

  const { version, slug } = await params;
  const bundlesBasePath = '_content/api/versions/' + version + '/';
  
  const fileContents = await fs.readFile(bundlesBasePath + 'bundles.json', 'utf-8');
  const bundles = JSON.parse(fileContents);

  // const bundles = (await import('_content/api/versions/' + version + '/bundles.json')).default;
  const bundleBaseRef = '/documentation/api/bundles/' + version + '/';

  let allBundles: Array<{name: string, path: string}> = [];
  Object.keys(bundles).forEach(key => allBundles = allBundles.concat(bundles[key].bundles));

  const foundItem = allBundles.find(element => slugify(element.name) === slug);
  if (!foundItem) {
    return <Error text='No bundle doc found' code='404' />
  }

  const imagesPath = '/assets/api/'+version+'/'+path.normalize(foundItem.path);
  return <ApiSectionContentPage
    version={version}
    sideBarContent={<BundlesSidebarContent elements={bundles} baseHref={bundleBaseRef}/>}
    mainContent={<HtmlContentPage mdPath={bundlesBasePath + '/' + foundItem.path + '/bundle.md'} imagesPath={imagesPath} />}
    baseHref='/documentation/api/bundles/'/>;
}
