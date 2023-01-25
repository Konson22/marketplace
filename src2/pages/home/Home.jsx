import Header from './Header'
import FeaturedItems from './FeaturedItems'
// import Features from './Features'
import './css/home.css'
import TopSallers from './TopSallers'
import Categories from './Categories'

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <FeaturedItems />
      <TopSallers />
      {/* <Features /> */}
    </div>
  )
}
