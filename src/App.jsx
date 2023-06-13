import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div className={styles.appContainer}>
      <Header />

      <div className={styles.container}>
        <SideBar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}