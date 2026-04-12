// import React, { use } from 'react';
import { useState } from 'react';
import { PiClockAfternoon } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router';
// const booksPromise = fetch("/booksData.json").then(res => res.json())

const BooksDetails = () => {
    // const books = use(booksPromise)
    // console.log(books);
    const { bookId } = useParams();
    // console.log('bookId', bookId);

    const books = useLoaderData();
    // console.log('books:', books);
    const expectedBook = books.find((book) => book.bookId === Number(bookId));

    const { yearOfPublishing, totalPages, review, rating, publisher, image,  bookName, author } = expectedBook;

    const [stareadBooks, setStaReadBooks] = useState()

    const handleMarkAsRead = (currentBook) =>{
        // step 1: store book id 
        // step 2: where to store
        // step 3: array or collection 
        // step 4: if the book already exist then show a alert or toost 
        // step 5: if not then add the book in the array or collection 
        console.log("currentBook" , bookId);
        const isExistBook = stareadBooks.find(book => book.bookId === currentBook.bookId);
        if(isExistBook){
            alert("The book is already exist")
        }
        else{
            setStaReadBooks(...stareadBooks , currentBook)
        }

    }

    return (
        <div>
            <div className=" grid grid-cols-2 bg-base-100   container mx-auto my-4">
                <figure className='flex justify-center items-center'>
                    <img
                        src={
                            image
                        }
                        alt="Album" 
                        className='w-[400px] h-[500px]'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <h3 className='text-xl font-semibold'>{author}</h3>
                    <hr className='opacity-20' />
                    <p className='text-xl font-semibold'>category</p>
                    <hr className='opacity-20' />
                    <p><span className='font-bold'>Review :</span> {review}</p>
                    <p className='font-bold'>Tag :
                        {
                        expectedBook.tags.map((tag, ind) => (<div className='badge bg-gray-100 text-green-500 rounded-2xl mx-2' key={ind}># {tag}</div>))
                    }
                    </p>
                    <div className=" flex gap-10">
                        <div className="">
                            <p>Number of Pages :</p>
                            <p>Publisher :</p>
                            <p>Year of Publishing :</p>
                            <p>Rating :</p>

                        </div>
                        <div className="">
                            <p className='font-bold'>{totalPages}</p>
                            <p className='font-bold'>{publisher}</p>
                            <p className='font-bold'>{yearOfPublishing}</p>
                            <p className='font-bold'>{rating}</p>

                        </div>
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-success btn-outline" onClick={()=>handleMarkAsRead(bookId)}>Mark as Read</button>
                        <button className="btn btn-success">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;