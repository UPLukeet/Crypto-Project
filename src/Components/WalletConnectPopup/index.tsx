import { Button, Dialog, DialogTitle } from '@material-ui/core'
import * as React from 'react'
import { useHistory } from 'react-router'
import { useMetamaskConnection } from '../Ethereum'

export const WalletConnectPopup = () => {
  const { goBack } = useHistory()
  const { connectWallet } = useMetamaskConnection()
  return (
    <Dialog onClose={() => goBack()} open={true}>
      <DialogTitle>Connect Wallet</DialogTitle>
      <Button onClick={() => connectWallet()}>Open Metamask</Button>
    </Dialog>
  )
}
