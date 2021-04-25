import { useDispatch } from "react-redux";
import { updateUserData } from "../../Stores/UserData/slice";

export const Ethereum = window.ethereum;

export const useMetamaskConnection = () => {
  const dispatch = useDispatch();
  const connectWallet = async () => {
    if (Ethereum) {
      //check if Metamask is installed
      try {
        const address = await Ethereum.enable(); //connect Metamask
        const obj = {
          connectedStatus: true,
          status: "",
          address: address[0],
        };
        return dispatch(updateUserData({ ...obj }));
      } catch (error) {
        return {
          connectedStatus: false,
          status: "🦊 Connect to Metamask using the button provided.",
        };
      }
    } else {
      return {
        connectedStatus: false,
        status:
          "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
      };
    }
  };

  return { connectWallet };
};
