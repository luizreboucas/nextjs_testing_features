import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <h6 className="mb-10"><span className="font-bold text-white pt-4 pb-4 pr-8 pl-8  bg-blue-500 rounded-lg shadow-lg">Teste de renderização</span></h6>
      <Link href={"/sobre"}> sobre nós</Link>
      <Link href={'/users'}>users</Link>
    </main>
  );
}
