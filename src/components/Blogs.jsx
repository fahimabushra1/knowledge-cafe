import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark,handleMarkAsRead, like}) => {
    const [blogs, setBlogs] = useState();


useEffect(()=>{
    fetch("blogs.json")
    .then(res=>res.json())
    .then(data=>setBlogs(data))
},[])

    return (
        <div className="w-2/3">
          {
              blogs?.map(blog=>
                <Blog
                key={blog.eid}
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
                like= {like}
                />
              )
          }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
    like: PropTypes.boolean
}

export default Blogs;