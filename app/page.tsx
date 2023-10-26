import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='flex justify-center w-100 min-h-screen text-rose-700 flex-col gap-y-1 text-lg'>
        <Link href="/todos" className='flex justify-center p-5 hover:text-rose-400 mx-auto '>All Todos <pre> →</pre></Link>
        <Link href="/addtodo" className='flex justify-center p-5 hover:text-rose-400 mx-auto '>Add Your Todo <pre> →</pre></Link>
      </div>
    </>
  )
}
