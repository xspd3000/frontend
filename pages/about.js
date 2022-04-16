import Image from 'next/image'
import profile from '/public/profile.webp'
const about = () => {
  return (
    <section className="text-white bg-black body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" height={"270"} width={"402"} alt="hero" src={profile} />
        <div className="text-center lg:w-2/3 w-full mt-4">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Tailgradient</h1>
        <p className="leading-relaxed mb-8">There are numerous issues that are exceptionally simple to address yet the techniques are very lenthy or they are a lot of tedious. So , the fundamental point of blog is to take care of a portion of your concerns by giving tools or expressing simple strategies and furthermore increaing information.</p>
        </div>
    </div>
    </section>
  )
}

export default about