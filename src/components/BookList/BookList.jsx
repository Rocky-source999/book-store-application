import {Link} from 'react-router-dom'
import BookItem from '../BookItem/BookItem'
import Header from '../Header/header'
import { useEffect, useRef, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { IoSearchOutline } from 'react-icons/io5'
import "./BookList.css"

const BookList = () => {
  const [bookList,setBookList]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [userInput, setUserInput]=useState("")
  const inputRef=useRef()

  useEffect(()=>{
    const getBookList=async()=>{
      const apiUrl= "https://www.jsonkeeper.com/b/NQYEM"
      const response=await fetch(apiUrl)
      const fetchedData=await response.json()
      setBookList(fetchedData?.bookNames);
      setIsLoading(false)
    }
    getBookList()
  },[])

  const renderLoadingView=()=>(
      <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>
        <RotatingLines/>
      </div>
    ) 

    const onChangeSearchInput=(event)=>{
      setUserInput(event.target.value)
    }

    const searchBooks=bookList.filter((books)=>{
      return books.name.toLowerCase().includes(userInput.toLowerCase())
    })

    const search=()=>{
      inputRef.current.focus()
    }


    return (
      <div>
        <Link to="/books">
          <div className='search-input-cont'>
            <button className='search-btn'>
              <IoSearchOutline className='search-icon' onClick={search}/>
            </button>
            <input type='search'
              placeholder='Search Books'
              className='search-input'
              id='searchInput'
              value={userInput}
              onChange={onChangeSearchInput} 
              ref={inputRef}/>
          </div>
          <BookItem books={bookList} searchData={searchBooks}/>
        </Link>
        {isLoading? renderLoadingView():null }
      </div>
    )
}

export default BookList
