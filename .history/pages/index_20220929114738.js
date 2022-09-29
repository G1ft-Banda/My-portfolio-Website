import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gift Banda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img className="avatar" src="/astronaut.jpg" />
        <ul>
          <li className="social-links">
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:bandaolga19@gmail.com">bandaolga19@gmail.com</a>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-github"></i>
            <a href="https://github.com/G1ft-Banda">Github</a>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/gift-banda-954151205/">
              Linkedin
            </a>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-twitter"></i>
            <a href="https://twitter.com/giftbanda00">Twitter</a>
          </li>
          <li className="social-links">
            <i class="fa-regular fa-computer-classic"></i>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
