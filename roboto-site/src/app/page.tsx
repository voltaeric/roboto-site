import Link from 'next/link'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Navbar />
          <div className="flex min-h-screen flex-col items-center justify-center">
            {/*<SidebarNavigation />*/}
            <h1 className="text-4xl font-bold mb-8">Welcome back...you fucking MUPPET...r</h1>
            <p className="text-xl mb-8">please  take care of yourself a little more..and finish this already</p>
            <Link href="/auth/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Link>
          </div>
    </main>
  )
}