// src/app/_components/header/userPhone/UserPhone.tsx
import React, { FC } from 'react';

const UserPhone: FC = () => {
  return (
    <div className="user-phone">
      <button className="user-phone-button">
        Users Login
      </button>
      <span className="hidden md:block text-sm">+1 800 766-1234</span>
    </div>
  );
};

export default UserPhone;
