import Counter from '../components/Counter';
import Greeting from '../components/Greeting';
import Toggle from '../components/Toggle';
import Link from 'next/link';

export default function CounterPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React Features Demo</h2>

      <Greeting name="Student" />
      <Counter />
      <Toggle />

      <Link href="/"><button>Go Home</button></Link>
    </div>
  );
}
