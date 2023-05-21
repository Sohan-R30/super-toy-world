import Banner from "../../componennts/Banner/Banner";
import Category from "../../componennts/Category/Category";
import Gallery from "../../componennts/Gallery/Gallery";
import titleChange from "../../componennts/shared/titleChange";

const Home = () => {
    titleChange("Home");
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;