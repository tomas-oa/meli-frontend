'use client'

export default function SearchBar () {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query = new FormData(event.currentTarget).get('query')

    if (query) {
      window.location.href = `/items?search=${query}`
    }
  }

  return (
    <>
      <header className="h-16 min-w-full bg-yellow-300 flex justify-center items-center">
        <div className="w-3/4">
          <form className="flex" onSubmit={handleSubmit}>
            <input name="query" className="w-full rounded-l-sm p-1 h-8 px-3 text-sm" type="text" placeholder="Nunca dejes de buscar"/>
            <button className="bg-slate-100 p-1 rounded-r-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
            </button>
          </form>
        </div>
      </header>
    </>
  )
}