import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoadCategory from './LoadCategory';
import { ThreeDots } from 'react-loader-spinner';
import AOS from '../AOS/AOS';

const Category = () => {
    const [toys, setToys] = useState([]);
    const [error, setError] = useState("")
    const [subCategory, setSubcategory] = useState("Marvel")
    const [selectedTab, setSelectedTab] = useState(0);
    const [loadCategoryData, setLoadCategoryData] = useState([]);
    const [isLoading, setIsloading] = useState(true);


    const tabTitles = [...new Set(toys.map(obj => obj.subCategory))]
    const handleTabSelect = (tabTitle) => {
        setSelectedTab(tabTitle);
    };

    useEffect(() => {
        AOS.refresh();
        fetch("https://super-toy-world-server.vercel.app/categoryToys")
            .then(res => res.json())
            .then(data => {
                setIsloading(false)
                setToys(data)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [])

    useEffect(() => {
        fetch(`https://super-toy-world-server.vercel.app/category/${subCategory}`)
            .then(res => res.json())
            .then(data => {
                setIsloading(false)
                setLoadCategoryData(data)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [subCategory])




    return (
        <div>
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
                    <div>
                         <h2 className="text-center text-4xl my-5 text-primaryColor font-extrabold pb-2">Click On Tabs To Show Toys</h2>
                        <Tabs onSelect={handleTabSelect} selectedIndex={selectedTab}>
                            <TabList className={`flex flex-wrap justify-center rounded-2xl text-xl gap-2  mx-5 sm:mx-5 lg:mx-10  py-10 bg-hoverColor`}>
                                {
                                    tabTitles.map((title, index) => (
                                        <div key={index} data-aos="fade-left">
                                            <Tab
                                            className="btn bg-primaryColor hover:bg-[#18c2d8] outline-none border-none text-white hover:text-white"
                                            onClick={() => {
                                                setSubcategory(title)
                                            }}
                                            >{title}
                                            </Tab>
                                        </div>
                                    ))
                                }
                            </TabList>
                           
                            {
                                tabTitles.map((title, index) => (
                                    <TabPanel key={index}>
                                        <div className='flex flex-wrap justify-center my-5 mx-5 sm:mx-0 bg-secondaryColor p-10 shadow-lg rounded-lg gap-5'>
                                            {
                                                loadCategoryData.map(categoryData => <LoadCategory
                                                    categoryData={categoryData}
                                                    key={categoryData._id}
                                                ></LoadCategory>)
                                            }
                                        </div>
                                    </TabPanel>
                                ))
                            }
                        </Tabs>

                    </div>
                ) 
                
                }
         <p className='text-danger hidden'>{error}</p>
        </div>
    );
};

export default Category;