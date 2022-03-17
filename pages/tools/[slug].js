import React, { useState } from 'react'
import * as fs from 'fs';
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {

  const Tool = dynamic(() => import(`../../data/tools/scripts/${props.meta.script}`))

  return (
    <>
    <Tool />
    
    </>

  )
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir("data/tools/meta")
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })
//   console.log(allb)
  return {
    paths: allb,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let meta = await fs.promises.readFile(`data/tools/meta/${slug}.json`, "utf-8")

  return {
    props: {
       meta: JSON.parse(meta),
       slug
   }, // will be passed to the page component as props
  }
}
export default Slug;