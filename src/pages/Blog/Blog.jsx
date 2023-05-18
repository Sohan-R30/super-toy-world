import titleChange from "../../componennts/shared/titleChange";

const Blog = () => {
    titleChange("Blogs");
    return (
        <div className="my-10">
            <p className="text-2xl pt-3">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p className="text-2xl pt-3">2. Compare SQL and NoSQL databases?</p>
            <p className="text-2xl pt-3">3. What is express js? What is Nest JS (google it)?</p>
            <p className="text-2xl pt-3">4. What is MongoDB aggregate and how does it work (google it)?</p>
        </div>
    );
};

export default Blog;