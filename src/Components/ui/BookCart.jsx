import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCart = ({ book }) => {
    const { bookName, category, image, rating, author,bookId } = book
    return (

        <Link to={`/booksDetails/${bookId}`} className="card bg-base-100 w-96 shadow-sm  border border-gray-400 rounded-2xl  ">
            <figure className='bg-gray-100 py-2'>
                <img
                    src={image}
                    alt="Shoes"
                    className='h-[400px] w-[80%] rounded-t-2xl' />
            </figure>
            <div className="card-body space-y-2">
                <div className=" flex gap-3 font-semibold">
                    {
                        book.tags.map((tag, ind) => (<div className='badge bg-gray-100 text-green-500 rounded-2xl' key={ind}>{tag}</div>))
                    }

                </div>
                <h2 className='text-2xl font-bold'>{bookName}</h2>
                <p>{author}</p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-3">
                    <div className="badge bg-gray-100 ">{category}</div>
                    <div className="badge bg-gray-100">{rating}<FaRegStar /></div>
                </div>
            </div>
        </Link>

    );
};

export default BookCart;