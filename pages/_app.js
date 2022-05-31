import "../styles/globals.css";
import { SearchProvider } from "../utils/context/search";

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default MyApp;
