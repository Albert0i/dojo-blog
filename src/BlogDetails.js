import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import useFetch from "./useFetch";
import { HOST_URI } from './conn'

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error} = useFetch(HOST_URI + id)
    const history = useHistory()
    
    const handleEdit = () => {
        console.log('edit')
    }
    const handleDelete = () => {
        fetch(HOST_URI + id, {
            method: 'DELETE'
        }).then(()=>{
            console.log('blog deleted')
            //history.go(-1)  // Go Back 
            history.push('/') // Go Home
          })
    }
    return ( 
        <div className="blog-details">
            { error && <div><h1>{ error }</h1></div> }
            { isPending && <div><h1>Loading...</h1></div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button className="blog-details-edit" onClick={handleEdit}>edit</button>
                    <button className="blog-details-delete" onClick={handleDelete}>delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;