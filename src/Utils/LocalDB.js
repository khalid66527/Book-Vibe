

const getAllReadListFromLocalDB  =() =>{
    const allReadList = localStorage.getItem('readList')
    console.log(allReadList ,"ReadList from local db");

    if(allReadList) return JSON.parse(allReadList)
    
    return[];

}



const addReadListToLocalDB = (book) =>{
    const allBooks = getAllReadListFromLocalDB()
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    if(!isAlreadyExist ){

        // ei data local db te add korbo
        allBooks.push(book) 
        localStorage.setItem('readList' , JSON.stringify(allBooks))
    }

}
export{ getAllReadListFromLocalDB ,addReadListToLocalDB }