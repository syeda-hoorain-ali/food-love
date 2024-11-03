import { StarIcon } from "lucide-react";

interface Props {
  title: string;
  image: string;
  price: number;
  className?: string;
}

const MiniCard = ({ title, image, price, className }: Props) => {

  return (
    <div style={{ backgroundImage: `url("${image}")` }}
      className={`rounded-3xl p-6 pt-24 bg-center bg-cover cursor-pointer hover:scale-105 ${className}`}>

      <div className="bg-white w-48 flex gap-1 flex-col py-3 rounded-2xl items-center">
        <span className="font-semibold">{title}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) =>
            <StarIcon key={i} fill="#F2A007" stroke="none" size={10} />
          )}
        </div>
        <span>{price}</span>
      </div>

    </div>
  )
}

export default MiniCard
