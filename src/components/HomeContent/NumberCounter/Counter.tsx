"use client";
import React, { useEffect, useState } from "react";

export default function Counter({ target, increment, timeout_in_ms, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < target) {
        setCount((prevCount) => prevCount + increment);
      } else {
        setCount(target);
      }
    }, timeout_in_ms);

    return () => clearTimeout(timer);
  }, [count, target, increment, timeout_in_ms]);

  return (
    <h3 className="color-primary">
      {count}
      {suffix}
    </h3>
  );
}
