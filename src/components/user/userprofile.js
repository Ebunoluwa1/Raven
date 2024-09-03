
import React, { useState } from 'react';
import { Close } from '../assets/close';
import ButtonComponent from '../atoms/button.atoms';

const UserProfile = () => {
  const [isVisible, setIsVisible] = useState(true);

  const ToggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div id="profile" className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white p-6 md:p-8 rounded shadow-md">
            {/* Avatar Section */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mr-4 overflow-hidden rounded-full">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black font-bold">Your name</p>
                  <p className="text-gray-500">yourname@gmail.com</p>
                </div>
              </div>
              <button className="flex-shrink-0" onClick={ToggleVisible}>
                <Close />
              </button>
            </div>

            {/* Profile Info Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between">
                <p className="text-black font-bold">Name</p>
                <p className="text-gray-600 sm:ml-4">Your name</p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-col sm:flex-row justify-between">
                <p className="text-black font-bold">Email Account</p>
                <p className="text-gray-600 sm:ml-4">yourname@gmail.com</p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-col sm:flex-row justify-between">
                <p className="text-black font-bold">Mobile Number</p>
                <p className="text-gray-600 sm:ml-4">Add Number</p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex flex-col sm:flex-row justify-between">
                <p className="text-black font-bold">Location</p>
                <p className="text-gray-600 sm:ml-4">USA</p>
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="mt-6">
              <ButtonComponent padding="14px">Save Changes</ButtonComponent>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;


