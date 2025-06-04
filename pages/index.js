import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My React App</h1>
      <p>This is the home page for Assignment 1</p>

      <nav style={{ marginTop: '20px' }}>
        <Link href="/about"><button>About</button></Link>
        <Link href="/counter"><button>Counter</button></Link>
      </nav>
    </div>
  );
}
