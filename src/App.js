import "./index.css";
import Banner from "./Component/Banner";
import FeaturedCard from "./Component/FeaturedCard";
import ReviewCard from "./Component/ReviewCard";

function App() {
  return (
    <div className="App">
      <Banner />
      <FeaturedCard />
      <ReviewCard />
    </div>
  );
}

export default App;
