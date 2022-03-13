import Link from 'next/link'

const Header = () => {
  return (
    <div className='sticky top-0 z-50'>
      
        <div className="p-6 bg-black text-white text-center">
            <span className=" bg-gradient-to-r from-rose-700 via-blue-800 to-emerald-600 font-bold md:text-xl rounded-lg p-2">Tailgradient</span>
        </div>

        <div className=" w-full p-3 pr-3 bg-gradient-to-r from-rose-700 via-blue-800 to-emerald-600">
            
              <ul className="flex md:space-x-11 space-x-6 font-bold text-white justify-center items-center">
                 <li className="hover:cursor-pointer"></li>
                <Link href={"/"}><li className="hover:cursor-pointer">Home</li></Link> 
                <Link href={"/"}><li className="hover:cursor-pointer">About Us</li></Link>
                <Link href={"/"}><li className="hover:cursor-pointer">Contact Us</li></Link>
              </ul>
            
        </div>
    </div>
  )
}

export default Header   