
import Header from "../components/Header";
import TransitionEffect from "../components/TransitionEffect";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <TransitionEffect>
        <Component {...pageProps} />
      </TransitionEffect>
    </>
  );
}
