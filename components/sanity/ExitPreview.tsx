import clsx from 'clsx'
import Link from 'next/link'

export default function ExitPreviewButton() {
  return (
    <Link
      className={clsx(
        'fixed bottom-4 right-2 p-6',
        'bg-neutral-ten text-neutral-one',
        'dark:bg-neutral-one dark:text-neutral-ten'
      )}
      href='/api/exit-preview'
    >
      Exit Preview
    </Link>
  )
}
