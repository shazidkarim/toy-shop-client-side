import img1 from '../../../assets/banner img 1.jpg'
import img2 from '../../../assets/banner img 2.jpg'
import img3 from '../../../assets/banner img 33.jpg'
import img4 from '../../../assets/banner img 4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1}className="w-full rounded-lg" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-cyan-100 to-blue-100">
                    <div className='font-bold '>
                    <h1 className='text-6xl pb-4'>Affordable Toys For Kids</h1>
                    <p>There are many variety of Toys are avialable, you can choose whatever you want</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2}className="w-full rounded-lg" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-amber-200 to-amber-100">
                    <div className='font-bold '>
                    <h1 className='text-6xl pb-4'>Affordable Toys For Kids</h1>
                    <p>There are many variety of Toys are avialable, you can choose whatever you want</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-teal-200 to-teal-100">
                    <div className='font-bold '>
                    <h1 className='text-6xl pb-4'>Affordable Toys For Kids</h1>
                    <p>There are many variety of Toys are avialable, you can choose whatever you want</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-cyan-100 to-cyan-50">
                    <div className='font-bold '>
                    <h1 className='text-6xl pb-4'>Affordable Toys For Kids</h1>
                    <p>There are many variety of Toys are avialable, you can choose whatever you want</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;