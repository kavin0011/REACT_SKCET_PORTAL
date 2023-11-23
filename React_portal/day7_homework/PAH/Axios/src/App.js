import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const[list,setList] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      setList(response.data);
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
  })
  return (
    <div>
      {list.map(post=><h1> {post.id} {post.title}</h1>)}
    </div>
  )
}

export default App
