import { Link } from 'react-router-dom';
import errorimg from '../../assets/errorpage img.jpg'
const ErrorPage = () => {
    return (
        <div>
            <div className='w-50 mb-4'>
                <img src={errorimg} alt="" />
            </div>
            <div className='m-auto text-center'>
                <button className='p-5 rounded btn-primary'>
                    <Link to={'/'}>Return to Home Page</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;