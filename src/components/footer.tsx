import Image from "next/image"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

const Footer = () => {

  const navLinks = ['Home', 'Menu', 'Service', 'Delivery', 'Contact'];
  const iconClass = "text-white rounded-full p-2 bg-opacity-80 hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-white hover:-translate-y-2"


  return (
    <footer className="flex items-center justify-between mx-auto px-20 py-4 bg-[#D9077A]">
      <div className="logo">
        <Image src="/images/logo.png" alt="" height={100} width={100} />
      </div>

      <ul className="flex gap-7">
        {navLinks.map(item => (
          <li key={item} className="text-black font-semibold text-sm hover:text-white hover:underline underline-offset-8 cursor-pointer">{item}</li>
        ))}
      </ul>

      <div className="flex gap-2">
        <Link className={iconClass} href=""> <InstagramIcon /> </Link>
        <Link className={iconClass} href=""> <FacebookIcon /> </Link>
        <Link className={iconClass} href=""> <TwitterIcon /> </Link>
      </div>
    </footer>
  )
}

export default Footer
