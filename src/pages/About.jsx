import React from 'react'
import style from './About.module.css'
import firstPic from '../pages/images/firstPic.webp'
import secondPic from '../pages/images/secondPic.webp'
import thirdPic from '../pages/images/thirdPic.webp'

export const About = () => {

const quotes = [
  {image: firstPic, text: "Without TodoList, I literally can't work or handle all of my responsibilities as a parent and spouse", name: 'Khoi Vinh', position: 'Principal Designer at Adobe'},
  {image: secondPic, text: "I did all of my learning tasks in TodoList and in 2016 I was the first in my family to receive a bachelor's degree.", name: 'Samantha Houston', position: 'Developer'},
  {image: thirdPic, text: "TodoList gave us the focus to scale the company from 2 to 75 employees, $ 12M in venture capital investment, and 350+ satisfied enterprise customers.", name: 'Andrew Montalenti', position: 'CTO Parse.ly'},
  
]

  return (
    <div className={style.wrapper}>
      <h1>Unload your brain</h1>
      <div className={style.quotesWrapper}>       
        {quotes.map(({ image, text, name, position }) => {
          return (
            <div className={style.quoteBlock}>
              <div className={style.header}><span>{text}</span></div>
                <img className={style.quoteImage} src={image} alt='' />
              <div className={style.footer}>
                <span>{name}</span>
                <span>{position}</span>
              </div>
            </div>
          )
        })}
      </div> 
    </div> 
  )
}
