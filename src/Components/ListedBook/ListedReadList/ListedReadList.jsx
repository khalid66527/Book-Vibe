import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../Context/BookProvider';
import BookCart from '../../ui/BookCart';


const ListedReadList = ({stortingType}) => {

    const {readList } = useContext(BookContext);
    const [filteredReadList , setFilteredReadList] =useState(readList)

    useEffect(()=>{
        if(stortingType){
            if(stortingType ==="pages"){
                const sortData = [...readList].sort((a,b) => a.totalPages - b.totalPages)
                console.log(sortData);
                setFilteredReadList(sortData)
            }
            else if (stortingType === 'rating'){
                const sortData = [...readList].sort((a,b) => a.rating - b.rating)
                console.log(sortData);
                setFilteredReadList(sortData)
            }
        }
    },[stortingType , readList])
    if (filteredReadList.length===0){
        return <div className="h-80 container mx-auto flex justify-center items-center bg-gray-100 my-5">
            <h2 className=' font-bold text-4xl'>No Read List data Found</h2>
        </div>
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1'>
            {
                filteredReadList.map(((book, ind) => <BookCart key={ind} book={book}></BookCart>))
            }
        </div>
    );
};

export default ListedReadList;