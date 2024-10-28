import { store } from "@/store";
import "@/styles/globals.css";
import Head from "next/head";
import { PrimeReactProvider } from "primereact/api"
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Head>
      <title>Uko Joshua - Checkit Frontend Assessment</title>
      </Head>
      <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </PrimeReactProvider>
  );
}
