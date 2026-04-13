import React, { useContext } from 'react';
import { BookContext } from '../../../Context/BookProvider';
import BookCart from '../../ui/BookCart';


const ListedReadList = () => {

    const {readList } = useContext(BookContext);
    if (readList.length===0){
        return <div className="h-80 container mx-auto flex justify-center items-center bg-gray-100 my-5">
            <h2 className=' font-bold text-4xl'>No Read List data Found</h2>
        </div>
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1'>
            {
                readList.map(((book, ind) => <BookCart key={ind} book={book}></BookCart>))
            }
        </div>
    );
};

export default ListedReadList;