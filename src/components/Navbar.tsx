import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { Button, Grid, IconButton, Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Icon } from "@iconify/react";
import Image from "next/image";
const Navbar = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ backgroundColor: "rgb(61,0,238)" }}
    >
      <Stack
        justifyContent={"left"}
        direction="row"
        textAlign="center"
        alignItems="center"
      >
        <IconButton>
          <Image src="/XP/128x128/places/folder.png" height={28} width={28} />
        </IconButton>
        <Typography variant="h6" color="white" fontWeight="700" fontSize="16px">
          {address}
        </Typography>
      </Stack>
      <Stack justifyContent="flex-end" direction="row" spacing={0.2} m={0.2}>
        <IconButton
          sx={{
            backgroundColor: "rgb(61,0,238)",
            borderRadius: "5px",
            border: "1px solid white",
          }}
        >
          <MinimizeIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          sx={{
            transform: "rotate(270deg)",
            backgroundColor: "rgb(61,0,238)",
            borderRadius: "5px",
            border: "1px solid white",
          }}
        >
          <ContentCopyIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: "rgb(249,95,71)",
            borderRadius: "5px",
            border: "1px solid white",
          }}
        >
          
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Stack>

      {/* <Typography variant="h5">NFTPortfolio</Typography>
      {address && (
        <Button variant="outlined" onClick={disconnectWallet}>
          Disconnect
        </Button>
      )}
      {!address && (
        <Button variant="outlined" onClick={connectWithMetamask}>
          Connect
        </Button>
      )} */}
    </Stack>
  );
};

export default Navbar;
