import Link from "next/link"

function Result ({ result }: { result: any }) {
  return (
    <Link href={`/items/${result.id}`}>
      <article key={result.id} className='flex h-40 w-full justify-between p-4'>
        <div className='flex gap-4'>
          <img className='object-contain' src={result.thumbnail} alt={result.title} />
          <div className='flex flex-col gap-2 justify-center w-72'>
            <h2 className='text-xl font-bold'>${result.price}</h2>
            <h3 className='text-sm'>{result.title}</h3>
          </div>
        </div>
        <aside className='flex justify-center items-center text-zinc-500'>
          <p>{result.address.state_name}</p>
        </aside>
      </article>
    </Link>
  )
}

export default function ResultsList({ results }: { results: any[]}) {
  return (
    <section className='w-3/4 mx-auto p-2 flex flex-col gap-5 bg-white justify-center'>
      {results.map(result => <Result result={result} />)}
    </section>
  )
}