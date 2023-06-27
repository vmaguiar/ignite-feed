import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", { locale: ptBr })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBr })

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

        <time title={formattedPublishedAt} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
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