import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { WalletConnectPopup } from '../../Components/WalletConnectPopup'
import { HomePageLayout } from './HomePageLayout'
import { HOME_PAGE_LAYOUT_ROUTE, WALLET_CONNECT_POPUP } from './routes'

export const HomePage = () => {
  return (
    <>
      <Switch>
        <Route path={HOME_PAGE_LAYOUT_ROUTE} component={HomePageLayout} />
        <Redirect to={HOME_PAGE_LAYOUT_ROUTE} />
      </Switch>
      <Route path={WALLET_CONNECT_POPUP} component={WalletConnectPopup} />
    </>
  )
}
