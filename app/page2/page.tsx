import Link from "next/link";

const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  // console.log(data.length);

  return data.results;
};

export default async function Page() {
  const characters = await getCharacters();

  return (
    <div className="">
      <h1>Pagina 2</h1>
      <Link href="/" className="link">
        Ir a pagina 1
      </Link>
      <div>
        {characters.map((c: any) => {
          return (
            <div
              key={c.id}
              style={{ border: "3px black solid", marginBottom: "10px" }}
            >
              <div>Nombre:{c.name}</div>
              <div>Id:{c.id}</div>
              <div>Especie:{c.species}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
