import React from 'react'

const Body = () => {
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center'>
                <img src="./assets/Blue-Shape.svg" alt="image1" className='-rotate-45 h-64 md:h-72' />
                <img src="./assets/Pink-Shape.svg" alt="image2" className='absolute -rotate-[30deg] h-64 md:h-72' />
                <img src="./assets/Purple-Shape.svg" alt="image3" className='absolute -rotate-[15deg] h-64 md:h-72' />
                <img src="./assets/Hero-Model.png" alt="image4" className='absolute h-64 md:h-72' />
            </div>
            <div>
                <h1 className='text-5xl font-bold font-playfair leading-tight'>Host Your WebSite In Less Than 2 Minites</h1>
                <p>With Hosterr, Get Your Website Up And running In Less Than 5 min With Most Compatative Pricing Packages Avaliable Online.</p>
                <form action="" className='flex flex-col gap-4 md:flex-row'>
                    <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='emter your email'/>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-400 text-white'>Join WaitList</button>
                </form>
                <div className='flex gap2'>
                    <img src="./assets/Checkmark.svg" alt="Check" />
                <p className='font-lato text-gray-400'>No spam ,ever . Unsudscribe Any time</p>
                </div>



            </div>
        </div>
    )
}

export default Body