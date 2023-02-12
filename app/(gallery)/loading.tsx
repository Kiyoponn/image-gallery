import { Spinner } from '@/components/Icons'

export default function Loading() {
  return (
    <div className='flex mt-12 flex-col justify-center items-center'>
      <p className='text-neutral-seven dark:text-neutral-four text-sm'>
        Loading...
      </p>
      <span className='sr-only'>Loading</span>
      <Spinner className='dark:stroke-neutral-four stroke-neutral-seven animate-spin-fast' />
    </div>
  )
}
