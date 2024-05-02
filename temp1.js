// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ setToken }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('/api/login', { username, password });
//             if (response.status === 200) {
//                 const token = response.data.token;
//                 setToken(token); // Save token in parent component's state
//                 console.log('Login successful');
//             } else {
//                 setError('Login failed');
//             }
//         } catch (error) {
//             setError('Error:', error.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//             <button onClick={handleLogin}>Login</button>
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default Login;







// import React, { useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from './AuthContext'; // Assume you have created an AuthContext

// const ProtectedComponent = () => {
//     const { token } = useContext(AuthContext);

//     const handleProtectedRequest = async () => {
//         try {
//             const response = await axios.get('/api/protected', {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Protected Component</h2>
//             <button onClick={handleProtectedRequest}>Make Protected Request</button>
//         </div>
//     );
// };

// export default ProtectedComponent;







// import React, { useState } from 'react';
// import Login from './Login';
// import ProtectedComponent from './ProtectedComponent';
// import { AuthContext } from './AuthContext'; // Assume you have created an AuthContext

// const App = () => {
//     const [token, setToken] = useState(null);

//     return (
//         <div>
//             <h1>Authentication Example</h1>
//             {!token && <Login setToken={setToken} />}
//             {token && (
//                 <AuthContext.Provider value={{ token }}>
//                     <ProtectedComponent />
//                 </AuthContext.Provider>
//             )}
//         </div>
//     );
// };

// export default App;

// import { createContext } from 'react';

// export const AuthContext = createContext(null);
