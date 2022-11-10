import Link from "next/link";
import { Router } from "next/router";
import { FormEventHandler } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { input } = router.query;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const input = e.target.input.value;
    router.push(`page3/${input}`);
  };
  return (
    <div>
      <h1>Pagina 2</h1>
      <div>
        <Link href="/" className="link">
          Ir a pagina 1
        </Link>
        <Link href="/page2" className="link">
          Ir a pagina 2
        </Link>
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name="input" />
        <input type="submit" />
      </form>

      <h3>{JSON.stringify(input)}</h3>
    </div>
  );
}
