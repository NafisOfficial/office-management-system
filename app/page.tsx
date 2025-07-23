import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex gap-5 justify-center items-center h-screen">
        <Link href="/login" className="text-blue-500 hover:underline" >Log in</Link>
        <Link href="/register" className="text-blue-500 hover:underline" >Sign Up</Link>
      </nav>
    </>
  );
}
