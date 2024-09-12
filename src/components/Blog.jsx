import { IoMdBookmarks } from "react-icons/io";


const Blog = ({blog}) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} = blog
    return (
        <div className="space-y-6">
            <img className="rounded-xl mb-4" src={cover} alt="cover" />
            <div className="flex justify-between items-center">
                <div className="flex">
                    <div>
                        <img className="w-12 rounded-full" src={author_img} alt="author image" />
                    </div>
                    <div className="ml-6">
                        <h3 className="font-bold">{author}</h3>
                        <p className="text-xs text-slate-700">{posted_date}</p>
                    </div>
                </div>
                <div className="mr-16">
                    <span className="text-sm text-slate-700">{reading_time} min read</span>
                    <button>
                        <IoMdBookmarks className="text-xl ml-2" />
                        </button>
                </div>
            </div>
          <div className="text-left">
          <h2 className="text-4xl">{title}</h2>
          <p className="my-4">
            {
                hashtags?.map((hashtag, idx)=>
                    <span key={idx}><a href="">#{hashtag}</a></span>
                )
            }
          </p>
          <button className="text-purple-900 underline font-bold">mark as read</button>
          </div>
        </div>
    );
};

export default Blog;