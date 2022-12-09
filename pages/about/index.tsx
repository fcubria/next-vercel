import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from '../../components/layouts/MainLayout';
import styles from '../../styles/Home.module.css';

export default function AboutPage() {
  return (
    <h1 className={styles.title}>
      about
    </h1>
  )
}


AboutPage.getLayout = function getLayout ( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
