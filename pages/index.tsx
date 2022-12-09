import { MainLayout } from '../components/layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
      Home
      </h1>
  </MainLayout>
  )
}
