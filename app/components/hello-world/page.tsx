import { RemoteComponent } from 'remote-components/next';

export default function HelloWorldPage() {
  return (
    <RemoteComponent>
      <h1>Hello from a Remote Component (App Router)</h1>
      <p>This component is served from expose-rc using App Router!</p>
    </RemoteComponent>
  );
}