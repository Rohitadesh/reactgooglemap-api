import Layout from "@/pages/componets/Layout";
import "@/styles/globals.css";
import {} from '../../src/pages/componets/context/context'
import { ActiveLinkProvider } from "../../src/pages/componets/context/context";
export default function App({ Component, pageProps }) {
  return (
    <ActiveLinkProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ActiveLinkProvider>

)
}
