import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './index.css'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;
const theme = createTheme({
  palette: {
    primary: {
      main: "#3B77BC",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
