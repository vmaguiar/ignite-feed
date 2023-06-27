import { Comment } from './Comment'

import { Avatar } from './Avatar'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.profilePostContainer}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfoContainer}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="13 de Junho às 12h30" dateTime={publishedAt}>
          Há cerca de ...
        </time>
      </header>

      <div className={styles.postTextContent}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p>{line.contentText}</p>
            }
            else if (line.type === 'link') {
              return <p><a href='#'>{line.contentText}</a></p>
            }
          })
        }
      </div>

      <form className={styles.postFooter}>
        <strong>Deixe seu feedback</strong>

        <textarea />

        <button type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}