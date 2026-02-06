import clsx from 'clsx'
import { extendTailwindMerge, type ClassNameValue } from 'tailwind-merge'
import tw from '../../tailwind.config'

const twMerge = extendTailwindMerge({
  override: {
    theme: {
      borderRadius: Object.keys(tw.theme.borderRadius).map(k => k),
      borderWidth: Object.keys(tw.theme.borderWidth).map(k => k),
      colors: [
        ...Object.keys(tw.theme.colors).map(k => k),
        ...Object.keys(tw.theme.textColor).map(k => k)
      ],
      borderColor: [
        ...Object.keys(tw.theme.borderColor).map(k => k),
        ...Object.keys(tw.theme.outlineColor).map(k => k),
        ...Object.keys(tw.theme.ringColor).map(k => k)
      ],
      spacing: Object.keys(tw.theme.spacing).map(k => k)
    }
  },
  extend: {
    theme: {
      opacity: Object.keys(tw.theme.extend.opacity).map(k => k),
      margin: Object.keys(tw.theme.extend.margin).map(k => k),
      colors: [...Object.keys(tw.theme.extend.backgroundColor).map(k => k)]
    }
  }
})
export function cn(...inputs: ClassNameValue[]) {
  return twMerge(clsx(inputs))
}
