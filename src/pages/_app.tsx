import '@/styles/globals.css';
import {
  getRemoteComponentMetadata,
  type RemoteComponentMetadata,
} from 'remote-components/next/remote/pages-router';
import App from 'next/app';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<RemoteComponentMetadata & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  return { ...ctx, ...getRemoteComponentMetadata() };
};