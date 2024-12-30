// Timer.tsx
"use client"
import { useState, useEffect } from "react";

const Timer = () => {
  // State to track if the component has mounted (for client-side logic)
  const [hasMounted, setHasMounted] = useState(false);

  // Function to generate a random time between 10 minutes (600 seconds) and 15 hours (54000 seconds)
  const generateRandomTime = () => {
    return Math.floor(Math.random() * (54000 - 600 + 1)) + 600;
  };

  // State to hold the timer value
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    // After the first render, set the hasMounted to true
    setHasMounted(true);

    // Set the initial time from localStorage or generate a new random time
    const initialTime = parseInt(localStorage.getItem("time") || generateRandomTime().toString(), 10);

    // Set the time state
    setTime(initialTime);

    // Start the timer if time is greater than 0
    if (initialTime > 0) {
      const interval = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1;
          if (newTime < 0) {
            clearInterval(interval); // Stop the timer once it reaches 0
            return 0;
          }
          // Save the updated time to localStorage
          localStorage.setItem("time", newTime.toString());
          return newTime;
        });
      }, 1000); // Update the time every second

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }
  }, []);

  // Convert seconds to a time format (hh:mm:ss)
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // If the component hasn't mounted, return a placeholder (to prevent SSR mismatch)
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Time taken for product to reach you</h1>
        <p className="text-4xl font-mono text-blue-600">{formatTime(time)}</p>
       
      </div>
    </div>
  );
};

export default Timer;
