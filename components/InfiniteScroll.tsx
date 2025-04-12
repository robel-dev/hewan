"use client";

import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 20 })]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {items.map((_, index) => (
        <div key={index} className="p-4 border-b">
          Item {index + 1}
        </div>
      ))}
      {isLoading && <p>Loading more items...</p>}
    </div>
  );
};

export default InfiniteScroll; 