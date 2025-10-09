
import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionContentPage';
import BundlesSidebarContent from '../../components/BundlesSidebarContent';
export default async function BundlesVersionPage({
  params
}: {
  params: Promise<{ version: string }>
}) {

  const { version } = await params;
  const bundles = (await import('_content/api/versions/'+version+'/bundles.json')).default;
  const bundleBaseRef = '/documentation/api/bundles/'+version+'/';

  return <ApiSectionContentPage
    version={version}
    sideBarContent={<BundlesSidebarContent elements={bundles} baseHref={bundleBaseRef}/>}
    mainContent={<ApiDocChangeLog version={version}/>}
    baseHref='/documentation/api/bundles/'/>;
}
