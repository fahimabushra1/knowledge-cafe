
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Title from './components/Title'

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [readingTime, setReadingTime] = useState(0);
 const [like, setLike] = useState(false);

 const handleAddToBookmark = (blog)=>{
const newBookmarks = [...bookmarks, blog];
 setBookmarks(newBookmarks);
 setLike(!like);
 }
 const handleMarkAsRead = (id, time)=>{
const newMarkAsRead = readingTime + time;
 setReadingTime(newMarkAsRead);
 const  remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !== id);
 setBookmarks(remainingBookmarks)
 }

  return (
    <>
 <Title/>
 <div className='md:flex max-w-7xl mx-auto mt-4'>
<Blogs
handleAddToBookmark={handleAddToBookmark}
handleMarkAsRead={handleMarkAsRead}
like={like}
/>
<Bookmarks 
bookmarks={bookmarks}
readingTime={readingTime}
/>
 </div>
    </>
  )
}

export default App
