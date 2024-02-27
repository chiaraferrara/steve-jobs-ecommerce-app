
import type { AppProps } from "next/app";
import { ContextProvider } from "../ContextProvider";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "../ContextProvider";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </ContextProvider>
    </Provider>
  );
}
