import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Pagina 2</h1>
      <Link href="/" className="link">
        Ir a pagina 1
      </Link>
      <Link href="/page3" className="link">
        Ir a pagina 3
      </Link>
    </div>
  );
}
