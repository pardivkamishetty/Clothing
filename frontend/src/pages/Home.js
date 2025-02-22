import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeaturedProducts"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts category="men" title="Men's Collection" />
      <FeaturedProducts category="women" title="Women's Collection" />
      <FeaturedProducts category="kids" title="Kids' Collection" />
      <Newsletter />
    </div>
  )
}

export default Home

