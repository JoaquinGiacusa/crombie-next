import Link from "next/link";
import { Form } from "components";

export default function Page({ params }: any) {
  const { input } = params;

  return (
    <div>
      <Form></Form>
      <h3>{input}</h3>
      <Link href={"/"}>Ir al inicio</Link>
    </div>
  );
}
