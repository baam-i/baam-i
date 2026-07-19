import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#9246b3] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i class='bx bx-diamond' ></i> I'm ...
                </div>
            </div>

            {/*main heading*/}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                not
                <br />
                dev
            </h1>

            {/*description*/}
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                dumb dev - dumb dev - dumb dev - dumb dev - dumb dev - dumb dev - dumb dev - dumb dev - dumb dev - dumb dev 
            </p>

            {/*buttons*/}
            <div className='flex gap-4 mt-15 my-4'>
                <a className='border border-[#a2a2a2] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#9246b3]' href='#'>
                    idk i followed a tutorial <i class='bx bx-link-alt'></i>
                </a>
                
                <a className='border border-[#a2a2a2] py-2 sm:py-3 px-4 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#9246b3] bg-gray-300 text-black hover:text-white' href='#'>
                    same <i class='bx bx-link-alt'></i>
                </a>
            </div>
        </div>
        
        {/*3d*/}
        <Spline  className='absolute lg:top-0 top-[-1%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full'
        scene="https://prod.spline.design/zvPRF0WC0nwCD8ys/scene.splinecode" />
    </main>    
  )
}

export default Hero
