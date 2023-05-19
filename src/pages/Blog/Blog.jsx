import titleChange from "../../componennts/shared/titleChange";

const Blog = () => {
    titleChange("Blogs");
    return (
        <div className="my-10 max-w-2xl mx-auto text-justify px-10">
            <p className="text-3xl pt-3 mb-5 text-primaryColor font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side ?</p>
            <p className="leading-7 tracking-wide text-lg">
                An access token and a refresh token are both used in authentication and authorization
                An access token is a string representing an authorization issued to the client. Tokens
                represent specific scopes and duration of access, granted by the resource owner, and enforced
                by the resource server and authorization server.An access token is put in the Authorization header
                of our request  It is verified by the APi, which the client is calling.Access token are usually in
                JWT format, but you can use any other format.Access tokens generally contain three parts that are used
                to verify a user has permission to access <br /> <br /> A refresh token is issued (along with access token) to the
                client by the authorization server.The responsibility of refresh token is to request for a new access
                token when the existing access token is expired.Refresh token is long lived token.
                We can store this tokens in browser cookies,local storage cookies r more secure from local storage

            </p>
            <p className="text-3xl pt-3 mb-5 text-primaryColor font-bold">2. Compare SQL and NoSQL databases ?</p>
            <p className="leading-7 tracking-wide text-lg">
                SQL databases are relational, and NoSQL databases are non-relational. <br />
                SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                SQL databases are well-suited for structured data with complex relationships, such as financial data,
                inventory management, or applications with strict consistency requirements.NoSQL databases excel in
                handling large volumes of unstructured or semi-structured data, such as social media data, IoT data,
                real-time analytics, content management systems, and applications requiring high scalability and agility.
            </p>
            <p className="text-3xl pt-3 mb-5 text-primaryColor font-bold">3. What is express js? What is Nest JS ?</p>
            <p className="leading-7 tracking-wide text-lg">
                Express.js is a popular web application framework for Node.js. It provides a minimalistic and
                flexible set of features to build web applications and APIs. Express.js simplifies the process
                of handling HTTP requests, routing, middleware management, and view rendering. It is known for
                its simplicity, lightweight nature, and extensive ecosystem of middleware and plugins. With
                Express.js, developers have the freedom to structure their applications and choose the libraries
                they want to use for different functionalities. <br /> NestJS is a Node.js framework for building server-side
                applications. It is based on TypeScript and JavaScript.NestJS provides several key features
                Modular and organized structure
                Dependency injection
                Decorators and metadata
                Extensive ecosystem
            </p>
            <p className="text-3xl pt-3 mb-5 text-primaryColor font-bold">4. What is MongoDB aggregate and how does it work ?</p>
            <p className="leading-7 tracking-wide text-lg">
                MongoDB&rsquo;s aggregate is a powerful aggregation framework that allows you to perform advanced data processing
                and analysis operations on your data stored in MongoDB. It provides a way to perform complex computations,
                transformations, and aggregations on collections of documents.
            </p>
        </div>
    );
};

export default Blog;