import React, {  createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])

    const handleWishList = (currentBook) => {
        // step 1: store book id 
        // step 2: where to store
        // step 3: array or collection 
        // step 4: if the book already exist then show a alert or toost 
        // step 5: if not then add the book in the array or collection 
        const inExistInReadList = readList.find(
            (book) => book.bookId === currentBook.bookId,
        )
        if(inExistInReadList){
            toast.error(' This book is already in Read List')
            return;
        }
        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error("The book is already exist")
        }
        else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wishList List`)
        }
        
        console.log( currentBook,wishList, "book");
    }



    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id 
        // step 2: where to store
        // step 3: array or collection 
        // step 4: if the book already exist then show a alert or toost 
        // step 5: if not then add the book in the array or collection 
        const isExistWishList = wishList.find((book) => 
            book.bookId=== currentBook.bookId)
        if(isExistWishList){
            toast.error(' This book is already in Wish List')
            return;
        }
        const isExistBook = readList.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error("The book is already exist")
        }
        else {
            setReadList([...readList, currentBook])
            toast.success(`${currentBook.bookName} is added to Read List`)
        }
        
        console.log( currentBook,readList, "book");
    }




    const data = {
       
        readList,
        setReadList,
        handleMarkAsRead,
        wishList, setWishList,
        handleWishList


    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;