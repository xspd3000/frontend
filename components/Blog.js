import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.data)
  return (
<section className="text-gray-400 bg-black body-font">
<div className="container px-5 py-24 mx-auto">
<div className="grid grid-rows-1 md:grid-cols-3 gap-10 -m-4">
    {
    blogs.map((element)=>{
      return(
      
        <div className="max-w-sm mx-auto w-80  md:w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" key={element.slug}>
            <Image className={"object-cover object-center w-full h-56"} src={"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} alt={"avatar"} />
            
            <div className="flex items-center px-6 py-3 bg-gray-900">
                
                <h1 className="mx-3 text-lg font-semibold text-white">{element.category}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{element.title}</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">{element.description}</p>
                
                <Link href={`/posts/${element.slug}`}>
                  <a>
                  <button className="px-4 py-2 font-medium my-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Click here to read more 
                </button>
                  </a>
                </Link>
                
            </div>
        </div>
      )
    })
    }


</div>
</div>
</section>
  )
}

export default Blog 