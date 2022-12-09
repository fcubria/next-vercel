import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from '../../components/layouts/MainLayout';
import styles from '../../styles/Home.module.css';

export default function PricingPage() {
  return (
    <h1 className={styles.title}>
      pricing
    </h1>
  )
}


PricingPage.getLayout = function getLayout ( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
