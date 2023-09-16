/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css"; 
import Cart from "../carts/cart";
const Home = () => {
  const [courses, setcourses] = useState([]);
  const [selectedCourses , setselectedcourses] = useState([]);
  const [remaning,setRemaning]  = useState(0);
  const [totalCost , setTotalCost] = useState(0);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setcourses(data));
  }, []);
  const handleSelect = (course) => {
    const isExist = selectedCourses.find(item=>item.id ==course.id)
    let count = course.credit 
    if (isExist) {
       return alert('already selected')
    } else{
        selectedCourses.forEach((item)=>{
            count+=item.credit;
        });
        const totalRemaning = 20- count;
        setTotalCost(count)
        if (count > 20) {
            return alert ('You first watch the 20 hr video');
        }
        setRemaning(totalRemaning);
        setselectedcourses([...selectedCourses, course]);
    }
  };
  return (
    <>
      <h1>Course Registration</h1>
      <div className="container">
        <div className="home-container">
          <div className="card-container">
            {courses.map((course) => (
              <div key={course.id} className="card">
                <img className="photo" src={course.img} alt="" />
                <h3 className="title">{course.title}</h3>
                <p>
                  <small>{course.details}</small>
                </p>
                <div className="info">
                  <p>price: {course.price}</p>
                  <p>credit: {course.credit}hr</p>
                </div>
                <button onClick={() => handleSelect(course)} className="card-btn">
                  Select
                </button>
              </div>
            ))}
          </div>
          <div className="cart">
           <Cart selectedCourses ={selectedCourses} remaning = {remaning} totalCost = {totalCost}></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
