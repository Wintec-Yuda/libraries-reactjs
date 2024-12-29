import React from "react";
import LazyLoad from "react-lazyload";

const LazyImageExample = () => {
  return (
    <div>
      <h1>Lazy Load Images Example</h1>

      {/* Lazy load gambar hanya ketika gambar muncul di layar */}
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400" alt="Lazy Loaded" />
      </LazyLoad>

      {/* Anda bisa menambahkan lebih banyak gambar dengan lazy loading */}
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src="https://via.placeholder.com/600x400?text=Second+Image" alt="Lazy Loaded 2" />
      </LazyLoad>
    </div>
  );
};

export default LazyImageExample;
