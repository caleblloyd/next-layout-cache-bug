import {ReactNode} from "react"
import Link from "next/link";

export const dynamic = 'force-dynamic'

async function LoadData(props: { children: ReactNode }) {
  const response = await fetch(`http://localhost:3000/api`)
  const data = await response.json() as { now: number }
  return <>
    {props.children}
    <div>Got API Response at {data.now}</div>
  </>
}

export default async function Layout(props: { children: ReactNode }) {
  return <>
    <div><Link href={`/`} className="text-blue-500">Home Page</Link></div>
    <LoadData>{props.children}</LoadData>
  </>
}
