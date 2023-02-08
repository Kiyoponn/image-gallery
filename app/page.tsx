import { data } from '@/utils/db/data'
import clsx from 'clsx'
import Image from 'next/image'

type Params = { [key: string]: string | undefined }

export default function Page({ searchParams }: { searchParams?: Params }) {
  const { category } = searchParams || {}

  return (
    <main>
      {category ? (
        <div>
          <ul>
            {data
              .filter(({ active }) => active === Number(category))
              .map(({ src, alt }, index) => (
                <li key={index}>
                  <figure className={clsx(`aspect-`)}>
                    <Image src={src} alt={alt} />
                  </figure>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            {data.map(({ src, alt }, index) => (
              <li key={index}>
                <figure>
                  <Image src={src} alt={alt} />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}
