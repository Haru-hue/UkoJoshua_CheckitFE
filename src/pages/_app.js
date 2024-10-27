import { store } from "@/store";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
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
    <ThemeProvider attribute="class">
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </QueryClientProvider>
      </PrimeReactProvider>
    </ThemeProvider>
  );
}
