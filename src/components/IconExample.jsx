import React from 'react';
import { FaBeer, FaTwitter } from 'react-icons/fa'; // Mengimpor ikon dari FontAwesome
import { MdHome } from 'react-icons/md'; // Mengimpor ikon dari Material Design
import { IoIosHeart } from 'react-icons/io'; // Mengimpor ikon dari Ionicons

const IconExample = () => {
  return (
    <div className="flex space-x-4 p-4">
      <FaBeer size={40} color="gold" />
      <FaTwitter size={40} color="#1DA1F2" />
      <MdHome size={40} color="green" />
      <IoIosHeart size={40} color="red" />
    </div>
  );
};

export default IconExample;
