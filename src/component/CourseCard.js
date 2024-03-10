import React, { useState } from 'react'
import "./CourseCard.css"
import { Button } from './Button'

export const CourseCard = ({name, hours, key}) => {

    const [hourValue, updateHourValue] = useState(hours)

  return (
    <div className='course-data' key={key}>
        <p>Course Name : <b>{name}</b> </p>
        <p>Course Hours : <b>{hourValue}</b> </p>
        <div className='btn-action'>
            <Button onClickProps={() => {updateHourValue(hourValue + 1)}} bgColor="darkgreen" textColor="#FFFFFF"><b>+</b></Button>
            <Button onClickProps={() => {updateHourValue(hourValue - 1)}} bgColor="darkred" textColor="#FFFFFF"><b>-</b></Button>
        </div>
    </div>
  )
}
