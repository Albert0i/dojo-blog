import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    
    const handleEdit = () => {
        console.log('edit')
    }
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            console.log('blog deleted')
            //history.go(-1)
            history.push('/')
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