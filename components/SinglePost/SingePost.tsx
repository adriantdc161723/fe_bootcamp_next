import React from "react"
import style from '../../styles/Post.module.css';
import PostComment from "../PostComment/PostComment";

const SinglePost: React.FC<any> = ({userID, postID, title, body, comments = []}) =>{
    return (
        <div className={style.post}>
            <div className={style.post_header}>
                <span className={style.post_id}>Post: {postID}</span>
            </div>
            <div className={style.post_body}>
                <h1 className={style.post_title}>{title}</h1>
                <p className={style.post_content}>{body}</p>
            </div>
            <div className={style.post_footer}>
                 <small className={style.post_userid}>Author User: {userID}</small>
            </div>

            {/* {comments goes here} */}
            <div className={style.comment_box}>
                <div className={style.post_comment_title}>
                    COMMENTS
                </div>

                {comments.map( (comment: any) =>(
                    <PostComment name={comment.name} email={comment.email} body={comment.body} key={comment.id}/>
                ))}
                
            </div>
        </div>
    )
}

export default SinglePost