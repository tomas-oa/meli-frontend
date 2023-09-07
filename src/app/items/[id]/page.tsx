interface Props {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const { id } = params
  const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(res => res.json() as Promise<{
    id: string;
    title: string;
    price: number;
    currency_id: string;
    available_quantity: number;
    condition: string;
    thumbnail: string;
  }>)

  const { plain_text } = await fetch(`https://api.mercadolibre.com/items/${id}/description`).then(res => res.json())

  return (
    <article className="w-3/4 grid grid-cols-[55%,1fr] min-h-screen mx-auto gap-4 bg-white">
      <div className="col-span-1 flex flex-col items-center">
        <img className="h-2/3 aspect-auto" src={item.thumbnail} alt={item.title} />
        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-2xl text-slate-900">Descripción del producto</h2>
          <p className="text-sm text-slate-900">{plain_text}</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-4 p-4">
          <span className="text-xs capitalize">{item.condition} - {item.available_quantity} vendidos</span>
          <h1 className="text-xl text-slate-900">{item.title}</h1>
          <span className="text-4xl text-slate-900">{Number(item.price).toLocaleString('es-AR', { style: 'currency', currency: item.currency_id })}</span>
          <button className="py-2 rounded-sm bg-sky-300 text-white flex justify-center items-center">
            Comprar
          </button>
        </div>
      </div>
    </article>
  )
}