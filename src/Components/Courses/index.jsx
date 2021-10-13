import React,{useState,useEffect} from "react";

//component
import CourseCard  from "../CourseCard";


const Courses = ()=>{


    const courses = [{
        course : "Data Structures and Algorithms",
        image : "https://img-c.udemycdn.com/course/480x270/325552_4d62_14.jpg",
        rating : 4.3,
        time : 6,
        price : 999,
    },{
        course : "React-The Complete Guide(inc Hooks,Redux,etc)",
        image:"https://img-c.udemycdn.com/course/480x270/705264_caa9_11.jpg",
        rating : 4.5,
        time : 10,
        price : 1999,
    },{
        course : "c++",
        image:"https://img-c.udemycdn.com/course/480x270/3510530_ba44_2.jpg",
        rating : 4.5,
        time : 8,
        price : 1500,
    },{
        course : "Advanced Data Structures & Algorithms in C",
        image:"https://img-c.udemycdn.com/course/480x270/3617324_ada9.jpg",
        rating : 4.5,
        time : 10,
        price : 1999,
    },{
        course : "The Game Theory Algos in Competetive Programming",
        image:"https://img-c.udemycdn.com/course/480x270/3878780_e8d5_7.jpg",
        rating : 4.4,
        time : 5,
        price : 1799,
    },{
        course : "Data Structures and Algorithms",
        image : "https://img-c.udemycdn.com/course/480x270/325552_4d62_14.jpg",
        rating : 4.3,
        time : 6,
        price : 999,
    },{
        course : "React-The Complete Guide(inc Hooks,Redux,etc)",
        image:"https://img-c.udemycdn.com/course/480x270/705264_caa9_11.jpg",
        rating : 4.5,
        time : 10,
        price : 1999,
    },{
        course : "c++",
        image:"https://img-c.udemycdn.com/course/480x270/3510530_ba44_2.jpg",
        rating : 4.5,
        time : 8,
        price : 1500,
    },
];

    return <> 

       <div >
            <div className="container relative mx-auto bg-purple-500 shadow-lg rounded-lg ">
                <button className="bg-black absolute right-3 bottom-3 px-4 rounded-md py-2 text-white"> More</button>
                <h1 className={`text-6xl  text-white text-center hover:text-purple-600 hover:bg-white`}>Courses We Support</h1>
            </div>
            
            <div className={`px-20 flex flex-wrap justify-between gap-4 py-10`}>
                {
                    courses.map((course)=>{
                        return <CourseCard {...course} />
                    })
                }
            </div>
       </div>
       
    </>
}

export default Courses ;