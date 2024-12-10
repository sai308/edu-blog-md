export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Educational blog',
      description:
        'Educational blog platform designed for computer science courses',
      ogImage: '/hero.png',
      ogImageComponent: 'ShadcnDocs',
      ogImageColor: 'dark',
    },
    banner: {
      enable: false,
      showClose: true,
      content: 'Welcome to **shadcn-docs-nuxt**',
      to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      target: '_blank',
      border: true,
    },
    pages: {
      isolated: ['/about', '/contacts'],
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: `Комп'ютерні науки`,
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        { title: 'Головна', to: '/' },
        {
          title: 'Курси',
          links: [
            {
              title: 'Операційні системи',
              icon: 'lucide:monitor-cog',
              to: '/os/overview',
            },
            {
              title: 'Розробка додатків КСА',
              icon: 'lucide:server-cog',
              to: '/client-server-architecture/overview',
            },
          ],
        },
        {
          title: 'Інше',
          links: [
            { title: 'Про ресурс', to: '/about' },
            {
              title: 'Контакти',
              icon: 'lucide:contact',
              to: '/contacts',
            },
          ],
        },
      ],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'default',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      padded: true,
      codeCopyToast: true,
      editLink: {
        enable: true,
        pattern:
          'https://github.com/sai308/edu-blog-md/edit/main/content/:path',
        text: 'Edit this page',
        icon: 'lucide:square-pen',
        placement: ['docsFooter', 'toc'],
      },
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        nuxt: 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        vue: 'vscode-icons:file-type-vue',
        ts: 'vscode-icons:file-type-typescript',
        tsx: 'vscode-icons:file-type-typescript',
        mjs: 'vscode-icons:file-type-js',
        cjs: 'vscode-icons:file-type-js',
        js: 'vscode-icons:file-type-js',
        jsx: 'vscode-icons:file-type-js',
        md: 'vscode-icons:file-type-markdown',
        mdc: 'vscode-icons:file-type-markdown',
        py: 'vscode-icons:file-type-python',
        npm: 'vscode-icons:file-type-npm',
        pnpm: 'vscode-icons:file-type-pnpm',
        npx: 'vscode-icons:file-type-npm',
        yarn: 'vscode-icons:file-type-yarn',
        bun: 'vscode-icons:file-type-bun',
        yml: 'vscode-icons:file-type-yaml',
        json: 'vscode-icons:file-type-json',
        terminal: 'lucide:terminal',
      },
    },
    footer: {
      credits: 'Made by [**sai308**](https://github.com/sai308/)',
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/sai308/edu-blog-md',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'На цій сторінці',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/sai308/edu-blog-md',
          target: '_blank',
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/sai308/edu-blog-md/issues',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
