import "../styles/globals.css";
// import "../i18n";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
