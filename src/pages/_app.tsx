import type { AppType } from "next/app";
import { Roboto } from "next/font/google";
import { GlobalStyle } from "./global.styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const roboto = Roboto({
  subsets: ["latin"],
});

const queryClient = new QueryClient();

const App: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle style={roboto.style} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
