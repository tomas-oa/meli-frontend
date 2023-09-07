import ResultsList from "@/components/ResultsList";

interface Props {
  searchParams: {
    query: string;
  };
}

export default async function SearchBar({ searchParams }: Props) {
  const { query } = searchParams;
  const { results, filters } = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
  ).then(
    (res) =>
      res.json() as Promise<{
        results: {
          id: string;
          title: string;
          price: number;
          thumbnail: string;
          currency_id: string;
          seller_address: {
            city: {
              name: string;
            };
          };
        }[];
        filters: {
          values: {
            name: string;
          }[];
        }[];
      }>
  );

  if (results.length === 0) {
    return (
      <section className="w-full min-h-screen grid place-content-center">
        <h1 className="text-2xl text-center">No se encontraron resultados para tu búsqueda {`:(`}</h1>
      </section>
    )
  }

  return (
    <main className="w-full bg-zinc-200 min-h-screen overflow-hidden">
      <nav className="w-3/4 mx-auto flex justify-start gap-3 my-1.5">
        {filters.map((filter) => (
          <small key={filter?.values[0].name}>
            {filter.values[0].name}
            {` >`}
          </small>
        ))}
      </nav>
      {<ResultsList results={results} />}
    </main>
  );
}
