import {useState} from 'react'
const Contact = () => {
    // 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
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit=()=>{
        const data = {
            to: 'SENDER-EMAIL',
            from: 'RECEIVER-EMAIL',
            subject: `Tailgradient, message from ${name}`,
            text: message,
            html: message.replace(/\r\n/g, '<br />'),
          };
        
    }
  return (
    <div className='bg-black p-12'>
    <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2> 
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-2">
            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="mt-2">+919814701801</span>
            </a>

            <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="mt-2">tetraxgalious@gmail.com</span>
            </a>
        </div>
        
        <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" 
                    onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" 
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

                <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                onChange={e => setMessage(e.target.value)}
                ></textarea>
            </div>

            <div className="flex justify-center mt-6">
                <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={handleSubmit}>Send Message</button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact