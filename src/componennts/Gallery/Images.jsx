/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import AOS from "../AOS/AOS";

const Images = ({images}) => {
    return (
        <div data-aos="fade-up"
         className={` w-56 md:max-w-sm md:w-full  shadow-2xl`}>
            <img className="rounded-lg hover:p-5 opacity-100 hover:opacity-70 hover:bg-hoverColor " src={images.toyPhoto} />
        </div>
    );
};

export default Images;