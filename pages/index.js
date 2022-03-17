import Footer from '../components/Footer'
import Head from 'next/head'
import Blog from '../components/Blog'
import * as fs from 'fs'
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Tailgradient</title>
        <link rel="favicon" href="../public/favicon.svg"/>
        
      </Head>
      
      <Blog data={props.allBlogs}/>
      
    </>
  )
}

export async function getStaticProps(context) {
  
  let data = await fs.promises.readdir("data/posts");
  let myfile; 
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
        myfile = await fs.promises.readFile(('data/posts/' + item), 'utf-8') 
        allBlogs.push(JSON.parse(myfile))
    }

  return {
    props: {allBlogs} 
  }
}