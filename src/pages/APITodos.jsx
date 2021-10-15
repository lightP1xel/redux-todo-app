import React from 'react'
import useFetch from '../components/CustomHooks/useFetch'


const URL = 'https://jsonplaceholder.typicode.com/todos'

export const APITodos = () => {

  const { data } = useFetch(URL)
  console.log(data)

  return (
    <div>
     {/* {data.map((item)=>{
       return (
         <div className={style.wrapper}>
            <h1>{item.userId}</h1>
            <h1>{item.title}</h1>
         </div>
       )
     })} */}
     {/* <h1> fewgwrhgh</h1> */}
    </div>
  )
}
