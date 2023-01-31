import Categories from "./Categories";
import Header from "./Header";
import RecentlyUploaded from "./RecentlyUploaded";
import TopSallers from "./TopSallers";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <RecentlyUploaded />
      <TopSallers />
    </div>
  )
}
