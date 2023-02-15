import clsx from 'clsx'
import MoonIcon from '../icons/Moon'
import SunIcon from '../icons/Sun'
import SystemIcon from '../icons/System'

interface ThemeIconProps {
  theme?: string
  className?: string
  width: number
  height: number
}

const ThemeIcon = ({ theme, className, ...props }: ThemeIconProps) => {
  switch (theme) {
    case 'light':
      return (
        <SunIcon
          {...props}
          className={clsx(
            'h-6 w-6 stroke-neutral-seven dark:stroke-neutral-four',
            className
          )}
        />
      )

    case 'dark':
      return (
        <MoonIcon
          {...props}
          className={clsx(
            'h-6 w-6 stroke-neutral-seven dark:stroke-neutral-four',
            className
          )}
        />
      )

    default:
      return (
        <SystemIcon
          {...props}
          className={clsx(
            'h-6 w-6 stroke-neutral-seven dark:stroke-neutral-four',
            className
          )}
        />
      )
  }
}

export default ThemeIcon
