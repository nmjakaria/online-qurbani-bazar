import About from "@/components/homepage/About";
import AnimalCard from "@/components/homepage/AnimalCard";
import Banner from "@/components/homepage/Banner";
import FeaturedAnimals from "@/components/homepage/FeaturedAnimals";
import QurbaniSidebar from "@/components/homepage/QurbaniSidebar";

export const metadata = {
  title: "Online Qurbani Bazar",
  description: "Your trusted online marketplace for premium sacrificial animals. Explore our curated selection of healthy livestock, hand-picked for quality and sacred tradition. Shop with confidence and make your Qurbani experience seamless and meaningful. ",
};

export default function Home() {
  return (
    <>
      <div>
        <Banner></Banner>
        <FeaturedAnimals></FeaturedAnimals>
        <QurbaniSidebar></QurbaniSidebar>
        <About></About>
      </div>
    </>
  );
}