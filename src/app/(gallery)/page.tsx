import { previewData } from 'next/headers'

import ImageGrid from '@/src/components/ImageGrid'
import PreviewGallery from '@/src/components/sanity/PreviewGallery'
import PreviewSuspense from '@/src/components/sanity/PreviewSuspense'
import { getAll } from '@/src/utils/Groq'
import Loading from './loading'

export default async function GalleryPage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewGallery />
      </PreviewSuspense>
    )
  }

  const data = await getAll()
  return <ImageGrid data={data} />
}
