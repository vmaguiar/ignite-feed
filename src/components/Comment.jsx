import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'


export function Comment({ contentText, onDeleteComment }) {
  const handleDeleteComment = () => {
    onDeleteComment(contentText)
  }

  return (
    <div className={styles.comment}>
      <Avatar noBorder src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Aguiar</strong>

              <time title="13 de Junho às 12h30" dateTime="2023-06-13 12:30:30">
                Há 1h atrás
              </time>
            </div>

            <button
              title='Deletar comentário'
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{contentText}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}