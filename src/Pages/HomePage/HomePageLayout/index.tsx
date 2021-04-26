import { Button, Typography } from '@material-ui/core'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getWalletAddress } from '../../../Stores/UserData/selector'
import { WALLET_CONNECT_POPUP } from '../routes'
import { HomePageWrapper } from './index.styles'

export const HomePageLayout = () => {
  const { push } = useHistory()
  const walletAddress = useSelector(getWalletAddress)
  return (
    <HomePageWrapper>
      <Typography>{`Wallet Address: ${walletAddress}`}</Typography>
      <Button onClick={() => push(WALLET_CONNECT_POPUP)}>
        Connect a wallet
      </Button>
    </HomePageWrapper>
  )
}
