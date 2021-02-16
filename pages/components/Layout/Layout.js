import Head from 'next/head'
import Link from 'next/Link'
import styles from './Layout.module.css'
import Brightness6Rounded from '@material-ui/icons/Brightness6Rounded'
import {useState,useEffect} from 'react'
// import DarkRounded from '@material-ui/icons/DarkRounded'
export default function Layout({children,title="Next App",description="def des"}) {
  const [theme, setTheme] = useState('light')

useEffect(() => {

document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark')
setTheme(localStorage.getItem('theme') || 'dark')

  return () => {
    
  };
}, [])


  const switchTheme = e =>{
    if (theme=='light') {
      saveTheme('dark')
    }else {
      saveTheme('light')

    }
  }

  const saveTheme = (theme) =>{
      setTheme(theme)
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>

      <Link href={`/`}>Website Title</Link>

      <button onClick={switchTheme} className={styles.themeSwitcher}>
          <Brightness6Rounded/>
      </button>

       

      </header>

      <main className={styles.main}>

{children}
      </main>

      <footer className={styles.footer}>
footer
      </footer>
    </div>
  )
}