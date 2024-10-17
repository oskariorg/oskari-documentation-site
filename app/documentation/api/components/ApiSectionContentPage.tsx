
import VersionSidebar from '@/components/VersionSidebar';
import { compareSemanticVersions } from '@/utils/misc';
import availableVersions from '_content/api/versions'
import { ReactNode } from 'react';
export default function ApiSectionContentPage({
    sideBarContent,
    mainContent,
    baseHref,
    version
}: {
    sideBarContent: ReactNode,
    mainContent: ReactNode,
    baseHref: string,
    version: string
}) {
  const versions = [
    ...new Set(
      availableVersions
        .sort((a, b) => compareSemanticVersions(a, b))
        .reverse()
    ),
  ];

  return <>
    <div>
        <VersionSidebar selectedVersion={version} versions={versions} baseHref={baseHref} />
        {sideBarContent}
    </div>
    <div className={'overFlowHidden'}>
        {mainContent}
    </div>
  </>;
}
