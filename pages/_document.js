import { Html, Head, Main, NextScript } from 'next/document'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistedstore } from "../States/Store";



export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
