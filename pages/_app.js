import "../styles/globals.css";
import { SearchProvider } from "../utils/context/search";
import { VideoProvider } from "../utils/context/Video";

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <VideoProvider>
        <Component {...pageProps} />
      </VideoProvider>
    </SearchProvider>
  );
}

export default MyApp;
