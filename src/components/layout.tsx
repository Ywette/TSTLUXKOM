"use client"
import { Header } from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <div className="flex-grow">
        {children}
      </div> */}
      <main className="flex-1 mt-[132px]"> {/* flex-1 will make it take remaining space */}
        {children}
      </main>
    </div>
  )
}