import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image className="avatar" src="/astronaut.jpg" />
        <ul>
          <li className="social-links">
            <i class="fa-solid fa-envelope"></i>
            <a href="#">bandaolga19@gmail.com</a>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-github"></i>
            <a href="#">Github</a>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-linkedin"></i>
            <a href="#">Linkdin</a>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-twitter"></i>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
