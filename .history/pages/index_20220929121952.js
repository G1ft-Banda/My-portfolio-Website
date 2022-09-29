import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gift Banda</title>
        <meta name="description" content="Olga Banda Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img className="avatar" src="/astronaut.jpg" />
        <ul>
          <li className="social-links">
            <i class="fa-solid fa-envelope"></i>
            <Link href="mailto:bandaolga19@gmail.com">
              <a>bandaolga19@gmail.com</a>
            </Link>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-github"></i>
            <Link href="https://github.com/G1ft-Banda">
              {" "}
              <a>Github</a>
            </Link>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-linkedin"></i>
            <Link href="https://www.linkedin.com/in/gift-banda-954151205/">
              <a>Linkedin</a>
            </Link>
          </li>
          <li className="social-links">
            <i class="fa-brands fa-twitter"></i>
            <Link href="https://twitter.com/giftbanda00">
              <a>Twitter</a>
            </Link>
          </li>
          <li className="social-links">
            <i class="fa-solid fa-code"></i>
            <Link></Link>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
