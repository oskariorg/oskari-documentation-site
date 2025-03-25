import { getVersionIndex } from '@/lib/utils'
import { redirect } from 'next/navigation'
export default async function VersionPage({
  params,
}: {
  params: Promise<{ version: string }>
}) {
  const { version } = await params;
  const indexJSON = await getVersionIndex(version);
  redirect('/documentation/docs/' + version + '/' + indexJSON[0].slug);
}
