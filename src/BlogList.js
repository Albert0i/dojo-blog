
//const BlogList = (prop) => {
    // const blogs = prop.blogs
    // const title = prop.title
const BlogList = ({ blogs, title }) => {

    return (         
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => 
            <div className="blog-preview" key={blog.id} >
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
            )}
        </div>
     );
}
 
export default BlogList;

/*
    npx json-server --watch data/db.json --port 8000
*/