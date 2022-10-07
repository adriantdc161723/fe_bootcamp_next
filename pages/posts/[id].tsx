import { Box } from "@chakra-ui/react";
import { error } from "console";
import type { 
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState, useLayoutEffect } from "react";
import SinglePost from "../../components/SinglePost/SingePost";
import { Post, Comment } from "../../types";


const getPost = async (id: any) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    const data = await response.json();
    return data;
}

const getComments = async (id: any) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const data = await response.json();
  return data;
}

const Post: NextPage = () => {

  const router = useRouter();
  const { id } = router.query;

  const initialPost: Post = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  }

  const initialComment: Comment[] = [{
    postId: 0,
    id: 0,
    name: "",
    email: "",
    body: ""
  }];

  const [post, setPost] = useState(initialPost);

  const [comments, setComments] = useState(initialComment);

  
  useLayoutEffect(()=>{

    getPost(id)
      .then( data => {
        setPost( () => data );
      });
    
    getComments(id)
      .then( data => {
        setComments( () => data );
      })

  },[]);

  return <SinglePost userID={post.userId} postID={post.id} title={post.title} body={post.body} comments={comments} />;

};




export default Post;
