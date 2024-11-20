
import ApiDocChangeLog from '../../components/ApiDocChangeLog';
import ApiSectionContentPage from '../../components/ApiSectionContentPage';
import BundlesSidebarContent from '../../components/BundlesSidebarContent';
export default async function BundlesVersionPage({
  params
}: {
  params: { version: string }
}) {

  const bundles = (await import('_content/api/versions/'+params.version+'/bundles.json')).default;
  const bundleBaseRef = '/documentation/api/bundles/'+params.version+'/';

  return <ApiSectionContentPage
    version={params.version}
    sideBarContent={<BundlesSidebarContent elements={bundles} baseHref={bundleBaseRef}/>}
    mainContent={<ApiDocChangeLog version={params.version}/>}
    baseHref='/documentation/api/bundles/'/>;
}
