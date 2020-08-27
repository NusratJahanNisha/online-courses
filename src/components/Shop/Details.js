import React from 'react';
import fakeData from '../../fakeData/fakeData.js';
import { useState } from 'react';
import Courses from '../Courses/Courses.js';
import Cart from '../Cart/Cart.js';


const Details = (course) => {
    console.log(fakeData);
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const handleAddCourse= (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
        console.log('course added', course);
    }

    return (
        <div className="row">
             <div className="col-md-1"></div>
                <div className='col-md-7' >
                        {courses.map(course => <Courses handleAddCourse={handleAddCourse}  key={course.id} course={course}></Courses>)}          
                </div>
               
                <div className="col-md-3">          
                   <Cart cart={cart}></Cart>
                </div>
                <div className="col-md-1"></div>
        </div>
    );
};

export default Details;