import CakeCard from "@/components/cake-card"
import Card from "@/components/card"
import ChefCard from "@/components/chef-card"
import MiniCard from "@/components/mini-card"
import { Button } from "@/components/ui/button"
import { BellIcon, ClockIcon, PhoneIcon, PlayIcon, ShoppingCartIcon, StarIcon } from "lucide-react"
import Image from "next/image"

const page = () => {

  const list = [
    { icon: <ShoppingCartIcon fill="#000" size={20} />, text: "Online Order" },
    { icon: <ClockIcon size={20} />, text: "24/7 Service" },
    { icon: <BellIcon fill="#000" size={20} />, text: "Reservation" },
  ]

  return (
    <>

      <header className="max-w-screen-xl mx-auto px-4 lg:px-24 md:h-96 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-[#D9077A] text-4xl md:text-6xl leading-[1.2]">Food you love , delivered to you</h1>
          <p className="text-[#F2A007] md:text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua
            <br className="hidden md:block" /> dolor do amet sint. Velit officia consequat duis enim velit
            <br className="hidden md:block" /> mollit. Exercitation veniam consequat nostrud amet.
          </p>

          <div className="flex gap-6 items-center">
            <Button variant="gradient" className="text-black px-20 py-6">Explore More</Button>
            <span className="inline-flex items-center gap-2">
              <Button size="icon" className="bg-white hover:bg-white">
                <PlayIcon fill="#D9526B" stroke="none" />
              </Button>
              <span className="font-semibold text-sm">Watch Video</span>
            </span>
          </div>

        </div>

        <div className="relative flex items-end justify-center md:pl-20">
          <Image src="/images/cake.png" alt="" height={450} width={320} />

          <div className="absolute top-4 md:top-10 left-16 md:left-32 flex gap-2 rounded-full bg-gradient-to-r from-white to-secondary p-2 w-48 shadow">
            <Image src="/images/love-cake.png" alt="" height={50} width={50} />

            <div className="flex flex-col justify-between">
              <span className="text-xs font-semibold">Lové Cake</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) =>
                  <StarIcon key={i} fill="#F2A007" stroke="none" size={10} />
                )}
              </div>
              <span className="text-xs font-semibold text-gray-400">$10.9</span>
            </div>
          </div>


          <div className="absolute top-32 md:top-60 right-4 md:-right-20 flex gap-2 rounded-full bg-gradient-to-r from-white to-secondary p-2 w-56 shadow">
            <Image src="/images/american-cake.png" alt="" height={50} width={50} />

            <div className="flex flex-col justify-between">
              <span className="text-xs font-semibold">American Cake</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} fill="#F2A007" stroke="none" size={10} />)}
              </div>
              <span className="text-xs font-semibold text-gray-400">$5.9</span>
            </div>
          </div>


          <div className="absolute top-60 md:top-80 left-4 md:left-16 flex gap-2 rounded-full bg-gradient-to-r from-white to-secondary p-2 shadow">
            <Image src="/images/brooklyn-simmons.png" alt="" height={40} width={40} className="shadow rounded-full" />

            <div className="flex flex-col gap-1 pr-8">
              <span className="text-xs font-semibold">Brooklyn Simmons</span>
              <span className="text-xs font-semibold text-gray-400">Food Courier</span>
            </div>

            <div className="pink-gradient rounded-full size-10 flex items-center justify-center">
              <PhoneIcon stroke="#fff" size={20} />
            </div>
          </div>


        </div>
      </header>


      <div className="max-w-screen-xl mx-auto mt-8 md:mt-0 px-4 lg:px-24 flex gap-2">

        <div className="flex">
          <Image src="/images/user-1.png" alt="" height={40} width={40} className="drop-shadow rounded-full -ml-3" />
          <Image src="/images/user-2.png" alt="" height={40} width={40} className="drop-shadow rounded-full -ml-3" />
          <Image src="/images/user-3.png" alt="" height={40} width={40} className="drop-shadow rounded-full -ml-3" />
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-semibold">Our Customer Reviews</p>

          <span className="flex gap-1 items-center">
            <StarIcon fill="#F2A007" stroke="none" size={20} />

            <span>
              <span className="text-xs font-semibold">4.7</span> {' '}
              <span className="text-xs text-gray-500">(10.5K Reviews)</span>
            </span>
          </span>

        </div>

      </div>


      <section className="max-w-screen-xl mx-auto my-28 px-4 lg:px-24 flex gap-4 justify-between flex-col md:flex-row">

        <CakeCard title="Food you love , delivered to you" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." action="Order Now" image="/images/cake-1.png" />

        <CakeCard title="Have you tried our delicious new cake" content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." action="Order Now" image="/images/cake-2.png" />

      </section>


      <section className="max-w-screen-xl mx-auto my-28 px-4 lg:px-24 flex gap-4 justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-6">

          <h2 className="text-[#D9077A] text-4xl">We Deliver Anywhere</h2>
          <p className="text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua
            <br className="hidden sm:block" /> dolor do amet sint. Velit officia consequat duis enim velit
            <br className="hidden sm:block" /> mollit. Exercitation veniam consequat nostrud amet.
          </p>

          <div className="flex gap-4">
            <Button variant="outline" className="shadow-md">Contact Us</Button>
            <Button variant="gradient" className="shadow-md">View Menu</Button>
          </div>

          <div className="flex gap-4 flex-wrap">
            {list.map(item => (
              <div className="flex gap-2 items-center py-2 px-4 pr-8 bg-white rounded-full shadow-md" key={item.text}>
                <span className="p-3 bg-secondary rounded-full shadow-lg flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="text-xs font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <Image src="/images/cake-3.png" alt="" height={400} width={400} className="drop-shadow-xl" />
        </div>

      </section>


      <section className="max-w-screen-xl mx-auto my-28 px-4 lg:px-24">
        <h2 className="text-[#D9077A] text-4xl text-center mb-8">We Offer You Different Tastes</h2>

        <div className="grid grid-rows-4 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-x-20 gap-y-4">

          <Card title="Birthday Cake" content="Velit officia consequat duis enim velit mollit." price={10.9} image="/images/tastes/birthday-cake.png" />

          <Card title="Dount" content="Velit officia consequat duis enim velit mollit." price={10.9} image="/images/tastes/donut.png" />

          <Card title="Strawberry Pie" content="Velit officia consequat duis enim velit mollit." price={10.9} image="/images/tastes/strawberry-pie.png" />

          <Card title="Chocolate bar" content="Velit officia consequat duis enim velit mollit." price={10.9} image="/images/tastes/chocolate-bar.png" />

          <Card title="Cookies" content="Velit officia consequat duis enim velit mollit." price={10.9} image="/images/tastes/cookies.png" />
          
          <Card title="Snacks" content="Velit officia consequat duis enim velit mollit." price={10.9} image="/images/tastes/snacks.png" />
        </div>

      </section>


      <section className="max-w-screen-xl mx-auto my-28 px-4 py-8 lg:pl-24 h-screen flex flex-col md:flex-row md:gap-4 items-center justify-between bg-[url('/images/background.png')] bg-cover bg-center">
        <div className="flex flex-col gap-6 w-full">

          <h2 className="text-[#D9077A] text-4xl">Our Food Gallery</h2>
          <p className="text-white">
            Amet minim mollit non deserunt ullamco est sit aliqua
            <br className="hidden md:block" /> dolor do amet sint. Velit officia consequat duis enim velit
            <br className="hidden md:block" /> mollit. Exercitation veniam consequat nostrud amet.
          </p>

          <div className="flex gap-4">
            <Button variant="outline" className="shadow-md">Order Now</Button>
            <Button variant="gradient" className="shadow-md">Contact Us</Button>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-x-6 justify-end">
          <MiniCard title="Birthday Cake" price={10.9} image="/images/food-gallery/birthday-cake.png" className="mb-6" />
          <MiniCard title="Donut" price={10.9} image="/images/food-gallery/donut.png" className="mt-6" />
          <MiniCard title="Chocolate bar" price={10.9} image="/images/food-gallery/chocolate-bar.png" className="mb-6" />
          <MiniCard title="Snacks" price={10.9} image="/images/food-gallery/snacks.png" className="mt-6" />
        </div>

      </section>


      <section className="max-w-screen-xl mx-auto my-28 px-4 lg:px-24 flex flex-col items-center">
        <h2 className="text-[#D9077A] text-4xl text-center mb-8">Our Team</h2>

        <div className="md:max-w-xl lg:max-w-none grid gap-12 grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">

          <ChefCard name="Jane Austen" image="/images/chefs/jane-austen.png" />
          <ChefCard name="Wade Warren" image="/images/chefs/wade-warren.png" />
          <ChefCard name="Jenny Wilson" image="/images/chefs/jenny-wilson.png" />
          <ChefCard name="Albert Flores" image="/images/chefs/albert-flores.png" />
        </div>

      </section>
    </>
  )
}

export default page 
