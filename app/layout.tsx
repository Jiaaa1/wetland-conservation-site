import './globals.css'

export const metadata = {
  title: "Jiayi Liu’s Wetland Conservation Programme",
  description: "A multimodal website exploring ecology, policy, and community efforts in wetland protection."
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
