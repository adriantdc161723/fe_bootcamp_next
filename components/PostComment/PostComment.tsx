import React from "react"
import style from '../../styles/Post.module.css';

const PostComment: React.FC<any> = ({name, email, body}) =>{
    return (
        <div className={style.post_comment}>
            <div className={style.post_comment_header}>
                <span className={style.post_comment_name}>{name}</span>
                <span className={style.post_comment_email}>{email}</span>
            </div>
            <div className={style.post_comment_body}>
                 <small>{body}</small>
            </div>
        </div>
    )
}

export default PostComment;