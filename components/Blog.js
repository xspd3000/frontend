import Link from 'next/link'

import { useState } from 'react'

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.data)
  return (
<section className="text-gray-400 bg-black body-font">
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-wrap -m-4">
    {
    blogs.map((element)=>{
      return(
        <div className="p-4 md:w-1/3 bg-black" key={element.title}>
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
            {/* Image */}
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={element.thumbnail} alt="blog" height={"402"} width={"722"} />
            {/* line */}
            <div className=" bg-gradient-to-r from-rose-700 via-blue-800 to-emerald-600 h-1 w-full"></div>
            <div className="p-6">
              {/* <!-- //CATEGORY --> */}
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">CATEGORY</h2>
    
              {/* <!-- CATEGORY name --> */}
              <h1 className="title-font font-bold mb-3 text-cyan-500">{element.category}</h1>

              {/* title */}
              <h1 className="title-font text-lg font-medium mb-3 text-white">{element.title}</h1>
    
              {/* <!-- Description --> */}
              <p className="leading-relaxed mb-3 text-emerald-500 font-bold">{element.description}</p>
    
              {/* <!-- Url Slug --> */}

              <div className="flex items-center flex-wrap ">
              <Link href={`http://localhost:3000/posts/${element.slug}`}>
                 <a className="text-white font-bold inline-flex items-center md:mb-2 lg:mb-0  bg-gradient-to-r from-rose-700 via-blue-800 to-emerald-600 p-1">Click here to read the post
    
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
    
                </a>
                </Link>
              </div>
            
            </div>
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