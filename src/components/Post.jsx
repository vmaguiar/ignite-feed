import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.profilePostContainer}>
          <img src="https://avatars.githubusercontent.com/u/27768392?v=4" alt="foto de perfil" />

          <div className={styles.authorInfoContainer}>
            <strong>nome sobrenome</strong>
            <span>cargo ...</span>
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

      <div className={styles.postFooter}>
        <strong>Deixe seu feedback</strong>

        <textarea />

        <button>Publicar</button>
      </div>
    </article>
  )
}