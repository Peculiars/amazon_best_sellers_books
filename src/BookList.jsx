import React from 'react'
import Book from './Book'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'

const books = [
        {
        imageScr: img1,
        title: 'Unwoke: How to Defeat Cultural Marxism in America',
        author: 'Ted Cruz ',
        id: 1,
        },

        {
        imageScr: img2,
        title: 'Iron Flame (The Empyrean, 2) ',
        author: 'Rebecca Yarros' ,
        id: 2,
        },

        {
        imageScr:img3,
        title: 'The Woman In Me',
        author: 'Britney Spears',
        id: 3,
        },

        {
        imageScr: img4,
        title: 'Friends, Lovers, and the Big Terrible Thing: A Memoir',
        author: 'Matthew Perry',
        id:4,
        }
]
export default function BookList() {
  return (
    <>
    <h1 className='text-2xl mt-4 text-center capitalize font-bold'>amazon best sellers books</h1>
    <section className='w-90vw  mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:w-1/2 mt-8'>
        {books.map((book, index)=>{
                return (
                  <Book {...book} key={book.id} number={index}/>
                )
        })}
    </section>
    </>
  )
}
