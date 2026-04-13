import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs } from 'react-tabs';

const Books = () => {

    
    const { storedBooks , wishList} =useContext(BookContext);

    console.log(storedBooks ,wishList);
    <Tabs>
        <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>
    </Tabs>


    return (
        <div className='container mx-auto'>
             Read List : {storedBooks.length} <br/>
             WishList List : {wishList.length}
        </div>
    );
};

export default Books;