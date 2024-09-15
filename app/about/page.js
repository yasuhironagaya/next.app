import styles from "../page.module.css"
import Link from "next/link"

export const metadata = {
  title: "about | yasubay",

};

export default function page() {
  return (
    <>
     <h1 className={styles.aaa}>about</h1>
     <p><Link href="/">トップページに戻る</Link></p>
    </>
    )
}

