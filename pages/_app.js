import "../styles/globals.css";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
