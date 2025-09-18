/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        background: 'var(--color-background)',
        grey: {
          900: 'var(--color-grey-900)',
          800: 'var(--color-grey-800)',
          700: 'var(--color-grey-700)',
          600: 'var(--color-grey-600)',
          500: 'var(--color-grey-500)',
          400: 'var(--color-grey-400)',
          300: 'var(--color-grey-300)',
          200: 'var(--color-grey-200)',
          100: 'var(--color-grey-100)',
          50: 'var(--color-grey-50)',
        },
        blue: {
          900: 'var(--color-blue-900)',
          800: 'var(--color-blue-800)',
          700: 'var(--color-blue-700)',
          600: 'var(--color-blue-600)',
          500: 'var(--color-blue-500)',
          400: 'var(--color-blue-400)',
          300: 'var(--color-blue-300)',
          200: 'var(--color-blue-200)',
          100: 'var(--color-blue-100)',
          50: 'var(--color-blue-50)',
        },
        green: {
          900: 'var(--color-green-900)',
          800: 'var(--color-green-800)',
          700: 'var(--color-green-700)',
          600: 'var(--color-green-600)',
          500: 'var(--color-green-500)',
          400: 'var(--color-green-400)',
          300: 'var(--color-green-300)',
          200: 'var(--color-green-200)',
          100: 'var(--color-green-100)',
          50: 'var(--color-green-50)',
        },
      },
      spacing: {
        0: 'var(--spacing-0)',
        2: 'var(--spacing-2)',
        4: 'var(--spacing-4)',
        8: 'var(--spacing-8)',
        12: 'var(--spacing-12)',
        16: 'var(--spacing-16)',
        20: 'var(--spacing-20)',
        24: 'var(--spacing-24)',
        28: 'var(--spacing-28)',
        32: 'var(--spacing-32)',
        36: 'var(--spacing-36)',
        40: 'var(--spacing-40)',
        48: 'var(--spacing-48)',
        60: 'var(--spacing-60)',
        64: 'var(--spacing-64)',
        80: 'var(--spacing-80)',
        100: 'var(--spacing-100)',
      },
      borderRadius: {
        0: 'var(--radius-0)',
        2: 'var(--radius-2)',
        4: 'var(--radius-4)',
        8: 'var(--radius-8)',
        10: 'var(--radius-10)',
        12: 'var(--radius-12)',
        16: 'var(--radius-16)',
        20: 'var(--radius-20)',
        24: 'var(--radius-24)',
        28: 'var(--radius-28)',
        32: 'var(--radius-32)',
        40: 'var(--radius-40)',
        80: 'var(--radius-80)',
      },
      fontSize: {
        'heading-1-bold': [
          'var(--font-heading-1-bold-size)',
          {
            lineHeight: 'var(--font-heading-1-bold-line-height)',
            letterSpacing: 'var(--font-heading-1-bold-letter-spacing)',
            fontWeight: 'var(--font-heading-1-bold-weight)',
          },
        ],
        'heading-1-semibold': [
          'var(--font-heading-1-semibold-size)',
          {
            lineHeight: 'var(--font-heading-1-semibold-line-height)',
            letterSpacing: 'var(--font-heading-1-semibold-letter-spacing)',
            fontWeight: 'var(--font-heading-1-semibold-weight)',
          },
        ],
        'heading-2-bold': [
          'var(--font-heading-2-bold-size)',
          {
            lineHeight: 'var(--font-heading-2-bold-line-height)',
            letterSpacing: 'var(--font-heading-2-bold-letter-spacing)',
            fontWeight: 'var(--font-heading-2-bold-weight)',
          },
        ],
        'heading-2-semibold': [
          'var(--font-heading-2-semibold-size)',
          {
            lineHeight: 'var(--font-heading-2-semibold-line-height)',
            letterSpacing: 'var(--font-heading-2-semibold-letter-spacing)',
            fontWeight: 'var(--font-heading-2-semibold-weight)',
          },
        ],
        'heading-3-semibold': [
          'var(--font-heading-3-semibold-size)',
          {
            lineHeight: 'var(--font-heading-3-semibold-line-height)',
            letterSpacing: 'var(--font-heading-3-semibold-letter-spacing)',
            fontWeight: 'var(--font-heading-3-semibold-weight)',
          },
        ],
        'subhead-1-semibold': [
          'var(--font-subhead-1-semibold-size)',
          {
            lineHeight: 'var(--font-subhead-1-semibold-line-height)',
            letterSpacing: 'var(--font-subhead-1-semibold-letter-spacing)',
            fontWeight: 'var(--font-subhead-1-semibold-weight)',
          },
        ],
        'subhead-2-medium': [
          'var(--font-subhead-2-medium-size)',
          {
            lineHeight: 'var(--font-subhead-2-medium-line-height)',
            letterSpacing: 'var(--font-subhead-2-medium-letter-spacing)',
            fontWeight: 'var(--font-subhead-2-medium-weight)',
          },
        ],
        'body-1-semibold': [
          'var(--font-body-1-semibold-size)',
          {
            lineHeight: 'var(--font-body-1-semibold-line-height)',
            letterSpacing: 'var(--font-body-1-semibold-letter-spacing)',
            fontWeight: 'var(--font-body-1-semibold-weight)',
          },
        ],
        'body-1-medium': [
          'var(--font-body-1-medium-size)',
          {
            lineHeight: 'var(--font-body-1-medium-line-height)',
            letterSpacing: 'var(--font-body-1-medium-letter-spacing)',
            fontWeight: 'var(--font-body-1-medium-weight)',
          },
        ],
        'body-2-semibold': [
          'var(--font-body-2-semibold-size)',
          {
            lineHeight: 'var(--font-body-2-semibold-line-height)',
            letterSpacing: 'var(--font-body-2-semibold-letter-spacing)',
            fontWeight: 'var(--font-body-2-semibold-weight)',
          },
        ],
        'body-2-medium': [
          'var(--font-body-2-medium-size)',
          {
            lineHeight: 'var(--font-body-2-medium-line-height)',
            letterSpacing: 'var(--font-body-2-medium-letter-spacing)',
            fontWeight: 'var(--font-body-2-medium-weight)',
          },
        ],
        'body-2-regular': [
          'var(--font-body-2-regular-size)',
          {
            lineHeight: 'var(--font-body-2-regular-line-height)',
            letterSpacing: 'var(--font-body-2-regular-letter-spacing)',
            fontWeight: 'var(--font-body-2-regular-weight)',
          },
        ],
        'caption-semibold': [
          'var(--font-caption-semibold-size)',
          {
            lineHeight: 'var(--font-caption-semibold-line-height)',
            letterSpacing: 'var(--font-caption-semibold-letter-spacing)',
            fontWeight: 'var(--font-caption-semibold-weight)',
          },
        ],
        'caption-medium': [
          'var(--font-caption-medium-size)',
          {
            lineHeight: 'var(--font-caption-medium-line-height)',
            letterSpacing: 'var(--font-caption-medium-letter-spacing)',
            fontWeight: 'var(--font-caption-medium-weight)',
          },
        ],
      },
    },
  },
  plugins: [],
};
