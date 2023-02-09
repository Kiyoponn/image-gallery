import ImageGrid from '@/components/ImageGrid'
import NextImage from '@/components/NextImage'
import { data } from '@/utils/db/data'

type Params = { [key: string]: string | undefined }

export default function Page({ searchParams }: { searchParams?: Params }) {
  const { category } = searchParams || {}

  return (
    <ImageGrid>
      {data &&
        data
          .filter(({ active }) => {
            if (!category) return true
            return active === Number(category)
          })
          .map(({ src, alt, ratio }, index) => (
            <NextImage
              key={index}
              imageSrc={src}
              altText={alt}
              aspectRatio={ratio}
            />
          ))}
    </ImageGrid>
  )
}
