import { Button, Typography } from "@material-ui/core";
import * as React from "react";
import { useSelector } from "react-redux";
import { useMetamaskConnection } from "../../Components/Ethereum";
import { getWalletAddress } from "../../Stores/UserData/selector";
import { HomePageWrapper } from "./index.styles";

export const HomePage = () => {
  const { connectWallet } = useMetamaskConnection();
  const walletAddress = useSelector(getWalletAddress);
  return (
    <HomePageWrapper>
      <Typography>{`Wallet Address: ${walletAddress}`}</Typography>
      <Button onClick={() => connectWallet()}>Open Metamask</Button>
    </HomePageWrapper>
  );
};
