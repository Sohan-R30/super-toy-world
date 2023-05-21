/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CustomStar = (
    <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
)

const myStyles = {
    itemShapes: CustomStar,
    activeFillColor: '#fb7e44',
    inactiveFillColor: '#0809094d'
}



const LoadCategory = ({ categoryData }) => {
    const { toyPhoto, ratings, toyName, price, _id } = categoryData || {};
    const navigate = useNavigate();
    const handleDetails = (id) => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'You have to log in first to view details',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            navigate(`/single-toy/${id}`);
          },1500)
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl ">
            <figure>
                <img className="" src={toyPhoto} alt={toyName} />
            </figure>
            <div className="card-body bg-[#12265a17]">
                <p className='flex items-center gap-2'><Rating
                    itemStyles={myStyles}
                    style={{ maxWidth: 100, }}
                    value={ratings}
                    readOnly
                />
                    {ratings}
                </p>

                <p className="md:text-3xl font-bold card-title">{toyName}</p>
                <p className="md:text-xl font-bold">Price : <span className="text-primaryColor">${price}</span></p>
                <button onClick={() => handleDetails(_id)} className="btn btn-btn w-full  bg-primaryColor hover:bg-hoverColor hover:text-black border-none  text-white font-bold">View Details</button>
            </div>

        </div>
    );
};

export default LoadCategory;