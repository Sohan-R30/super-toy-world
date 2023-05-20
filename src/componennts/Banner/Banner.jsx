import marvelToys from "/marvelToys.jpeg"
const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center m-5 sm:m-20 gap-10 text-justify items-center">
                <div className="">
                    <img className="rounded-md" src={marvelToys} />
                </div>
                <div>
                    <p className="md:text-3xl font-bold text-primaryColor mb-2">Super Toy World</p>
                    <p className=" leading-7 tracking-wide h-[400px] sm:h-72 overflow-hidden  pb-5">
                        <span className="text-xl font-bold">Welcome to Super Toys</span>,
                        your ultimate destination for all things superhero and pop culture!
                        Our online store is a paradise for fans of Marvel, DC, Transformers,
                        and more. Discover a vast collection of action figures, collectibles,
                        apparel, and accessories featuring your favorite characters from the
                        Marvel and DC universes, as well as the beloved Transformers franchise.
                        Whether you&apos;re a die-hard superhero aficionado or a casual fan,
                        Super Toys has something to ignite your imagination and bring your favorite
                        heroes to life. Get ready to embark on an epic journey through the realms of
                        imagination and find the perfect piece to add to your superhero collection.
                        Shop now and unleash the hero within!
                    </p>
                    <button className="btn mt-3  bg-primaryColor hover:bg-hoverColor hover:text-black border-none text-white font-bold">Explore Our Store</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;