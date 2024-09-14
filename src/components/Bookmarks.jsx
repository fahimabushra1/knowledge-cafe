import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/2">
        <div className="bg-slate-400 rounded-lg p-4 mb-4"><h2 className="text-3xl font-bold pt-2 pb-4 capitalize">spent time on read: {readingTime} min</h2></div>
           <div className="bg-slate-400 rounded-lg py-4 h-1/2">
           <h2 className="text-3xl font-bold pt-2 pb-4">Bookmarked Blogs: {bookmarks?.length}</h2>
          <div>
          {
            bookmarks?.map((bookmark, index)=>
            <Bookmark key={index} bookmark={bookmark} 
            />)
           }
          </div>
           </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}

export default Bookmarks;