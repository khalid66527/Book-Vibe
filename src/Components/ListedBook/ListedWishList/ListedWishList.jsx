import React, { useContext } from 'react';
import { BookContext } from '../../../Context/BookProvider';
import BookCart from '../../ui/BookCart';

const ListedWishList = () => {

    const { wishList } = useContext(BookContext);

    if (wishList.length === 0) {
        return <div className="h-80 container mx-auto flex justify-center items-center bg-gray-100 my-5">
            <h2 className=' font-bold text-4xl'>No WishList List data Found</h2>
        </div>
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1'>
            {
                wishList.map((book, ind) => <BookCart key={ind} book={book}></BookCart>)

            }
        </div>
    );
};



export default ListedWishList;