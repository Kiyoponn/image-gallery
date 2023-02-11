import ImageGrid from '@/components/ImageGrid'

export default function CategoryPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  return <ImageGrid slug={slug} />
}
