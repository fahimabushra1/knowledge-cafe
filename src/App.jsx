
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Title from './components/Title'

function App() {
 

  return (
    <>
 <Title/>
 <div className='md:flex max-w-7xl mx-auto mt-4'>
<Blogs/>
<Bookmarks/>
 </div>
    </>
  )
}

export default App
