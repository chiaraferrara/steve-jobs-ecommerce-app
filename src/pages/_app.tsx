
import type { AppProps } from "next/app";
import { ContextProvider } from "../ContextProvider";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import { store } from "../ContextProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); 


  return (
    <Provider store={store}>
    <ContextProvider>         
      <Navbar />
      <Component {...pageProps} />
      <Footer />      
    </ContextProvider>
    
    </Provider>
    
    
  );
}
