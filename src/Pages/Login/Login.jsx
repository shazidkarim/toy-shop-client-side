/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginphoto from '../../assets/login photo.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const[error,setError] =useState('');
    const[user,setUser] = useState('');
    const {signIn,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace: true});
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        if(password !== form.password.value){
            setError('password is incorrect')
            return
        }
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from,{replace: true});
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-5">
            <img src={loginphoto} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className='text-5xl text-primary font-bold text-center'>Login</h1>
             <form onSubmit={handleLogin}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Login" />
              </div>
             </form>
             
             <div>
        <p className='text-danger'>{error.message}</p>
        </div>
        <div className='m-auto text-center mb-5'>
        <button onClick={handleGoogleSignIn} className='btn btn-primary mt-3'>sign in with google</button>
        </div>
        <p className='p-4 text-center'>New to Toy Market? Please <Link className='font-bold text-primary' to={'/signup'}>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;