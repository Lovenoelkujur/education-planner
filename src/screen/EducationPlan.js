import React, { useState } from 'react'
import "./EducationPlan.css"
import { Button } from './../component/Button';
import { CourseCard } from '../component/CourseCard';


export const EducationPlan = () => {

  const [courseData, setCourseData] = useState([]);

  const onClickHandler = () => {
    
    //Extract value of course Name
    const courseName = document.getElementById("course-name").value;

    //Extract value of course Hour
    const courseHours = document.getElementById("course-hours").value;

    //Create object
    const newCourseData = {
      name : courseName,
      hours : parseInt(courseHours)
    }

    //push object inside Course Data
    setCourseData([...courseData, newCourseData])

  }

  return (
    <div className="education-planner-main">
      <div className='ed-main-contain'>
        <h1>Education Planner</h1>

        <div className='user-input'>
          <input id='course-name' className='user-text' type='text' placeholder='Subject'></input>
          <input id='course-hours' className='user-num' type='number' placeholder='Hr'></input>
          <Button onClickProps={onClickHandler} bgColor="#3B82F9" textColor="#FFFFFF" className='btn-add'>Add</Button>
        </div>

        {/*------------ Display Course Data --------------*/}
        {courseData.map((course, index) => (
          <CourseCard name={course.name} hours={course.hours} key={index}></CourseCard>
        ))}
      </div>
      
    </div>
  )
}
