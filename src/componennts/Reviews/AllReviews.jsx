/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
// eslint-disable-next-line no-unused-vars
import AOS from "../AOS/AOS";

const CustomStar = (
    <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
)

const myStyles = {
    itemShapes: CustomStar,
    activeFillColor: '#fb7e44',
    inactiveFillColor: '#0809094d'
}

const AllReviews = ({ review }) => {
    const {name,ratings,comment} = review || {};

    return (
            <div className="p-8 m-5 border mb-4 w-3/4 sm:w-72 sm:h-52" data-aos="zoom-in-right">
                <h4 className="text-lg font-bold">Reviewer Name : {name}</h4>
                <p className='text-xl flex flex-wrap items-center gap-2'>Ratings: <Rating
                                itemStyles={myStyles}
                                style={{ maxWidth: 150, }}
                                value={ratings}
                                readOnly
                            />
                                {ratings}
                            </p>
                <p>Comment : {comment}</p>
            </div>
    );
};

export default AllReviews;