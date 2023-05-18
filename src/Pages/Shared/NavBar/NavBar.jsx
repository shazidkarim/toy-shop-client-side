
import { Link } from 'react-router-dom';
import logo from '../../../assets/toy shop logo.jpg'
const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to={'/'}>Home</Link> </li>
                        <li> <Link to={'/'}>Blog</Link> </li>
                        <li> <Link to={'/'}>All Toys</Link> </li>
                        <li> <Link to={'/'}>Login</Link> </li>

                    </ul>
                </div>
                <div className='w-1/2 flex'>
                    <img className='w-1/2' src={logo} alt="" />
                    <h2 className='font-black text-3xl m-auto text-[#e2bb21]'>TOY SHOP</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-2xl px-1 text-[#e2bb21] mr-4">
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li className='/'> <Link>Blog</Link> </li>
                    <li> <Link to={'/'}>All Toys</Link> </li>
                    <li> <Link to={'/'}>Login</Link> </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-warning text-[#e2bb21]">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;