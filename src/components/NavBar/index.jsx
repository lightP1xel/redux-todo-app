import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

export const NavBar = () => {

  const navigationButtons = [
    {id: 1, to: '/', title: 'Home'},
    {id: 2, to: '/about', title: 'About'},
    {id: 3, to: '/todos', title: 'Todos'},
    {id: 4, to: '/APITodos', title: 'API'},
  ]

  return (
    <div className={style.wrapper}>
      {navigationButtons.map(({id, to, title}) => <Link className={style.link} key={id} to={to}>{title}</Link>)}
    </div>
  )
}
