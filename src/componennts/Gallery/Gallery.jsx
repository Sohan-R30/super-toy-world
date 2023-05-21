import { useEffect, useState } from "react";
import Images from "./Images";
import { ThreeDots } from "react-loader-spinner";
const Gallery = () => {
    const [allImage, setAllImage] = useState([]);
    const [isLoading, setIsloading] = useState(true);


    useEffect(() => {
        fetch("http://localhost:2000/allImages")
            .then(res => res.json())
            .then(data => {
                setIsloading(false)
                setAllImage(data)
            })
    }, [])
    return (
        <>
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
                    <div className="mx-2 my-20">
                        <div className=" font-bold text-secondaryColor text-center mb-10 ">
                            <h2 className="text-4xl">Our Toys Gallery</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 bg-secondaryColor rounded-2xl shadow-2xl py-10 px-4  ">
                            {
                                allImage && allImage.map(images => <Images
                                    images={images}
                                    key={images._id}>
                                </Images>)
                            }
                        </div>
                    </div>
                )
            }
        </>

    );
};

export default Gallery;