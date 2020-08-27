import React from 'react';

const Courses = (props) => {
    const {name,price,totalVideo,rating, instructor} = props.course;
    const styleBox={ boxShadow:'7px 7px 10px yellow', margin: '15px', padding: '10px',borderRadius:'20px'}
    const greyStyle ={color: 'grey'}
    return (
        <div style={styleBox}>
            <h2>Course Name: <b>{name}</b> </h2>
            <h3 style={greyStyle}>Total Module: <b> {totalVideo}</b></h3>
            <h3 style={greyStyle}>Rating: <b> {rating}</b></h3>
            <h3 style={greyStyle}>Instructor: <b> {instructor}</b></h3>
            <h2>Price: <b>$ {price}</b></h2>
            <button className="btn btn-warning"  onClick={()=>props.handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Courses;