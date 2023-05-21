import { Link } from 'react-router-dom';
import './SectionOne.css'

const SectionOne = () => {
    return (
        <div className=' m-10'>
            <div className="text-center custom-bg">
                <h1 className='font-bold pt-6 m-4'>BEST TOYS STORE</h1>
                <h1 className='italic text-6xl p-8'>Smart toys for smart babies</h1>
                <p className='pb-5'>In this shop you can find best of our collection. Now choose your favorite Doll on your own. there are many variety of dolls in here</p>
                <button className="btn m-8 btn-primary"> <Link to={'/alltoys'}>See All Toys</Link> </button>
            </div>
        </div>
    );
};

export default SectionOne;