import React from 'react'
import { useHistory } from 'react-router'
import style from './Home.module.css'

export const Home = () => {

const history = useHistory()

  return (
    <div className={style.wrapper}>
      <h1 className={style.header}>Todo app</h1>
      <div><span className={style.text}>From chaos to structure</span></div>
      <div><span className={style.text}>TodoList gives you the assurance that everything is organized and taken into account so you can succeed in the things that matter to you.</span></div>
      <div><span className={style.text}>Get everything in order with TodoList</span></div>
      <button className={style.button} onClick={() => history.push('/todos')}>Get start</button>
    </div>
  )
}
