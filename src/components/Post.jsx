/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "../components/Post.module.css";



export function Post({author, publishedAt}) {
  
  const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix:true,
  })
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

          <time title={publishedDateFormatted} dateTime="2023-08-09 21:37:35">
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}></div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe seu comentário"></textarea>

          <footer>
            <button type="submit">Publicar</button>
          </footer>


        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />

        </div>

      </article>


    </>

  );
}