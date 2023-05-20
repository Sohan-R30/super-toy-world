import Banner from "../../componennts/Banner/Banner";
import Gallery from "../../componennts/Gallery/Gallery";
import titleChange from "../../componennts/shared/titleChange";

const Home = () => {
    titleChange("Home");
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;