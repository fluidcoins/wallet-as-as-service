module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary: '#5D5FEF',
      primaryLight: '#E8E8FD',
      black: '#000000',
      grey: '#767676',
      lightGrey: '#C9D1D3',
      white: "#ffffff",
      secondary: '#465881',
      midnight: '#023E73',
      error: '#CF0808',
      whitesmoke: '#F6F7F9',
      success: '#17B978',
      successLight: '#D6FAEC',
      pendingLight: '#F8F9FB',
      pending: '#465881',
      errorLight: '#FEEBEB',
      modal: 'rgba(0, 0, 0, 0.2)',
      orange: '#FFA372',


      // coins
      bitcoinSolid: '#F7931A',
      bitcoinLight: '#FEF1E1',
      ethSolid: '#454A75',
      ethLight: '#E5E6F0',
      usdtSolid: '#1BA27A',
      usdtLight: '#E5FBF4',
      busdSolid: '#F0B90B',
      busdLight: '#FEFBF0',
      usdcSolid: '#2775CA',
      usdcLight: '#F2F7FD',
      xrpSolid: '#23292F',
      xrpLight: '#F3F5F6',
      ltcSolid: '#345D9D',
      ltcLight: '#DDE6F4',
      dogeLight: '#F2EBCF',
      dogeSolid: '#C2A633',
      tronLight: '#DBDDDE',
      tronSolid: '#020100'

    },
    boxShadow: {
      navbar: '0px 0px 2px rgba(0, 0, 0, 0.15)',
      defaultNavbar: '5px 0px 1px #000000',
      info: '0px 0px 0px 2px rgba(3, 90, 166, 0.25)',
      tableMenu: '0px 0px 0px 2px rgba(3, 90, 166, 0.25)',
      secondaryButton: '0px 0px 0px 2px rgba(3, 90, 166, 0.25)',
      modal: '0px 0px 0px 2px rgba(3, 90, 166, 0.25)',
      error: '0px 0px 0px 2px rgba(3, 90, 166, 0.25)',
      primary: '0px 0px 0px 2px rgba(3, 90, 166, 0.25)'
    },
    extend: {
      spacing: {
        '84': '22rem'
      },
      fontSize: {
        '3.5xl': '1.9375rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}