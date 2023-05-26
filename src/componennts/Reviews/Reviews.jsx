// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AllReviews from './AllReviews';
import { ThreeDots } from 'react-loader-spinner';


const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState("")

    
    const onSubmit = (data) => {
        fetch("https://super-toy-world-server.vercel.app/addReviews", {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset();
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Review Added Successfully',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    reset();
                }
            })
            .catch(error => {
                setError(error.message);
            })

    };

    useEffect(() => {
        fetch("https://super-toy-world-server.vercel.app/allReviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setIsloading(false);
            })
            .catch(error => setError(error.message))
    }, [reviews])

    return (
        <>
            <div className=" mx-5 sm:mx-auto text-center flex flex-col justify-center sm:w-2/4 md:w-9/12 border my-28 bg-formColor rounded-md">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 py-10 w-full justify-center">
                    <h2 className="text-4xl text-primaryColor font-extrabold pb-2">Sent Us Your Review</h2>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type="text" placeholder="Your Name" {...register("name")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                    <input min="0" max="5" type="number" placeholder="Give Review" {...register("ratings", { valueAsNumber: true })} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                    <input type="text" placeholder="Your Comment" {...register("comment")} className="border-2 outline-primaryColor p-2 w-9/12 mx-auto rounded-md" required />
                    <input type="submit" value="Add Review" className="btn  bg-primaryColor hover:bg-hoverColor hover:text-black border-none  text-white font-bold w-9/12 mx-auto" />
                </form>
            </div>
            <h2 className="text-center text-4xl my-5 text-primaryColor font-extrabold pb-2">User Feedbacks</h2>
            {
                isLoading ? (
                    <div className="flex justify-center">
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#fb7e44"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                ) : (
                    <div className='flex flex-wrap justify-center items-center  mb-20 gap-5 '>
                        <p className='text-danger hidden'>{error}</p>
                        {
                            reviews && reviews.map(review => <AllReviews
                                review={review}
                                key={review._id}
                            >
                            </AllReviews>)
                        }
                    </div>
                )
            }
        </>
    );
};

export default Reviews;