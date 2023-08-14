
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../components/Comment.module.css";
import { Avatar } from "./Avatar";
export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jane Godall</strong>
              <time title="09 de agosto às 21h37" dateTime="2023-08-09 21:37:35">Publicado há 1h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>

          </header>
          <p>{props.content}</p>

        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

      

    </div>
  );
}