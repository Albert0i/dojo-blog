import BlogList from './BlogList';
import useFetch from './useFetch';
import { HOST_URI } from './conn'

const Home = () => {
    const { data: blogs, isPending, error} = useFetch(HOST_URI)
    console.log(HOST_URI)
    return (
      <div className="home">
        { error && <div><h1>{ error }</h1></div> }
        { isPending && <div><h1>Loading...</h1></div> }
        { blogs && <BlogList blogs={blogs} title={`All Blogs (${blogs.length})`} /> }
        { blogs && blogs.length===0 &&<div><h2>No data</h2></div> }
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
/*
    npx json-server --watch data/db.json --port 8000
*/