// theme.config.js
export default {
  github: 'https://github.com/qsd-finance', // link of the project repo
  siteGithub: 'https://github.com/qsd-finance/dollar-docs', // link of the docs repo path
  titleSuffix: ' – Quantum Set Dollar',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 ©',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">
        Quantum Set Dollar
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Experimental Stablecoin Protocol
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Docs for Quantum Set Dollar, an experimental stablecoin compatible with DeFi applications"
      />
      <meta
        name="og:description"
        content="Docs for Quantum Set Dollar, an experimental stablecoin compatible with DeFi applications"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta name="og:title" content="Quantum Set Dollar - Documentation" />
      <meta
        name="apple-mobile-web-app-title"
        content="Quantum Set Dollar - Documentation"
      />
    </React.Fragment>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '简体中文' },
  ],
}
