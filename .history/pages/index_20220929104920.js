import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          className="avatar"
          src="/astronaut.jpg"
          width={200}
          height={200}
        />
        <ul>
          <li>
            <a href="#">bandaolga19@gmail.com</a>
          </li>
          <li>
            <i class="fa-brands fa-github"></i>
            <a href="#">Github</a>
          </li>
          <li>
            <i class="fa-brands fa-linkedin"></i>
            <a href="#">Linkdin</a>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
