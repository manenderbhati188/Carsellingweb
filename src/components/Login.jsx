import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample data - in a real application, this data should be stored securely
const users = [
  { email: 'a@gmail.com', password: '12345678', name: 'a' },
  { email: 'maninderbhati@gmail.com', password: '12345678', name: 'maninderbhati' }
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find the user from the JSON array
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      // Show alert with the name (without @gmail.com)
      alert(`Welcome, ${user.name}`);
      
      // Navigate to the home page
      navigate('/home');
    } else {
      // Handle invalid credentials
      alert('Invalid email or password');
    }
  };

  const handleRegister = () => {
    // Navigate to the registration page
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button
            onClick={handleRegister}
            className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
