import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ListedReadList from '../../Components/ListedBook/ListedReadList/ListedReadList';
import ListedWishList from '../../Components/ListedBook/ListedWishList/ListedWishList';
import 'react-tabs/style/react-tabs.css';


const Books = () => {

    const [stortingType, setStortingType] = useState ("")
    console.log(stortingType);

    const { storedBooks, wishList } = useContext(BookContext);

    console.log(storedBooks, wishList);


    return (
        <div className='container mx-auto my-4'>

            <div className="dropdown dropdown-bottom dropdown-center flex justify-center items-center my-5">
                <div tabIndex={0} role="button" className="btn m-1">Click {stortingType} ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> setStortingType('pages')}><a>Pages</a></li>
                    <li onClick={()=> setStortingType('rating')}><a>Rating</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab >Read List </Tab>
                    <Tab >WishList List </Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList stortingType={stortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList stortingType={stortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;