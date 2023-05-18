import error from "/404.jpg"
const Error = () => {
    return (
        <div className="flex flex-col items-center my-10">
            <img src={error} alt="error" />
            <button className="btn bg-primaryColor hover:bg-[#d74c0b] border-none shadow-xl">Go to Home Page</button>
        </div>
    );
};

export default Error;