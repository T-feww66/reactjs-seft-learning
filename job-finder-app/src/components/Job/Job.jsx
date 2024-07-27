import { BiTimeFive } from "react-icons/bi";

const datas = [
    {
        id: 1,
        title: "Web developer",
        time: "Now",
        country: "Canada",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisici elit. Impedit commodi labore quas quaerat rationecorrupti. Sequi reprehenderit voluptatibus nam sitnesciunt tempora doloribus, deleniti libero repellendusexpedita, iure rem in!",
    },
    {
        id: 2,
        title: "Front-end developer",
        time: "Now",
        country: "New York",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisici elit. Impedit commodi labore quas quaerat rationecorrupti. Sequi reprehenderit voluptatibus nam sitnesciunt tempora doloribus, deleniti libero repellendusexpedita, iure rem in!",
    },
    {
        id: 3,
        title: "Mobile fresher",
        time: "Now",
        country: "Viet Nam",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisici elit. Impedit commodi labore quas quaerat rationecorrupti. Sequi reprehenderit voluptatibus nam sitnesciunt tempora doloribus, deleniti libero repellendusexpedita, iure rem in!",
    },
    {
        id: 4,
        title: "Designner Website",
        time: "Now",
        country: "Chinna",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisici elit. Impedit commodi labore quas quaerat rationecorrupti. Sequi reprehenderit voluptatibus nam sitnesciunt tempora doloribus, deleniti libero repellendusexpedita, iure rem in!",
    },
];

function Job() {
    return (
        <div>
            <div className="job-container flex gap-10 justify-center items-center flex-wrap py-10">
                {datas.map((data, index) => {
                    return (
                        <div
                            key={data.id}
                            className="group group/item w-[260px] p-5 bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:bg-blueColor"
                        >
                            <div className="flex justify-between items-center">
                                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                                    {data.title}
                                </h1>
                                <span className="text-[13px] flex items-center justify-between gap-2">
                                    <BiTimeFive /> {data.time}
                                </span>
                            </div>
                            <h6 className="text-[#ccc]"> {data.country}</h6>
                            <p className="text-[14px] text-[#959595] pt-5 border-t-[2px] mt-5 group-hover:text-white">
                                {data.desc}
                            </p>

                            <button className="border-[2px] rounded-xl p-3 w-full text-[14px] font-semibold text-textColor group-hover:bg-white group-hover:text-blueColor">
                                Apply now
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Job;
