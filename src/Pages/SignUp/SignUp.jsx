import { Link } from 'react-router-dom';
import registerPhoto from '../../assets/register photo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            window.alert("Sign up successful!");
        })
        .catch(error=>{
            console.log(error);
            window.alert("Sign up failed. Please try again.");
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-5">
            <img src={registerPhoto} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className='text-5xl text-primary font-bold text-center'>Sign Up</h1>
             <form onSubmit={handleSignUp}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo' placeholder="your photo url" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
             </form>
             <p className='p-4 text-center'>Already have an account? Please <Link className='font-bold text-primary' to={'/login'}>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;