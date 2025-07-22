import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex gap-5 justify-center items-center h-screen">
        <Link href="/login" className="text-blue-500 hover:underline" >login</Link>
        <Link href="/register" className="text-blue-500 hover:underline" >register</Link>
      </nav>
    </>
  );
}
