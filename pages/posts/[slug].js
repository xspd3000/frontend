import React, { useState } from 'react'
import * as fs from 'fs';
import Head from 'next/head'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
import Image from 'next/image' 

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
    <Head>
      <meta name="description" content={blog && blog.description} />
    </Head>
    <section className="text-gray-400 bg-black body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={blog && blog.thumbnail} height={"700"} width={"702"}/>
        <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{blog && blog.title}</h1>
            <div className="text-white">
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
            </div>

        </div>
    </div>
    </section>
    </>

  )
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir("/projects/tailgradient/frontend/data/posts")
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })
  // console.log(allb)
  return {
    paths: allb,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`data/posts/${slug}.json`, 'utf-8')

  return {
    props: {
       myBlog: JSON.parse(myBlog)
   }, // will be passed to the page component as props
  }
}
export default Slug;