import { FC } from 'react';
import Head from 'next/head'

import styles from './MainLayout.module.css';
import { NavBar } from '../Navbar';

interface Props {
    children: React.ReactNode;
}
  

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    
    <div className={styles.container}>
        <NavBar></NavBar>
        <Head>
            <title>Home</title>
            <meta name="description" content="about page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>{ children }</div>
    </div>

    
  )
}
