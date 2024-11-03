import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  title: string;
  content: string;
  action: string;
  image: string;
}

const CakeCard = ({ title, content, action, image }: Props) => {
  return (
    <div className="card relative bg-[#D9077A] flex p-6 md:p-8 pr-20 md:pr-32 mr-32 md:mr-24 rounded-lg">

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-white font-light text-2xl">{title}</h2>
        <p className="text-gray-800 text-sm">{content}</p>
        <Button variant="outline" className="w-fit text-primary hover:shadow-xl">{action}</Button>
      </div>

      <div className="img absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-40 md:size-48 rounded-full overflow-hidden">
        <Image src={image} alt="" height={320} width={320} className="img h-full w-full bg-blue-300" />
      </div>

    </div>
  )
}

export default CakeCard
