import { Spinner } from '@/components/Icons'

export default function LoadingUI() {
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <p className='text-sm text-neutral-seven dark:text-neutral-four'>
        Loading...
      </p>
      <span className='sr-only'>Loading</span>
      <Spinner className='animate-spin-fast stroke-[1.5] stroke-neutral-seven dark:stroke-neutral-four' />
    </div>
  )
}
