interface Props {
  name: string;
  image: string;
  className?: string;
}

const ChefCard = ({ name, image, className }: Props) => {

  return (
    <div style={{ backgroundImage: `url("${image}")` }}
      className={`rounded-3xl p-6 pt-56 w-fit bg-center bg-cover hover:scale-105 ${className}`}>

      <div className="bg-white w-56 flex gap-1 flex-col py-3 rounded-2xl items-center">
        <span className="font-semibold">{name}</span>
        <span>Chef</span>
      </div>
    </div>
  )
}

export default ChefCard
