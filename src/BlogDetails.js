import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)

    return ( 
        <div className="blog-details">
            { error && <div><h1>{ error }</h1></div> }
            { isPending && <div><h1>Loading...</h1></div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;