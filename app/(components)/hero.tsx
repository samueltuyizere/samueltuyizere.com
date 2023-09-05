'use client'
import MyPicture from '../(assets)/(images)/mine.jpeg'
import Image from 'next/image'

export default function HeroSection(){
    return(
        <>
        <header className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Hi 👋,<br/> I am <span className="text-blue-500 ">TUYIZERE Samuel</span></h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">🚀 6+ yrs experienced Software Engineer bridging business & tech 💻, Expert in back-end & front-end dev , API wizard,  DB guru (SQL & NoSQL), 📱 Mobile app enthusiast (React Native) 🧐 Blockchain explorer 🚀 Leadership in automating payroll & bug fixes 🌍 Passionate traveler 🌏 Ready for new challenges.</p>
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={()=>{
                        window.location.replace('https://github.com/samueltuyizere')
                    }}>View Projects</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 h-screen">
                <Image className=" h-full lg:max-w-3xl" src={MyPicture.src} alt="My Picture"/>
            </div>
        </div>
    </div>
</header>
        </>
    )
}