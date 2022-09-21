import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import useFetch from "./useFetch";
import { HOST_URI, FETCH_DELAY } from './conn'

const EditDetails = () => {    
    const { id } = useParams()
    const { data: blog, isPending, error} = useFetch(HOST_URI + id)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); 
    const [isUpdating, setIsUpdating] = useState(false)
    const history = useHistory()
    
    useEffect(()=>{
        if (blog) {
            setTitle(blog.title)
            setBody(blog.body)
            setAuthor(blog.author)        
        }
    }, [blog])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setIsUpdating(true)
    
        setTimeout(() => {
          fetch(HOST_URI + id, {
            method: 'PUT', 
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(blog)
          }).then(()=>{
            console.log('blog updated')
            setIsUpdating(false)
            //history.go(-1)  // Go Back 
            history.push('/') // Go Home
          })
        }, FETCH_DELAY)
      }

    return ( 
        <div className="edit">
            { error && <div><h1>{ error }</h1></div> }
            { isPending && <div><h1>Loading...</h1></div> }   
            { blog && ( <div>
                            <h2>Edit a Blog</h2>
                            <form onSubmit={ handleSubmit }>            
                            <label>Blog title:</label>
                            <input 
                                type="text" 
                                required 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label>Blog body:</label>
                            <textarea
                                required
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                            <label>Blog author:</label>
                            <input 
                                type="text" 
                                required 
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                            {!isUpdating && (<button>Update Blog</button>) }
                            {isUpdating && (<button disabled>Updating Blog</button>) }
                            </form>                        </div>
                      )}
      </div>
     );
}
 
export default EditDetails;
