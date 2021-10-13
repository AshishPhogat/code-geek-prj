import React from "react";
import {AiOutlineStar} from "react-icons/ai";


const CourseCard=(props)=>{
    return <> 
        <div className="bg-white pb-2 flex flex-col justify-between  gap-1 hover:shadow-md w-64">
                <div className="flex flex-col gap-2">
                    <div className="w-64 relative h-56 object-cover">
                        <img className="w-full h-full  rounded-t-md " src={props.image} alt="course" />
                        <h3 className="absolute top-2 right-2 bg-white bg-opacity-75 rounded p-1">₹{props.price}</h3>
                    </div>
                    
                        <div className="flex items-center px-1 justify-between">
                            <h3>{props.course}</h3>
                    </div>
                </div>

                    <div className="flex  items-center bottom-2 justify-between px-2 gap-2">
                        <button className="bg-blue-700 px-4 py-1 rounded-md text-white" >Add To Cart</button>
                        <h5 className="flex items-center p-1 rounded text-white bg-green-700">{props.rating}<AiOutlineStar className="text-yellow-400" /></h5>
                    </div>
        </div>
    </>
}

export default CourseCard ;