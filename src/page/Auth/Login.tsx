// import React from 'react';
// import styles from './Button.module.scss';

// class AuthForm extends React.Component {
//   // State, Methods...

//   render() {
//     const { isLoginMode } = this.state;
//     const buttonClasses = isLoginMode ? styles.primary : styles.secondary;

//     return (
//       <div className={styles.auth-container}>
//         <form onSubmit={this.handleSubmit}>
//           <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={this.handleInputChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={this.handleInputChange}
//             required
//           />
//           <input className={`${styles.button} ${buttonClasses}`} type="submit" value={isLoginMode ? 'Login' : 'Register'} />
//         </form>
//         <button onClick={this.toggleMode}>{isLoginMode ? 'Switch to Register' : 'Switch to Login'}</button>
//       </div>
//     );
//   }
// }

// export default AuthForm;
