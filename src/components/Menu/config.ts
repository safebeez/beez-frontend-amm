import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '../',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange HNY',
        href: '?outputCurrency=0x5FFa2807F9A8b762eDeEab4ca37211Ca3117df8A',
      },
      {
        label: 'Exchange BEEZ',
        href: '?outputCurrency=0xa427ab59ee9e4c6a65401fe689991ad93e42b51a',
      },
      {
        label: 'Liquidity: HNY',
        href: '#/add/0x5FFa2807F9A8b762eDeEab4ca37211Ca3117df8A',
      },
      {
        label: 'Liquidity: BEEZ',
        href: '#/add/0xa427ab59ee9e4c6a65401fe689991ad93e42b51a',
      },
    ],
  },
  {
    label: 'Honeycomb',
    icon: 'FarmIcon',
    href: '/honeycomb',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'HNY on PancakeSwap',
        href: 'https://pancakeswap.info/token/0x5FFa2807F9A8b762eDeEab4ca37211Ca3117df8A',
      },
      {
        label: 'BEEZ on PancakeSwap',
        href: 'https://pancakeswap.info/token/0xa427ab59ee9e4c6a65401fe689991ad93e42b51a',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      }, */
    ],
  },
/*   {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://goosedefi.gitbook.io/goose-finance/',
      }
    ],
  }, */
  {
    label: 'Partnership?',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Apply Here',
        href: 'https://github.com/goosedefi/',
      },
      {
        label: 'Info',
        href: 'https://github.com/goosedefi/g',
      },
    ],
  },
]

export default config
