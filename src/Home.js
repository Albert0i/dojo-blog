//import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //   setTimeout(()=>{
    //     fetch('http://localhost:8000/blogs')
    //       .then (res => { 
    //         if (!res.ok) 
    //           throw Error('Could not fetch data for that resource')
    //         return res.json() 
    //       })
    //       .then (data => { 
    //           setBlogs(data) 
    //           setIsPending(false)
    //           setError(null)
    //         })
    //       .catch(err => {
    //         console.log(err.message)
    //         setError(err.message)
    //         setIsPending(false)
    //       })
    //   }, 1000)
    // }, [])

    // function handleDelete(id) {
    //     const newBlogs = blogs.filter(e => e.id !== id)
    //     setBlogs(newBlogs)
    // }
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
      <div className="home">
        { error && <div><h1>{ error }</h1></div> }
        { isPending && <div><h1>Loading...</h1></div> }
        { blogs && <BlogList blogs={blogs} title='All Blogs' /> }        
      </div>
    );
  }
 
export default Home;

/*
    pass by reference with parameters: 
    
    const handleClick = (e) => {
        console.log('hello, ninjas', e.target)
    }
    const handleClickAgain = (name, e) => {
        console.log('hello, ' + name, e.target)
    }

    <button onClick={handleClick}>Click me</button>
    <button onClick={ (e) => handleClickAgain('mario', e) }>Click me again</button>
*/