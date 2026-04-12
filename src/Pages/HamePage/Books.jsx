import React, { use } from 'react';

import BookCart from '../../Components/ui/BookCart';
const booksPromise = fetch("/booksData.json").then(res => res.json())
const Books = () => {
    const books = use(booksPromise)
    console.log(books);
    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-4xl text-center my-10' >Books</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    books.map((book ,ind )=> {
                        return <BookCart key={ind} book={book}></BookCart>
                    })
                }
            </div>
        </div>
    );
};

export default Books;