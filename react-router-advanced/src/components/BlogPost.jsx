import { useParams } from 'react-router-dom';

function BlogPost() {

  let { postId } = useParams();
  return <div>Blog Post ID: {postId}</div>;
}

export default BlogPost;


