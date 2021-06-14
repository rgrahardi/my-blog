import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({externalPostData}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="/vercel.svg" alt="My Image" className="logo" />
        <h1 className={styles.title}>Welcome to My Blog</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/posts/first-post">
              <h3>First Post</h3>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>
          <div className={styles.card}>
            <Link href="/posts/second-post">
              <h3>Second Post</h3>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>
           {externalPostData.map((data) => {
            return (
              <div className={styles.card} key={data.id}>
                <Link href={data.link}>
                  <h3>{data.title}</h3>
                </Link>
                <p>{data.excerpt}</p>
              </div>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}


export async function getStaticProps() {
  const apiURL = "http://localhost:3001/posts";
  const response = await fetch(apiURL);
  const data = await response.json();

  return{
    props: {
      externalPostData:data,
    },
  }
}

