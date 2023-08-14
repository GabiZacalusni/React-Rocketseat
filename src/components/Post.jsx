/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "../components/Post.module.css";
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito legal!'
  ])

  const [newCommentText, setNewCommentText] = useState('');





  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)
  }


  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={author.avatarUrl}></Avatar>
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href='#'>{line.content}</a></p>
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea value={newCommentText} onChange={handleNewCommentChange} name="comment" placeholder="Deixe seu comentário"></textarea>

          <footer>
            <button type="submit">Publicar</button>
          </footer>


        </form>
        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Comment content={comment}/>
            );
          })}

        </div>

      </article>


    </>

  );
}