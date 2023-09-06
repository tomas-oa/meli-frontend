'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ResultsList from '@/components/ResultsList'
 
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

  if (results.length === 0) return (
    <main className='w-full bg-zinc-200 min-h-screen overflow-hidden grid place-items-center text-2xl'>
      <h1>
        No hay resultados para tu búsqueda {`:(`}
      </h1>
    </main>
  )

  return (
    <main className='w-full bg-zinc-200 min-h-screen overflow-hidden'>
      <ResultsList results={results} />
    </main>
  )
}