import SpinnerIcon from '@/src/icons/Spinner'

export default function Loading() {
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <p className='text-sm text-neutral-seven dark:text-neutral-four'>
        Loading...
      </p>
      <span className='sr-only'>Loading</span>
      <SpinnerIcon className='animate-spin-fast stroke-neutral-seven stroke-[1.5] dark:stroke-neutral-four' />
    </div>
  )
}
