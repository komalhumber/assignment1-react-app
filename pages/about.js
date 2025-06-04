import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About This App</h2>
      <p>This app demonstrates basic React features for my assignment.</p>
      <Link href="/"><button>Go Home</button></Link>
    </div>
  );
}
