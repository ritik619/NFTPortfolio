import "xp.css/dist/XP.css";

import { Button, Typography } from "@mui/material";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import MainScreen from "../src/components/MainScreen";
import MenuBar from "../src/components/MenuBar";
import Navbar from "../src/components/Navbar";
const Home: React.FC = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <>
      <Navbar />
      <MenuBar />
      <MainScreen />
      <Typography variant="h5">NFTPortfolio</Typography>
      {address && (
        <Button variant="outlined" onClick={disconnectWallet}>
          Disconnect
        </Button>
      )}
      {!address && (
        <Button variant="outlined" onClick={connectWithMetamask}>
          Connect
        </Button>
      )}
    </>
  );
};

export default Home;
