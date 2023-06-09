import { Header } from './components/Header'
import { SideBar } from './components/SideBar'

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div className={styles.appContainer}>
      <Header />

      <div className={styles.container}>
        <SideBar />

        <main className={styles.feedContainer}>
          Posts & comments
        </main>
      </div>
    </div>
  )
}