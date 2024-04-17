import AntDProvider from "@/providers/Antd";
import type { AppProps } from "next/app";
import 'antd/dist/reset.css';
import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AntDProvider>
      <Component {...pageProps} />
    </AntDProvider>
  );
}

