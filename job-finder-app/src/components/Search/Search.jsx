import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouse } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Search() {
    return (
        <div className="search grid gap-10 bg-greyIsh rounded-[10px] p-[48px]">
            <form action="">
                <div className="form-group flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
                    {/* Search */}
                    <div className="search-input flex gap-2 items-center">
                        <AiOutlineSearch className="text-[25px] icon" />
                        <input
                            type="text"
                            className="outline-none border-none text-blue-500 w-full h-full"
                            placeholder="Search jobs here!"
                        />
                        <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
                    </div>

                    {/* House */}
                    <div className="search-input flex gap-2 items-center">
                        <BsHouse className="text-[25px] icon" />
                        <input
                            type="text"
                            className="outline-none border-none text-blue-500 w-full h-full"
                            placeholder="Search jobs here!"
                        />
                        <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
                    </div>

                    {/* Location */}
                    <div className="search-input flex gap-2 items-center">
                        <CiLocationOn className="text-[25px] icon" />
                        <input
                            type="text"
                            className="outline-none border-none text-blue-500 w-full h-full"
                            placeholder="Search jobs here!"
                        />
                        <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
                    </div>

                    <button className="text-white bg-blueColor rounded-lg w-[120px] h-[48px] hover:opacity-80">
                        Search
                    </button>
                </div>
            </form>

            <div className="select-job flex items-center justify-center gap-10">
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="relevance"
                        className="text-#808080 font-semibold"
                    >
                        Sort by:
                    </label>

                    <select
                        name=""
                        id="relevance"
                        className="bg-white rounded-sm px-4 py-1 outline-none border-none"
                    >
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Starts with</option>
                        <option value="">Contains</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label
                        htmlFor="type"
                        className="text-#808080 font-semibold"
                    >
                        Types:
                    </label>

                    <select
                        name=""
                        id="type"
                        className="bg-white rounded-sm px-4 py-1 outline-none border-none"
                    >
                        <option value="">Types</option>
                        <option value="">Full-time</option>
                        <option value="">Remote</option>
                        <option value="">Part-time</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label
                        htmlFor="level"
                        className="text-#808080 font-semibold"
                    >
                        Level:
                    </label>

                    <select
                        name=""
                        id="level"
                        className="bg-white rounded-sm px-4 py-1 outline-none border-none"
                    >
                        <option value="">Level</option>
                        <option value="">Beginner</option>
                        <option value="">Senior</option>
                        <option value="">Fresher</option>
                        <option value="">Intern</option>
                    </select>
                </div>

                <span className="cursor-pointer text-[#a1a1a1]">Clear all</span>
            </div>
        </div>
    );
}

export default Search;
