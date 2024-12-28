import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Simulating data fetching function
  const fetchItems = (page) => {
    setLoading(true);
    // Simulate a delay for fetching data (e.g., from an API)
    setTimeout(() => {
      const newItems = Array.from({ length: 1 }, (_, index) => `Item ${page + index + 1}`);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);

      // If the page is the last page, stop the infinite scroll
      if (page === 4) {
        setHasMore(false);
      }
    }, 1000); // Simulate network delay
  };

  useEffect(() => {
    // Initially load the first page of items
    fetchItems(0);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Infinite Scrolling Example</h2>
      <InfiniteScroll
        pageStart={0} // The starting page (0 in this case)
        loadMore={fetchItems} // Function to fetch data
        hasMore={hasMore} // Whether more items are available to load
        loader={<div key={0}>Loading...</div>} // Loading indicator
        threshold={1} // The distance (in pixels) from the bottom of the list when to trigger loading
      >
        <ul className="list-none">
          {items.map((item, index) => (
            <li key={index} className="py-2 px-4 bg-gray-100 border-b last:border-b-0">
              {item}
            </li>
          ))}
        </ul>
      </InfiniteScroll>
      {loading && <div>Loading more...</div>}
    </div>
  );
};

export default InfiniteScrollComponent;
