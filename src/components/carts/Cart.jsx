/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourses,remaning,totalCost}) => {
    console.log(selectedCourses);
    return (
        <div>
            <h2>Credit Hour Remaining:{remaning}  hr</h2>
            <hr />
        <h1>Course Name</h1>
        {
            selectedCourses.map((course)=>(
                <li key={course.id}>{course.title}</li> 
            ))
        } 
        <hr />
        <h2>Total Credit Hour :{totalCost}</h2>          
        </div>
    );
};

export default Cart;