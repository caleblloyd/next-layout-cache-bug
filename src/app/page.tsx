import Link from "next/link";

export default function Home() {
  return <>
    <div><Link href={`/now`} className="text-blue-500">Now Page</Link></div>
    <h1>This is the Home Page</h1>
  </>
}
