import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Remote Component Exposer App</h1>
      <p>This app exposes remote components.</p>
      <ul>
        <li>
          <Link href="/components/hello-world">
            View Hello World Remote Component
          </Link>
        </li>
      </ul>
    </div>
  );
}