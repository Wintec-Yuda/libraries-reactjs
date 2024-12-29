import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold mb-4 text-gray-700">Loading Data...</h1>
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          className="w-full"
        >
          {/* Rectangles and circles represent loading skeleton */}
          <rect x="0" y="0" rx="5" ry="5" width="400" height="20" />
          <rect x="0" y="40" rx="5" ry="5" width="400" height="20" />
          <rect x="0" y="80" rx="5" ry="5" width="300" height="20" />
          <circle cx="30" cy="140" r="20" />
          <rect x="60" y="120" rx="5" ry="5" width="300" height="40" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default SkeletonLoader;
