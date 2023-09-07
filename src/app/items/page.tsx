import ResultsList from '@/components/ResultsList'
 
interface Props {
  searchParams: {
    query: string
  }
}

export default async function SearchBar ({searchParams}: Props) {
  const { query } = searchParams
  const { results } = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`).then(res => res.json() as Promise<{ 
    results: {
      id: string;
      title: string;
      price: number;
      thumbnail: string;
      currency_id: string;
      seller_address: {
        city: {
          name: string;
        }
      }
    }[]
  }>)

  return (
    <main className='w-full bg-zinc-200 min-h-screen overflow-hidden'>
      {<ResultsList results={results} />}
    </main>
  )
}