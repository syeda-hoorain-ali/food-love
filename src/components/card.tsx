import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  title: string;
  content: string;
  price: number;
  image: string;
}

const Card = ({ title, content, price, image }: Props) => {
  return (
    <div className="card relative bg-[#D9077A] flex flex-col gap-8 p-6 pr-16 md:pr-24 rounded-lg cursor-pointer hover:bg-opacity-80 transition-all [&_h2]:hover:text-black">

      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-white font-semibold text-xl">{title}</h2>
        <p className="text-gray-800 text-sm">{content}</p>
      </div>

      <div className="flex items-center gap-8">
        <span className="text-lg font-semibold">${price}</span>
        <Button variant="outline" className="w-fit hover:shadow-xl">Add to Cart</Button>
      </div>

      <div className="img absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-32 rounded-full overflow-hidden">
        <Image src={image} alt="" height={200} width={200} className="img h-full w-full bg-blue-300" />
      </div>

    </div>
  )
}

export default Card
