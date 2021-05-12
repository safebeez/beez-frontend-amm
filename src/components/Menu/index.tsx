import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import {useGetPriceData, useGetBeezPriceData} from 'hooks/useGetPriceData'
import { injected, bsc, walletconnect } from 'connectors'
import links from './config'

const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = useGetPriceData()
  const beezPriceUsd = useGetBeezPriceData()

  return (
    <UikitMenu
      links={links}
      priceLink="https://poocoin.app/tokens/0x5FFa2807F9A8b762eDeEab4ca37211Ca3117df8A"
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      beePriceUsd={beezPriceUsd}
      cakePriceUsd={cakePriceUsd}
      beePriceLink="https://poocoin.app/tokens/0xa427ab59ee9e4c6a65401fe689991ad93e42b51a"
      {...props}
    />
  )
}

export default Menu
