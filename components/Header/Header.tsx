import Link from "next/link";

type NavLink = {
  name: string
  href: string
  current: boolean
}
const navItems: NavLink[] = [
  {  name: 'My Journey', href: '/', current: true },
  { name: 'Live Examples', href: '/About', current: false },
  { name: 'Blogs', href: '/Contact', current: false },
]


export default function Header() {
  return (
  <nav className="top-0 z-10">
    <div className="flex flex-row h-auto space-x-2 p-1 border border-gray-200 w-auto bg-gray-300 rounded-lg shadow-inner">
      {navItems.map((item,index)=> (
        <Link key={index} href={item.href} className={`${item.current ? 'bg-gray-200 text-gray-700 rounded-lg shadow' : 'text-gray-600'} flex items-center h-7 pl-2 pr-2 w-auto transition-all ease-in-out duration-500`}>
          {item.name}
        </Link>
      ))}
    </div>   
  </nav>
  )
}