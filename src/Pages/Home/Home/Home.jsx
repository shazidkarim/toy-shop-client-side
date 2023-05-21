
import SectionOne from "../../../SectionOne/SectionOne";
import SectionTwo from "../../../SectionTwo/SectionTwo";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <Gallery></Gallery>
            <Category></Category>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;