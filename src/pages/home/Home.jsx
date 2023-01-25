import Categories from "./Categories";
import Header from "./Header";
import RecentlyUploaded from "./RecentlyUploaded";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <RecentlyUploaded />
    </div>
  )
}
