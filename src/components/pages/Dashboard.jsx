import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-neutral-100 h-screen grid grid-cols-2 grid-rows-2">
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1740471230719-60fc0bfd42e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo1"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-circular-web">
          Party like a rockstar
        </div>
      </div>

      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1739226531340-6be661888e66?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          alt="logo2"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-circular-web">
          Live like a rockstar
        </div>
      </div>

      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1740738174801-12a109f9acd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          alt="logo3"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-circular-web">
          Have fun like a rockstar
        </div>
      </div>

      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1740905546458-2b0199785aa3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
          alt="logo4"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-circular-web">
          Fuck like a rockstar
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
