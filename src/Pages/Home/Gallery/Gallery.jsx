
import gallery1 from '../../../assets/gallery 1.jpg'
import gallery2 from '../../../assets/gallery 2.jpg'
import gallery3 from '../../../assets/gallery 3.jpg'
import gallery4 from '../../../assets/gallery 4.jpg'
import gallery5 from '../../../assets/gallery 5.jpg'
import gallery6 from '../../../assets/gallery 6.jpg'
import gallery7 from '../../../assets/gallery 7.jpg'
import gallery8 from '../../../assets/gallery 8.jpg'
import gallery9 from '../../../assets/gallery 9.jpg'
import gallery10 from '../../../assets/gallery 10.jpg'
const Gallery = () => {
    return (
        <div className='mt-8  bg-sky-200'>
            <div className='text-5xl text-bold text-center pt-8 mb-8'>
                <h1>OUR SHOP GALLERY</h1>
            </div>
            <div className='w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5'>
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
                <img src={gallery6} alt="" />
                <img src={gallery7} alt="" />
                <img src={gallery8} alt="" />
                <img src={gallery9} alt="" />
                <img src={gallery10} alt="" />
            </div>
        </div>
    );
};

export default Gallery;