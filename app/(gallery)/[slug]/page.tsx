import { previewData } from 'next/headers'

import ImageGrid from '@/components/ImageGrid'
import PreviewCategory from '@/components/sanity/PreviewCategory'
import PreviewSuspense from '@/components/sanity/PreviewSuspense'
import { getByCategory } from '@/utils/Groq'
import Loading from '../loading'

export default async function CategoryPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewCategory category={slug} />
      </PreviewSuspense>
    )
  }

  const data = await getByCategory(slug)
  return <ImageGrid data={data} />
}
