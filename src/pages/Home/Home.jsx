import Banner from "../../componennts/Banner/Banner";
import Category from "../../componennts/Category/Category";
import Gallery from "../../componennts/Gallery/Gallery";
import Reviews from "../../componennts/Reviews/Reviews";
import titleChange from "../../componennts/shared/titleChange";

const Home = () => {
    titleChange("Home");
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;