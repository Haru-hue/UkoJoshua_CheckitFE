import { store } from "@/store";
import "@/styles/globals.css";
import Head from "next/head";
import { PrimeReactProvider } from "primereact/api"
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});
export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Head>
      <title>Uko Joshua - Checkit Frontend Assessment</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </PrimeReactProvider>
  );
}
