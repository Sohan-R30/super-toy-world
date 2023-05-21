import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoadCategory from './LoadCategory';


const Category = () => {
    const [toys, setToys] = useState([]);

    const [subCategory, setSubcategory] = useState("Marvel")
    const [selectedTab, setSelectedTab] = useState(0);
    const [loadCategoryData, setLoadCategoryData] = useState([])


    const tabTitles = [...new Set(toys.map(obj => obj.subCategory))]
    const handleTabSelect = (tabTitle) => {
        setSelectedTab(tabTitle);
    };

    useEffect(() => {
        fetch("http://localhost:2000/categoryToys")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:2000/category/${subCategory}`)
            .then(res => res.json())
            .then(data => {
                setLoadCategoryData(data)
                console.log("--setLoadCategoryData---" + data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [subCategory])




    return (
        <div>
            <Tabs onSelect={handleTabSelect} selectedIndex={selectedTab}>
                <TabList className={`flex flex-wrap justify-center text-xl gap-2  mx-5 sm:mx-20`}>
                    {
                        tabTitles.map((title, index) => (
                            <Tab
                                className="btn bg-primaryColor hover:bg-[#18c2d8] outline-none border-none text-white hover:text-white"
                                onClick={() => {
                                    setSubcategory(title)
                                    // handleLoadToyByCategory(title)
                                }}
                                key={index}>{title}</Tab>
                        ))
                    }
                </TabList>
                {
                    tabTitles.map((title, index) => (
                        <TabPanel key={index}>
                            <div className='flex flex-wrap justify-center my-5 mx-5 sm:mx-20 bg-secondaryColor p-10 shadow-xl rounded-lg gap-5'>
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
    );
};

export default Category;