import { Comment } from './Comment'

import { Avatar } from './Avatar'

import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.profilePostContainer}>
          <Avatar src="https://github.com/diego3g.png" />

          <div className={styles.authorInfoContainer}>
            <strong>Name Static</strong>
            <span>Ocupation Static ...</span>
          </div>
        </div>

        <time title="13 de Junho às 12h30" dateTime="2023-06-13 12:30:30">
          Há cerca de 1h
        </time>
      </header>

      <div className={styles.postTextContent}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
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