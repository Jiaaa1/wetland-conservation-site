import './globals.css'
import Link from 'next/link'
import { Button } from '../components/ui/button'

export const metadata = {
  title: "Jiayi Liu’s Wetland Conservation Programme",
  description: "A multimodal website exploring ecology, policy, and community efforts in wetland protection."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-green-100 p-4 shadow mb-6">
           <div className="max-w-5xl mx-auto flex space-x-4">
             <Link href="/"><Button>Home</Button></Link>
             <Link href="/wetlands"><Button>General Wetlands</Button></Link>
             <Link href="/about"><Button>About This Project</Button></Link>
             <Link href="/services"><Button>Environmental Services</Button></Link>
             <Link href="/laws"><Button>Global Conservation Laws</Button></Link>
             <Link href="/community"><Button>Local Community Involvement</Button></Link>
             <Link href="/feedback"><Button>Public Survey & Feedback</Button></Link>
           </div>
         </nav>
         {children}
      </body>
    </html>
  )
}
