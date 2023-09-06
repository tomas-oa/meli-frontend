import Link from "next/link"
import Icon from "./Icons"

export default function SearchBar () {
  return (
    <header className="h-16 w-full bg-yellow-300 flex justify-center items-center">
      <nav className="flex items-center w-3/4 mx-auto gap-1.5">
        <Link href={'/'}>
          <Icon />
        </Link>
        <div className="w-full">
          <form className="flex" action="/items">
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
      </nav>
    </header>
  )
}