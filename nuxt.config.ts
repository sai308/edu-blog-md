import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@nuxthq/studio',
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: join(currentDir, './components/ui'),
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  colorMode: {
    classSuffix: '',
    disableTransition: true,
  },
  css: [join(currentDir, './assets/css/themes.css')],
  content: {
    documentDriven: true,
    markdown: {
      // Object syntax can be used to override default options
      remarkPlugins: {},
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'diff',
        'shell',
        'markdown',
        'yaml',
        'bash',
      ],
    },
    navigation: {
      fields: [
        'icon',
        'navBadges',
        'navTruncate',
        'badges',
        'toc',
        'sidebar',
        'collapse',
        'editLink',
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/os/overview',
        '/client-server-architecture/overview',
        '/about',
        '/contacts',
      ],
    },
  },

  icon: {
    // provider: 'iconify',
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },
  build: {
    transpile: ['shiki'],
  },
  compatibilityDate: '2024-07-05',
});
