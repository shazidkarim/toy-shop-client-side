import logo from '../../../assets/toy shop logo.jpg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div className='w-1/2'>
              <img className='w-1/2 border' src={logo} alt="" />
                <p>The Toy shop Ltd.<br />Providing reliable kids dolls since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">baby toys</a>
                <a className="link link-hover">Barbie Dolls</a>
                <a className="link link-hover">kids Collection</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;