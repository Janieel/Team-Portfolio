import "./globals.css"
import Navbar from "@/Component/Navbar/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       
      <body>
        <Navbar/>
        {children}
       </body>
   </html>
  )
}
