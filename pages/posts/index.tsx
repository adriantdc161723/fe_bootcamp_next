import { Box, InputGroup, List, ListItem, Select} from "@chakra-ui/react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Post , User} from "../../types";

const Posts: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  
  const posts: Post[] = props.post_data;
  const users: User[] =  props.user_data;

  const [renderPosts, setRenderPost] = useState(new Array);

  const hangleUserChange = (value: number) => {
      const filteredPost = posts.filter( post => post.userId === value );
      setRenderPost( preVal => filteredPost );
  }

  return (
    <Box w={"full"} h={"fit-content"}>

      <Select onChange={(e)=>{
          hangleUserChange(parseInt(e.target.value));
      }} placeholder='Select User'>
        {users.map(user=>(
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </Select>

      <List>
        {renderPosts.map((post) => (
          <ListItem key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await postRes.json();

  const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await userRes.json();

  return { props: { post_data: postData, user_data: userData } };
};

export default Posts;
