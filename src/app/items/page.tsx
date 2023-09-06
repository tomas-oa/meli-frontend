'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const [results, setResults] = useState([])
  const [filters, setFilters] = useState([])
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  useEffect(() => {
    if (search) {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=5`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results)
          setFilters(data.filters)
        })
    }
  }, [])

  return (
    <main className='w-full bg-zinc-200 min-h-screen overflow-hidden'>
      <section className='w-3/4 mx-auto p-2 flex flex-col gap-5 bg-white justify-center'>
        {results.map((result: any) => (
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
        ))}
      </section>
    </main>
  )
}