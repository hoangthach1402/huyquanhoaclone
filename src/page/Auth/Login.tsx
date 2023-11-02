import { useEffect } from 'react';
//  const useEffect
const Login = () => {
  useEffect(() => {
    document.body.classList.add('hide-navbar');

    return () => {
      document.body.classList.remove('hide-navbar');
    };
  }, []);
  
  return (
    <div className="wrapper">
        <div className="form-title">
            <h1 className="text-3xl font-bold">Login</h1>
            <form className="form" action="">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="text" name="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login