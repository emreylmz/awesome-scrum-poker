import * as constants from './constants'

export const classNames = (...args: (string | undefined | false)[]): string => {
  return args.join(' ')
}

export { constants }
