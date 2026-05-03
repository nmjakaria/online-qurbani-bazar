import AnimalCard from "@/components/homepage/AnimalCard";
import Banner from "@/components/homepage/Banner";
import FeaturedAnimals from "@/components/homepage/FeaturedAnimals";

export default function Home() {
  return (
    <>
      <div>
        <Banner></Banner>
        <FeaturedAnimals></FeaturedAnimals>
      </div>
    </>
  );
}