import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import animated from 'tailwindcss-animated'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px'
    },
    spacing: {
      none: 'var(--spacing-0)',
      0: 'var(--spacing-0)',
      1: 'var(--spacing-1)',
      2: 'var(--spacing-2)',
      4: 'var(--spacing-4)',
      6: 'var(--spacing-6)',
      8: 'var(--spacing-8)',
      10: 'var(--spacing-10)',
      12: 'var(--spacing-12)',
      14: 'var(--spacing-14)',
      16: 'var(--spacing-16)',
      18: 'var(--spacing-18)',
      20: 'var(--spacing-20)',
      24: 'var(--spacing-24)',
      28: 'var(--spacing-28)',
      32: 'var(--spacing-32)',
      36: 'var(--spacing-36)',
      40: 'var(--spacing-40)',
      44: 'var(--spacing-44)',
      48: 'var(--spacing-48)',
      52: 'var(--spacing-52)',
      56: 'var(--spacing-56)',
      60: 'var(--spacing-60)',
      82: 'var(--spacing-82)',
      96: 'var(--spacing-96)',
      120: 'var(--spacing-120)',
      'icon-responsive': '1.1em',
      'icon-sm': 'var(--spacing-20)',
      'icon-base': 'var(--spacing-24)',
      'icon-lg': 'var(--spacing-28)'
    },
    transitionTimingFunction: {
      base: 'var(--transition-timing)',
      effect: 'var(--transition-timing-effect)'
    },
    transitionDuration: {
      none: '0s',
      fast: 'var(--transition-duration-faster)',
      base: 'var(--transition-duration-fast)',
      slow: 'var(--transition-duration-slow)',
      slower: 'var(--transition-duration-slower)',
      slowest: 'var(--transition-duration-slowest)'
    },
    boxShadow: {
      sm: 'var(--shadow-sm)',
      base: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      xl: 'var(--shadow-xl)',
      '2xl': 'var(--shadow-2xl)',
      overflow: 'var(--shadow-overflow)',
      inner: 'var(--shadow-inner)'
    },
    textDecorationThickness: {
      none: 'var(--spacing-0)',
      0: 'var(--spacing-0)',
      DEFAULT: 'var(--border-w-sm)',
      2: 'var(--border-w-md)',
      3: 'var(--border-w-lg)'
    },
    outlineWidth: {
      none: 'var(--spacing-0)',
      0: 'var(--spacing-0)',
      DEFAULT: 'var(--border-w-sm)',
      2: 'var(--border-w-md)',
      3: 'var(--border-w-lg)'
    },
    borderWidth: {
      none: 'var(--spacing-0)',
      0: 'var(--spacing-0)',
      DEFAULT: 'var(--border-w-sm)',
      2: 'var(--border-w-md)',
      3: 'var(--border-w-lg)'
    },
    ringWidth: {
      none: 'var(--spacing-0)',
      0: 'var(--spacing-0)',
      DEFAULT: 'var(--border-w-sm)',
      2: 'var(--border-w-md)',
      3: 'var(--border-w-lg)'
    },
    ringOffsetWidth: {
      none: 'var(--spacing-0)',
      0: 'var(--spacing-0)',
      DEFAULT: 'var(--border-w-sm)',
      2: 'var(--border-w-md)',
      3: 'var(--border-w-lg)'
    },
    textUnderlineOffset: {
      DEFAULT: 'var(--border-w-sm)',
      2: 'var(--border-w-md)',
      3: 'var(--border-w-lg)'
    },
    outlineOffset: {
      DEFAULT: 'var(--border-w-sm)',
      2: 'var(--border-w-md)',
      3: 'var(--border-w-lg)'
    },
    borderRadius: {
      none: 'var(--radius-none)',
      sm: 'var(--radius-sm)',
      base: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      full: 'var(--radius-full)'
    },
    fontFamily: {
      heading: ['Merriweather', 'Georgia', 'serif'],
      mono: ['Courier New', 'monospace'],
      body: ['Open Sans Variable', 'Helvetica', 'sans-serif']
    },
    fontSize: {
      'body-inherit': 'inherit',
      'body-xs': [
        'var(--typography-body-xs)',
        {
          fontWeight: 'var(--typography-w-regular)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'body-sm': [
        'var(--typography-body-sm)',
        {
          fontWeight: 'var(--typography-w-regular)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'body-base': [
        'var(--typography-body-md)',
        {
          fontWeight: 'var(--typography-w-regular)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'body-lg': [
        'var(--typography-body-lg)',
        {
          fontWeight: 'var(--typography-w-regular)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'body-xl': [
        'var(--typography-body-xl)',
        {
          fontWeight: 'var(--typography-w-regular)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'label-xs': [
        'var(--typography-body-xs)',
        {
          fontWeight: 'var(--typography-w-medium)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-sm': [
        'var(--typography-body-sm)',
        {
          fontWeight: 'var(--typography-w-semibold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-base': [
        'var(--typography-body-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-lg': [
        'var(--typography-body-lg)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-xl': [
        'var(--typography-body-xl)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-2xl': [
        'var(--typography-heading-4-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-3xl': [
        'var(--typography-heading-3-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-4xl': [
        'var(--typography-heading-2-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'label-5xl': [
        'var(--typography-heading-1-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-sm)'
        }
      ],
      'heading-6-base': [
        'var(--typography-heading-6-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'heading-6-sm': [
        'var(--typography-heading-6-sm)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'heading-6-lg': [
        'var(--typography-heading-6-lg)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'heading-5-base': [
        'var(--typography-heading-5-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'heading-5-sm': [
        'var(--typography-heading-5-sm)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'heading-5-lg': [
        'var(--typography-heading-5-lg)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-lg)'
        }
      ],
      'heading-4-base': [
        'var(--typography-heading-4-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-md)'
        }
      ],
      'heading-4-sm': [
        'var(--typography-heading-4-sm)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-md)'
        }
      ],
      'heading-4-lg': [
        'var(--typography-heading-4-lg)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-md)'
        }
      ],
      'heading-3-base': [
        'var(--typography-heading-3-md)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-md)'
        }
      ],
      'heading-3-sm': [
        'var(--typography-heading-3-sm)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-md)'
        }
      ],
      'heading-3-lg': [
        'var(--typography-heading-3-lg)',
        {
          fontWeight: 'var(--typography-w-bold)',
          lineHeight: 'var(--typography-lh-md)'
        }
      ],
      'heading-2-base': [
        'var(--typography-heading-2-md)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-2-sm': [
        'var(--typography-heading-2-sm)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-2-lg': [
        'var(--typography-heading-2-lg)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-2-display-base': [
        'var(--typography-heading-2-display-md)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-2-display-lg': [
        'var(--typography-heading-2-display-lg)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-1-base': [
        'var(--typography-heading-1-md)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-1-sm': [
        'var(--typography-heading-1-sm)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-1-lg': [
        'var(--typography-heading-1-lg)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-1-display-base': [
        'var(--typography-heading-1-display-md)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ],
      'heading-1-display-lg': [
        'var(--typography-heading-1-display-lg)',
        {
          fontWeight: 'var(--typography-w-black)',
          lineHeight: 'var(--typography-lh-md)',
          letterSpacing: 'var(--typography-ls-heading)'
        }
      ]
    },
    fontWeight: {
      light: 'var(--typography-w-light)',
      regular: 'var(--typography-w-regular)',
      medium: 'var(--typography-w-medium)',
      semibold: 'var(--typography-w-semibold)',
      bold: 'var(--typography-w-bold)',
      extraBold: 'var(--typography-w-extra-bold)',
      black: 'var(--typography-w-black)'
    },
    lineHeight: {
      base: 'var(--typography-lh-sm)',
      heading: 'var(--typography-lh-md)',
      text: 'var(--typography-lh-lg)'
    },
    scale: {
      90: 'var(--scale-90)',
      92: 'var(--scale-92)',
      94: 'var(--scale-94)',
      96: 'var(--scale-96)',
      98: 'var(--scale-98)',
      100: 'var(--scale-100)',
      102: 'var(--scale-102)',
      104: 'var(--scale-104)',
      106: 'var(--scale-106)',
      108: 'var(--scale-108)',
      110: 'var(--scale-110)',
      125: 'var(--scale-125)',
      150: 'var(--scale-150)',
      175: 'var(--scale-175)',
      200: 'var(--scale-200)'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',

      'base-subtle': 'rgb(var(--background-base-subtle))',
      'base-subtle-hover': 'rgb(var(--background-base-subtle-hover))',
      'base-subtle-active': 'rgb(var(--background-base-subtle-active))',
      base: 'rgb(var(--background-base))',
      'base-hover': 'rgb(var(--background-base-hover))',
      'base-active': 'rgb(var(--background-base-active))',
      'base-bold': 'rgb(var(--background-base-bold))',
      'base-bold-hover': 'rgb(var(--background-base-bold-hover))',
      'base-bold-active': 'rgb(var(--background-base-bold-active))',
      'base-bolder': 'rgb(var(--background-base-bolder))',
      'base-bolder-hover': 'rgb(var(--background-base-bolder-hover))',
      'base-bolder-active': 'rgb(var(--background-base-bolder-active))',
      'base-inverted': 'rgb(var(--background-base-inverted))',
      'base-inverted-bold': 'rgb(var(--background-base-inverted-bold))',
      surface: 'rgb(var(--background-surface))',
      'surface-hover': 'rgb(var(--background-surface-hover))',
      'surface-active': 'rgb(var(--background-surface-active))',

      'base-fixed': 'rgb(var(--background-base-fixed))',
      'base-subtle-fixed': 'rgb(var(--background-base-subtle-fixed))',
      'base-bold-fixed': 'rgb(var(--background-base-bold-fixed))',
      'base-bolder-fixed': 'rgb(var(--background-base-bolder-fixed))',
      'base-inverted-fixed': 'rgb(var(--background-base-inverted-fixed))',
      'base-inverted-bold-fixed': 'rgb(var(--background-base-inverted-bold-fixed))',

      'primary-subtler': 'rgb(var(--background-primary-subtler))',
      'primary-subtler-hover': 'rgb(var(--background-primary-subtler-hover))',
      'primary-subtler-active': 'rgb(var(--background-primary-subtler-active))',
      'primary-subtle': 'rgb(var(--background-primary-subtle))',
      'primary-subtle-hover': 'rgb(var(--background-primary-subtle-hover))',
      'primary-subtle-active': 'rgb(var(--background-primary-subtle-active))',
      'primary-base': 'rgb(var(--background-primary-base))',
      'primary-base-hover': 'rgb(var(--background-primary-base-hover))',
      'primary-base-active': 'rgb(var(--background-primary-base-active))',
      'primary-bold': 'rgb(var(--background-primary-bold))',
      'primary-bold-hover': 'rgb(var(--background-primary-bold-hover))',
      'primary-bold-active': 'rgb(var(--background-primary-bold-active))',

      'primary-fixed': 'rgb(var(--background-primary-fixed))',
      'primary-bold-fixed': 'rgb(var(--background-primary-bold-fixed))',
      'primary-inverted-fixed': 'rgb(var(--background-primary-inverted-fixed))',
      'primary-inverted-bold-fixed': 'rgb(var(--background-primary-inverted-bold-fixed))',

      'secondary-subtler': 'rgb(var(--background-secondary-subtler))',
      'secondary-subtler-hover': 'rgb(var(--background-secondary-subtler-hover))',
      'secondary-subtler-active': 'rgb(var(--background-secondary-subtler-active))',
      'secondary-subtle': 'rgb(var(--background-secondary-subtle))',
      'secondary-subtle-hover': 'rgb(var(--background-secondary-subtle-hover))',
      'secondary-subtle-active': 'rgb(var(--background-secondary-subtle-active))',
      'secondary-base': 'rgb(var(--background-secondary-base))',
      'secondary-base-hover': 'rgb(var(--background-secondary-base-hover))',
      'secondary-base-active': 'rgb(var(--background-secondary-base-active))',
      'secondary-bold': 'rgb(var(--background-secondary-bold))',
      'secondary-bold-hover': 'rgb(var(--background-secondary-bold-hover))',
      'secondary-bold-active': 'rgb(var(--background-secondary-bold-active))',

      'secondary-fixed': 'rgb(var(--background-secondary-fixed))',
      'secondary-bold-fixed': 'rgb(var(--background-secondary-bold-fixed))',
      'secondary-inverted-fixed': 'rgb(var(--background-secondary-inverted-fixed))',
      'secondary-inverted-bold-fixed': 'rgb(var(--background-secondary-inverted-bold-fixed))',

      'info-subtler': 'rgb(var(--background-info-subtler))',
      'info-subtler-hover': 'rgb(var(--background-info-subtler-hover))',
      'info-subtler-active': 'rgb(var(--background-info-subtler-active))',
      'info-subtle': 'rgb(var(--background-info-subtle))',
      'info-subtle-hover': 'rgb(var(--background-info-subtle-hover))',
      'info-subtle-active': 'rgb(var(--background-info-subtle-active))',
      'info-base': 'rgb(var(--background-info-base))',
      'info-base-hover': 'rgb(var(--background-info-base-hover))',
      'info-base-active': 'rgb(var(--background-info-base-active))',
      'info-bold': 'rgb(var(--background-info-bold))',
      'info-bold-hover': 'rgb(var(--background-info-bold-hover))',
      'info-bold-active': 'rgb(var(--background-info-bold-active))',

      'info-fixed': 'rgb(var(--background-info-fixed))',
      'info-bold-fixed': 'rgb(var(--background-info-bold-fixed))',
      'info-inverted-fixed': 'rgb(var(--background-info-inverted-fixed))',
      'info-inverted-bold-fixed': 'rgb(var(--background-info-inverted-bold-fixed))',

      'success-subtler': 'rgb(var(--background-success-subtler))',
      'success-subtler-hover': 'rgb(var(--background-success-subtler-hover))',
      'success-subtler-active': 'rgb(var(--background-success-subtler-active))',
      'success-subtle': 'rgb(var(--background-success-subtle))',
      'success-subtle-hover': 'rgb(var(--background-success-subtle-hover))',
      'success-subtle-active': 'rgb(var(--background-success-subtle-active))',
      'success-base': 'rgb(var(--background-success-base))',
      'success-base-hover': 'rgb(var(--background-success-base-hover))',
      'success-base-active': 'rgb(var(--background-success-base-active))',
      'success-bold': 'rgb(var(--background-success-bold))',
      'success-bold-hover': 'rgb(var(--background-success-bold-hover))',
      'success-bold-active': 'rgb(var(--background-success-bold-active))',

      'success-fixed': 'rgb(var(--background-success-fixed))',
      'success-bold-fixed': 'rgb(var(--background-success-bold-fixed))',
      'success-inverted-fixed': 'rgb(var(--background-success-inverted-fixed))',
      'success-inverted-bold-fixed': 'rgb(var(--background-success-inverted-bold-fixed))',

      'warning-subtler': 'rgb(var(--background-warning-subtler))',
      'warning-subtler-hover': 'rgb(var(--background-warning-subtler-hover))',
      'warning-subtler-active': 'rgb(var(--background-warning-subtler-active))',
      'warning-subtle': 'rgb(var(--background-warning-subtle))',
      'warning-subtle-hover': 'rgb(var(--background-warning-subtle-hover))',
      'warning-subtle-active': 'rgb(var(--background-warning-subtle-active))',
      'warning-base': 'rgb(var(--background-warning-base))',
      'warning-base-hover': 'rgb(var(--background-warning-base-hover))',
      'warning-base-active': 'rgb(var(--background-warning-base-active))',
      'warning-bold': 'rgb(var(--background-warning-bold))',
      'warning-bold-hover': 'rgb(var(--background-warning-bold-hover))',
      'warning-bold-active': 'rgb(var(--background-warning-bold-active))',

      'warning-fixed': 'rgb(var(--background-warning-fixed))',
      'warning-bold-fixed': 'rgb(var(--background-warning-bold-fixed))',
      'warning-inverted-fixed': 'rgb(var(--background-warning-inverted-fixed))',
      'warning-inverted-bold-fixed': 'rgb(var(--background-warning-inverted-bold-fixed))',

      'danger-subtler': 'rgb(var(--background-danger-subtler))',
      'danger-subtler-hover': 'rgb(var(--background-danger-subtler-hover))',
      'danger-subtler-active': 'rgb(var(--background-danger-subtler-active))',
      'danger-subtle': 'rgb(var(--background-danger-subtle))',
      'danger-subtle-hover': 'rgb(var(--background-danger-subtle-hover))',
      'danger-subtle-active': 'rgb(var(--background-danger-subtle-active))',
      'danger-base': 'rgb(var(--background-danger-base))',
      'danger-base-hover': 'rgb(var(--background-danger-base-hover))',
      'danger-base-active': 'rgb(var(--background-danger-base-active))',
      'danger-bold': 'rgb(var(--background-danger-bold))',
      'danger-bold-hover': 'rgb(var(--background-danger-bold-hover))',
      'danger-bold-active': 'rgb(var(--background-danger-bold-active))',

      'danger-fixed': 'rgb(var(--background-danger-fixed))',
      'danger-bold-fixed': 'rgb(var(--background-danger-bold-fixed))',
      'danger-inverted-fixed': 'rgb(var(--background-danger-inverted-fixed))',
      'danger-inverted-bold-fixed': 'rgb(var(--background-danger-inverted-bold-fixed))',

      'accent-blue-subtlest': 'rgb(var(--background-accent-blue-subtlest))',
      'accent-blue-subtlest-hover': 'rgb(var(--background-accent-blue-subtlest-hover))',
      'accent-blue-subtlest-active': 'rgb(var(--background-accent-blue-subtlest-active))',
      'accent-blue-subtler': 'rgb(var(--background-accent-blue-subtler))',
      'accent-blue-subtler-hover': 'rgb(var(--background-accent-blue-subtler-hover))',
      'accent-blue-subtler-active': 'rgb(var(--background-accent-blue-subtler-active))',
      'accent-blue-subtle': 'rgb(var(--background-accent-blue-subtle))',
      'accent-blue-subtle-hover': 'rgb(var(--background-accent-blue-subtle-hover))',
      'accent-blue-subtle-active': 'rgb(var(--background-accent-blue-subtle-active))',
      'accent-blue-base': 'rgb(var(--background-accent-blue-base))',
      'accent-blue-base-hover': 'rgb(var(--background-accent-blue-base-hover))',
      'accent-blue-base-active': 'rgb(var(--background-accent-blue-base-active))',
      'accent-blue-bold': 'rgb(var(--background-accent-blue-bold))',
      'accent-blue-bold-hover': 'rgb(var(--background-accent-blue-bold-hover))',
      'accent-blue-bold-active': 'rgb(var(--background-accent-blue-bold-active))',

      'accent-green-subtlest': 'rgb(var(--background-accent-green-subtlest))',
      'accent-green-subtlest-hover': 'rgb(var(--background-accent-green-subtlest-hover))',
      'accent-green-subtlest-active': 'rgb(var(--background-accent-green-subtlest-active))',
      'accent-green-subtler': 'rgb(var(--background-accent-green-subtler))',
      'accent-green-subtler-hover': 'rgb(var(--background-accent-green-subtler-hover))',
      'accent-green-subtler-active': 'rgb(var(--background-accent-green-subtler-active))',
      'accent-green-subtle': 'rgb(var(--background-accent-green-subtle))',
      'accent-green-subtle-hover': 'rgb(var(--background-accent-green-subtle-hover))',
      'accent-green-subtle-active': 'rgb(var(--background-accent-green-subtle-active))',
      'accent-green-base': 'rgb(var(--background-accent-green-base))',
      'accent-green-base-hover': 'rgb(var(--background-accent-green-base-hover))',
      'accent-green-base-active': 'rgb(var(--background-accent-green-base-active))',
      'accent-green-bold': 'rgb(var(--background-accent-green-bold))',
      'accent-green-bold-hover': 'rgb(var(--background-accent-green-bold-hover))',
      'accent-green-bold-active': 'rgb(var(--background-accent-green-bold-active))',

      'accent-yellow-subtlest': 'rgb(var(--background-accent-yellow-subtlest))',
      'accent-yellow-subtlest-hover': 'rgb(var(--background-accent-yellow-subtlest-hover))',
      'accent-yellow-subtlest-active': 'rgb(var(--background-accent-yellow-subtlest-active))',
      'accent-yellow-subtler': 'rgb(var(--background-accent-yellow-subtler))',
      'accent-yellow-subtler-hover': 'rgb(var(--background-accent-yellow-subtler-hover))',
      'accent-yellow-subtler-active': 'rgb(var(--background-accent-yellow-subtler-active))',
      'accent-yellow-subtle': 'rgb(var(--background-accent-yellow-subtle))',
      'accent-yellow-subtle-hover': 'rgb(var(--background-accent-yellow-subtle-hover))',
      'accent-yellow-subtle-active': 'rgb(var(--background-accent-yellow-subtle-active))',
      'accent-yellow-base': 'rgb(var(--background-accent-yellow-base))',
      'accent-yellow-base-hover': 'rgb(var(--background-accent-yellow-base-hover))',
      'accent-yellow-base-active': 'rgb(var(--background-accent-yellow-base-active))',
      'accent-yellow-bold': 'rgb(var(--background-accent-yellow-bold))',
      'accent-yellow-bold-hover': 'rgb(var(--background-accent-yellow-bold-hover))',
      'accent-yellow-bold-active': 'rgb(var(--background-accent-yellow-bold-active))',

      'accent-red-subtlest': 'rgb(var(--background-accent-red-subtlest))',
      'accent-red-subtlest-hover': 'rgb(var(--background-accent-red-subtlest-hover))',
      'accent-red-subtlest-active': 'rgb(var(--background-accent-red-subtlest-active))',
      'accent-red-subtler': 'rgb(var(--background-accent-red-subtler))',
      'accent-red-subtler-hover': 'rgb(var(--background-accent-red-subtler-hover))',
      'accent-red-subtler-active': 'rgb(var(--background-accent-red-subtler-active))',
      'accent-red-subtle': 'rgb(var(--background-accent-red-subtle))',
      'accent-red-subtle-hover': 'rgb(var(--background-accent-red-subtle-hover))',
      'accent-red-subtle-active': 'rgb(var(--background-accent-red-subtle-active))',
      'accent-red-base': 'rgb(var(--background-accent-red-base))',
      'accent-red-base-hover': 'rgb(var(--background-accent-red-base-hover))',
      'accent-red-base-active': 'rgb(var(--background-accent-red-base-active))',
      'accent-red-bold': 'rgb(var(--background-accent-red-bold))',
      'accent-red-bold-hover': 'rgb(var(--background-accent-red-bold-hover))',
      'accent-red-bold-active': 'rgb(var(--background-accent-red-bold-active))',

      'accent-teal-subtlest': 'rgb(var(--background-accent-teal-subtlest))',
      'accent-teal-subtlest-hover': 'rgb(var(--background-accent-teal-subtlest-hover))',
      'accent-teal-subtlest-active': 'rgb(var(--background-accent-teal-subtlest-active))',
      'accent-teal-subtler': 'rgb(var(--background-accent-teal-subtler))',
      'accent-teal-subtler-hover': 'rgb(var(--background-accent-teal-subtler-hover))',
      'accent-teal-subtler-active': 'rgb(var(--background-accent-teal-subtler-active))',
      'accent-teal-subtle': 'rgb(var(--background-accent-teal-subtle))',
      'accent-teal-subtle-hover': 'rgb(var(--background-accent-teal-subtle-hover))',
      'accent-teal-subtle-active': 'rgb(var(--background-accent-teal-subtle-active))',
      'accent-teal-base': 'rgb(var(--background-accent-teal-base))',
      'accent-teal-base-hover': 'rgb(var(--background-accent-teal-base-hover))',
      'accent-teal-base-active': 'rgb(var(--background-accent-teal-base-active))',
      'accent-teal-bold': 'rgb(var(--background-accent-teal-bold))',
      'accent-teal-bold-hover': 'rgb(var(--background-accent-teal-bold-hover))',
      'accent-teal-bold-active': 'rgb(var(--background-accent-teal-bold-active))',

      'accent-orange-subtlest': 'rgb(var(--background-accent-orange-subtlest))',
      'accent-orange-subtlest-hover': 'rgb(var(--background-accent-orange-subtlest-hover))',
      'accent-orange-subtlest-active': 'rgb(var(--background-accent-orange-subtlest-active))',
      'accent-orange-subtler': 'rgb(var(--background-accent-orange-subtler))',
      'accent-orange-subtler-hover': 'rgb(var(--background-accent-orange-subtler-hover))',
      'accent-orange-subtler-active': 'rgb(var(--background-accent-orange-subtler-active))',
      'accent-orange-subtle': 'rgb(var(--background-accent-orange-subtle))',
      'accent-orange-subtle-hover': 'rgb(var(--background-accent-orange-subtle-hover))',
      'accent-orange-subtle-active': 'rgb(var(--background-accent-orange-subtle-active))',
      'accent-orange-base': 'rgb(var(--background-accent-orange-base))',
      'accent-orange-base-hover': 'rgb(var(--background-accent-orange-base-hover))',
      'accent-orange-base-active': 'rgb(var(--background-accent-orange-base-active))',
      'accent-orange-bold': 'rgb(var(--background-accent-orange-bold))',
      'accent-orange-bold-hover': 'rgb(var(--background-accent-orange-bold-hover))',
      'accent-orange-bold-active': 'rgb(var(--background-accent-orange-bold-active))',

      'accent-purple-subtlest': 'rgb(var(--background-accent-purple-subtlest))',
      'accent-purple-subtlest-hover': 'rgb(var(--background-accent-purple-subtlest-hover))',
      'accent-purple-subtlest-active': 'rgb(var(--background-accent-purple-subtlest-active))',
      'accent-purple-subtler': 'rgb(var(--background-accent-purple-subtler))',
      'accent-purple-subtler-hover': 'rgb(var(--background-accent-purple-subtler-hover))',
      'accent-purple-subtler-active': 'rgb(var(--background-accent-purple-subtler-active))',
      'accent-purple-subtle': 'rgb(var(--background-accent-purple-subtle))',
      'accent-purple-subtle-hover': 'rgb(var(--background-accent-purple-subtle-hover))',
      'accent-purple-subtle-active': 'rgb(var(--background-accent-purple-subtle-active))',
      'accent-purple-base': 'rgb(var(--background-accent-purple-base))',
      'accent-purple-base-hover': 'rgb(var(--background-accent-purple-base-hover))',
      'accent-purple-base-active': 'rgb(var(--background-accent-purple-base-active))',
      'accent-purple-bold': 'rgb(var(--background-accent-purple-bold))',
      'accent-purple-bold-hover': 'rgb(var(--background-accent-purple-bold-hover))',
      'accent-purple-bold-active': 'rgb(var(--background-accent-purple-bold-active))',

      'accent-magenta-subtlest': 'rgb(var(--background-accent-magenta-subtlest))',
      'accent-magenta-subtlest-hover': 'rgb(var(--background-accent-magenta-subtlest-hover))',
      'accent-magenta-subtlest-active': 'rgb(var(--background-accent-magenta-subtlest-active))',
      'accent-magenta-subtler': 'rgb(var(--background-accent-magenta-subtler))',
      'accent-magenta-subtler-hover': 'rgb(var(--background-accent-magenta-subtler-hover))',
      'accent-magenta-subtler-active': 'rgb(var(--background-accent-magenta-subtler-active))',
      'accent-magenta-subtle': 'rgb(var(--background-accent-magenta-subtle))',
      'accent-magenta-subtle-hover': 'rgb(var(--background-accent-magenta-subtle-hover))',
      'accent-magenta-subtle-active': 'rgb(var(--background-accent-magenta-subtle-active))',
      'accent-magenta-base': 'rgb(var(--background-accent-magenta-base))',
      'accent-magenta-base-hover': 'rgb(var(--background-accent-magenta-base-hover))',
      'accent-magenta-base-active': 'rgb(var(--background-accent-magenta-base-active))',
      'accent-magenta-bold': 'rgb(var(--background-accent-magenta-bold))',
      'accent-magenta-bold-hover': 'rgb(var(--background-accent-magenta-bold-hover))',
      'accent-magenta-bold-active': 'rgb(var(--background-accent-magenta-bold-active))'
    },
    textColor: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',

      base: 'rgb(var(--text-base))',
      'base-subtle': 'rgb(var(--text-base-subtle))',
      'base-subtler': 'rgb(var(--text-base-subtler))',
      'base-inverted': 'rgb(var(--text-base-inverted))',
      'base-subtle-inverted': 'rgb(var(--text-base-subtle-inverted))',
      'base-subtler-inverted': 'rgb(var(--text-base-subtler-inverted))',
      selectable: 'rgb(var(--text-selectable))',
      'selectable-hover': 'rgb(var(--text-selectable-hover))',
      'selected-primary': 'rgb(var(--text-selected-primary))',
      'selected-base': 'rgb(var(--text-selected-base))',
      'selected-inverted': 'rgb(var(--text-selected-inverted))',
      'link-subtle': 'rgb(var(--text-link-subtle))',
      'link-subtle-active': 'rgb(var(--text-link-subtle-active))',
      'link-base': 'rgb(var(--text-link-base))',
      'link-base-active': 'rgb(var(--text-link-base-active))',
      details: 'rgb(var(--text-details))',
      'details-subtle': 'rgb(var(--text-details-subtle))',

      'base-fixed': 'rgb(var(--text-base-fixed))',
      'base-subtle-fixed': 'rgb(var(--text-base-subtle-fixed))',
      'base-subtler-fixed': 'rgb(var(--text-base-subtler-fixed))',
      'base-inverted-fixed': 'rgb(var(--text-base-inverted-fixed))',
      'base-subtle-inverted-fixed': 'rgb(var(--text-base-subtle-inverted-fixed))',
      'base-subtler-inverted-fixed': 'rgb(var(--text-base-subtler-inverted-fixed))',

      'selectable-fixed': 'rgb(var(--text-selectable-fixed))',
      'selected-inverted-fixed': 'rgb(var(--text-selected-inverted-fixed))',

      'primary-base': 'rgb(var(--text-primary-base))',
      'primary-bold': 'rgb(var(--text-primary-bold))',
      'secondary-base': 'rgb(var(--text-secondary-base))',
      'secondary-bold': 'rgb(var(--text-secondary-bold))',
      'info-base': 'rgb(var(--text-info-base))',
      'info-bold': 'rgb(var(--text-info-bold))',
      'success-base': 'rgb(var(--text-success-base))',
      'success-bold': 'rgb(var(--text-success-bold))',
      'warning-base': 'rgb(var(--text-warning-base))',
      'warning-bold': 'rgb(var(--text-warning-bold))',
      'danger-base': 'rgb(var(--text-danger-base))',
      'danger-bold': 'rgb(var(--text-danger-bold))',

      'accent-blue-base': 'rgb(var(--text-accent-blue-base))',
      'accent-blue-bold': 'rgb(var(--text-accent-blue-bold))',
      'accent-green-base': 'rgb(var(--text-accent-green-base))',
      'accent-green-bold': 'rgb(var(--text-accent-green-bold))',
      'accent-yellow-base': 'rgb(var(--text-accent-yellow-base))',
      'accent-yellow-bold': 'rgb(var(--text-accent-yellow-bold))',
      'accent-red-base': 'rgb(var(--text-accent-red-base))',
      'accent-red-bold': 'rgb(var(--text-accent-red-bold))',
      'accent-teal-base': 'rgb(var(--text-accent-teal-base))',
      'accent-teal-bold': 'rgb(var(--text-accent-teal-bold))',
      'accent-orange-base': 'rgb(var(--text-accent-orange-base))',
      'accent-orange-bold': 'rgb(var(--text-accent-orange-bold))',
      'accent-purple-base': 'rgb(var(--text-accent-purple-base))',
      'accent-purple-bold': 'rgb(var(--text-accent-purple-bold))',
      'accent-magenta-base': 'rgb(var(--text-accent-magenta-base))',
      'accent-magenta-bold': 'rgb(var(--text-accent-magenta-bold))',

      'icon-base': 'rgb(var(--icon-base))',
      'icon-base-subtle': 'rgb(var(--icon-base-subtle))',
      'icon-base-subtler': 'rgb(var(--icon-base-subtler))',
      'icon-primary': 'rgb(var(--icon-primary))',
      'icon-secondary': 'rgb(var(--icon-secondary))',
      'icon-info': 'rgb(var(--icon-info))',
      'icon-success': 'rgb(var(--icon-success))',
      'icon-warning': 'rgb(var(--icon-warning))',
      'icon-danger': 'rgb(var(--icon-danger))',
      'icon-inverted': 'rgb(var(--icon-inverted))',
      'icon-selected': 'rgb(var(--icon-selected))',
      'icon-inverted-fixed': 'rgb(var(--icon-inverted-fixed))',

      'icon-accent-blue': 'rgb(var(--icon-accent-blue))',
      'icon-accent-green': 'rgb(var(--icon-accent-green))',
      'icon-accent-yellow': 'rgb(var(--icon-accent-yellow))',
      'icon-accent-red': 'rgb(var(--icon-accent-red))',
      'icon-accent-teal': 'rgb(var(--icon-accent-teal))',
      'icon-accent-orange': 'rgb(var(--icon-accent-orange))',
      'icon-accent-purple': 'rgb(var(--icon-accent-purple))',
      'icon-accent-magenta': 'rgb(var(--icon-accent-magenta))'
    },
    outlineColor: {
      transparent: 'transparent',

      'base-subtle': 'rgb(var(--border-base-subtle))',
      'base-subtle-hover': 'rgb(var(--border-base-subtle-hover))',
      base: 'rgb(var(--border-base))',
      'base-hover': 'rgb(var(--border-base-hover))',
      'base-bold': 'rgb(var(--border-base-bold))',
      'base-bold-hover': 'rgb(var(--border-base-bold-hover))',
      input: 'rgb(var(--border-input))',
      focus: 'rgb(var(--border-focus))',
      inverted: 'rgb(var(--border-inverted))',
      info: 'rgb(var(--border-info))',
      success: 'rgb(var(--border-success))',
      warning: 'rgb(var(--border-warning))',
      danger: 'rgb(var(--border-danger))',
      selected: 'rgb(var(--border-selected))',
      selectable: 'rgb(var(--border-selectable))',

      'accent-blue': 'rgb(var(--border-accent-blue))',
      'accent-green': 'rgb(var(--border-accent-green))',
      'accent-yellow': 'rgb(var(--border-accent-yellow))',
      'accent-red': 'rgb(var(--border-accent-red))',
      'accent-teal': 'rgb(var(--border-accent-teal))',
      'accent-orange': 'rgb(var(--border-accent-orange))',
      'accent-purple': 'rgb(var(--border-accent-purple))',
      'accent-magenta': 'rgb(var(--border-accent-magenta))'
    },
    borderColor: {
      transparent: 'transparent',
      'base-subtle': 'rgb(var(--border-base-subtle))',
      'base-subtle-hover': 'rgb(var(--border-base-subtle-hover))',
      base: 'rgb(var(--border-base))',
      'base-hover': 'rgb(var(--border-base-hover))',
      'base-bold': 'rgb(var(--border-base-bold))',
      'base-bold-hover': 'rgb(var(--border-base-bold-hover))',
      input: 'rgb(var(--border-input))',
      focus: 'rgb(var(--border-focus))',
      inverted: 'rgb(var(--border-inverted))',
      info: 'rgb(var(--border-info))',
      success: 'rgb(var(--border-success))',
      warning: 'rgb(var(--border-warning))',
      danger: 'rgb(var(--border-danger))',
      selected: 'rgb(var(--border-selected))',
      selectable: 'rgb(var(--border-selectable))',

      'accent-blue': 'rgb(var(--border-accent-blue))',
      'accent-green': 'rgb(var(--border-accent-green))',
      'accent-yellow': 'rgb(var(--border-accent-yellow))',
      'accent-red': 'rgb(var(--border-accent-red))',
      'accent-teal': 'rgb(var(--border-accent-teal))',
      'accent-orange': 'rgb(var(--border-accent-orange))',
      'accent-purple': 'rgb(var(--border-accent-purple))',
      'accent-magenta': 'rgb(var(--border-accent-magenta))'
    },
    ringColor: {
      transparent: 'transparent',
      base: 'rgb(var(--border-focus))'
    },
    zIndex: {
      auto: 'auto',
      hidden: '-9999',
      0: '0',
      100: '100',
      150: '150',
      200: '200',
      250: '250',
      300: '300',
      350: '350',
      400: '400',
      450: '450',
      500: '500',
      550: '550',
      600: '600',
      650: '650',
      700: '700',
      750: '750',
      800: '800',
      850: '850',
      900: '900',
      950: '950',
      1000: '1000'
    },
    extend: {
      gradientColorStops: {
        'gradient-base-subtle': 'rgb(var(--background-gradient-subtle))',
        'gradient-base-bold': 'rgb(var(--background-gradient-bold))',

        'gradient-primary-subtle': 'rgb(var(--background-gradient-color-subtle))',
        'gradient-primary-base': 'rgb(var(--background-gradient-color-base))',
        'gradient-primary-bold': 'rgb(var(--background-gradient-color-bold))',

        'blanket-start': 'var(--background-blanket-start)',
        'blanket-stop': 'var(--background-blanket-stop)'
      },
      backgroundColor: {
        details: 'rgb(var(--background-details))',
        input: 'rgb(var(--background-input))',
        'input-subtle': 'rgb(var(--background-input-subtle))',
        selectable: 'rgb(var(--background-selectable))',
        'selectable-hover': 'rgb(var(--background-selectable-hover))',
        'selectable-active': 'rgb(var(--background-selectable-active))',
        selected: 'rgb(var(--background-selected))',
        'selected-hover': 'rgb(var(--background-selected-hover))',
        'selected-active': 'rgb(var(--background-selected-active))',
        'selected-inverted': 'rgb(var(--background-selected-inverted))',
        'selected-inverted-hover': 'rgb(var(--background-selected-inverted-hover))',
        'selected-inverted-active': 'rgb(var(--background-selected-inverted-active))',

        scrollbar: 'rgb(var(--background-scrollbar))',
        'scrollbar-thumb': 'rgb(var(--background-scrollbar-thumb))',
        'scrollbar-thumb-hover': 'rgb(var(--background-scrollbar-thumb-hover))',
        'scrollbar-thumb-active': 'rgb(var(--background-scrollbar-thumb-active))',
        'blanket-base': 'var(--background-blanket-base)',

        'chart-base': 'rgb(var(--background-chart-base))',
        'chart-base-bold': 'rgb(var(--background-chart-base-bold))',
        'chart-primary': 'rgb(var(--background-chart-primary))',
        'chart-primary-bold': 'rgb(var(--background-chart-primary-bold))',
        'chart-secondary': 'rgb(var(--background-chart-secondary))',
        'chart-secondary-bold': 'rgb(var(--background-chart-secondary-bold))',
        'chart-info': 'rgb(var(--background-chart-info))',
        'chart-info-bold': 'rgb(var(--background-chart-info-bold))',
        'chart-success': 'rgb(var(--background-chart-success))',
        'chart-success-bold': 'rgb(var(--background-chart-success-bold))',
        'chart-warning': 'rgb(var(--background-chart-warning))',
        'chart-warning-bold': 'rgb(var(--background-chart-warning-bold))',
        'chart-danger': 'rgb(var(--background-chart-danger))',
        'chart-danger-bold': 'rgb(var(--background-chart-danger-bold))',

        'chart-categorial-1-base': 'rgb(var(--background-chart-categorial-1-base))',
        'chart-categorial-1-bold': 'rgb(var(--background-chart-categorial-1-bold))',
        'chart-categorial-2-base': 'rgb(var(--background-chart-categorial-1-base))',
        'chart-categorial-2-bold': 'rgb(var(--background-chart-categorial-1-bold))',
        'chart-categorial-3-base': 'rgb(var(--background-chart-categorial-3-base))',
        'chart-categorial-3-bold': 'rgb(var(--background-chart-categorial-3-bold))',
        'chart-categorial-4-base': 'rgb(var(--background-chart-categorial-4-base))',
        'chart-categorial-4-bold': 'rgb(var(--background-chart-categorial-4-bold))',
        'chart-categorial-5-base': 'rgb(var(--background-chart-categorial-5-base))',
        'chart-categorial-5-bold': 'rgb(var(--background-chart-categorial-5-bold))',
        'chart-categorial-6-base': 'rgb(var(--background-chart-categorial-6-base))',
        'chart-categorial-6-bold': 'rgb(var(--background-chart-categorial-6-bold))',
        'chart-categorial-7-base': 'rgb(var(--background-chart-categorial-7-base))',
        'chart-categorial-7-bold': 'rgb(var(--background-chart-categorial-7-bold))',
        'chart-categorial-8-base': 'rgb(var(--background-chart-categorial-8-base))',
        'chart-categorial-8-bold': 'rgb(var(--background-chart-categorial-8-bold))'
      },
      margin: {
        heading: 'var(--typography-vs-heading)',
        body: 'var(--typography-vs-body)'
      },
      maxWidth: {
        'prose-sm': '45ch',
        'prose-base': '65ch',
        'prose-lg': '85ch'
      },
      opacity: {
        disabled: 'var(--opacity-disabled)',
        loading: 'var(--opacity-loading)'
      }
    }
  },

  plugins: [animate, animated]
} satisfies Config

export default config

