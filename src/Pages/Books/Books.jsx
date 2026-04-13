import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ListedReadList from '../../Components/ListedBook/ListedReadList/ListedReadList';
import ListedWishList from '../../Components/ListedBook/ListedWishList/ListedWishList';
import 'react-tabs/style/react-tabs.css';
const Books = () => {


    const { storedBooks, wishList } = useContext(BookContext);

    console.log(storedBooks, wishList);


    return (
        <div className='container mx-auto my-4'>

             <Tabs>
                <TabList>
                    <Tab >Read List </Tab>
                    <Tab >WishList List </Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;