import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp group">
      {/* Aspect-square ensures a "perfect" crop regardless of original image size */}
      <figure className="relative w-full aspect-square overflow-hidden">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
        />
        <div className="absolute top-2 right-2 badge badge-secondary badge-sm font-bold">
          {animal.category}
        </div>
      </figure>

      <div className="card-body p-3">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-sm font-bold text-[#1D3557] leading-tight">
            {animal.name}
          </h2>
          <span className="text-primary font-bold text-sm">
            ৳{animal.price.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-2 items-center text-[10px] text-gray-500 mt-1">
          <span className="bg-base-200 px-2 py-0.5 rounded-full">{animal.breed}</span>
          <span>•</span>
          <span>{animal.weight} KG</span>
        </div>

        <div className="card-actions mt-4">
          <Link
            href={`/animals/${animal.id}`}
            className="btn btn-primary btn-sm w-full rounded-xl border-none text-white py-2.5 h-auto min-h-0 shadow-md hover:shadow-lg transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;