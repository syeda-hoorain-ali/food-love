import Image from "next/image"
import { Button } from "./ui/button"
import { MenuIcon, SearchIcon } from "lucide-react"
import { Input } from "./ui/input"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const Navbar = () => {

  const navLinks = ['Home', 'Menu', 'Service', 'Delivery', 'Contact'];

  return (
    <nav className="relative flex items-center justify-between max-w-screen-xl mx-auto px-20 py-4">
      <div className="logo">
        <Image src="/images/logo.png" alt="" height={150} width={190} className="size-20 md:size-32" />
      </div>

      <ul className="hidden md:flex gap-7">
        {navLinks.map(item => (
          <li key={item} className="text-[#0000007a] font-semibold text-sm transition-all hover:text-primary hover:underline underline-offset-8 cursor-pointer">{item}</li>
        ))}
      </ul>

      <div className="hidden md:flex gap-8">

        <div className="relative w-48 h-10 flex gap-1 rounded-full overflow-hidden gradient-border">
          <Input className="h-full placeholder:text-gray-300" placeholder="Search" />
          <Button size="icon" variant="gradient" className="absolute right-0 hover:translate-y-0 hover:text-white">
            <SearchIcon />
          </Button>
        </div>

        <Button className="px-6">Order Now</Button>
      </div>

      <div className="circle absolute top-20 right-96 size-36 -z-50 rounded-full bg-[#F2C2D8] bg-opacity-30"></div>


      {/* Sheet */}
      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <Button className="p-1 hover:translate-y-0" size="icon">
            <MenuIcon size={80} className="size-9" />
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col justify-between w-1/3 min-w-96 pt-16">
          <ul className="space-y-7">
            {navLinks.map(item => (
              <li key={item} className="text-[#0000007a] font-semibold text-sm transition-all hover:text-primary hover:underline underline-offset-8 cursor-pointer">{item}</li>
            ))}
          </ul>

          <div>
            <Button className="px-6">Order Now</Button>
          </div>
        </SheetContent>
      </Sheet>



    </nav>
  )
}

export default Navbar
