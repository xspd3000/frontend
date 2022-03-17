import Image from 'next/image'
const about = () => {
  return (
    <section className="text-white bg-black body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" height={"270"} width={"402"} alt="hero" src="https://dummyimage.com/720x600" priority/>
        <div className="text-center lg:w-2/3 w-full mt-4">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Microdosing synth tattooed vexillologist</h1>
        <p className="leading-relaxed mb-8">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        </div>
    </div>
    </section>
  )
}

export default about