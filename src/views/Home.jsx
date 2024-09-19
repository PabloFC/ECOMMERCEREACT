import Carousel from "../components/Carousel"
import Categories from "../components/Categories"
import IconsSection from "../components/IconsSection"
import ProductsCard from "../components/ProductsCard"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <>
      <Carousel />
      <ProductsCard />
      <Categories/>
      <Testimonials/>
      <IconsSection/>
    </>
  )
}

export default Home
