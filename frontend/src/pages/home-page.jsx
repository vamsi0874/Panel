import React from 'react';
import { Navbar } from '../components/navbar';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-white">
        <div className="flex w-full max-w-4xl">
          <div className="w-1/2 flex items-center justify-center">
            <img src="https://img.freepik.com/free-vector/admin-concept-illustration_114360-2248.jpg?t=st=1738435858~exp=1738439458~hmac=95fc0d903cc8e65bd1bdb5ccda5c7c39b52703fa0b98b9450467e0c226bfe53b&w=740" alt="Admin Panel" className="max-w-full h-auto" />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Welcome to the Admin Panel
              <div className='text-xs '>Manage your settings and preferences here.</div>
            
            </h1>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
