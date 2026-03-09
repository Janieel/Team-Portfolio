import "./globals.css"
import Navbar from "@/Component/Navbar/Navbar"
import Footer from "@/Component/Footer/Footer"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       
      <body>
         <div className="orb-global orb-1"></div>
        <div className="orb-global orb-2"></div>
        <div className="orb-global orb-3"></div>

        <Navbar/>
        {children}
        <Footer/>
       </body>
   </html>
  )
}
