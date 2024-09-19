import profile from "../assets/images/profile.png"
const Title = () => {
    return (
        <div className="max-w-7xl mx-auto">
             <div className="flex justify-between items-center p-4">
                <div>
                        <h1 className="text-3xl text-purple-600 font-bold capitalize">knowledge cafe</h1>
                </div>
                 <div>
                      <img className="w-8" src={profile} alt="profile" />
                 </div>
             </div>
             <hr />
        </div>
    );
};

export default Title;