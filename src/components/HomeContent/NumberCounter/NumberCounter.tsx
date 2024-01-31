"use client";
import React, { useEffect, useState } from "react";
import "./NumberCounter.module.css";

export default function NumberCounter() {
  const counterData = {
    Established: {
      target: 2005,
      increment: 6,
      timeout_in_ms: 1,
      suffix: "",
    },
    "Manufacturing Units": {
      target: 4,
      increment: 1,
      timeout_in_ms: 1000,
      suffix: "",
    },
    Products: {
      target: 68,
      increment: 1,
      timeout_in_ms: 30,
      suffix: "+",
    },
    Clients: {
      target: 1700,
      increment: 3,
      timeout_in_ms: 1,
      suffix: "+",
    },
  };

  useEffect(() => {
    const counters = document.querySelectorAll(".customCount");

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const increment = parseInt(counter.getAttribute("data-increment"));
        const timeout_in_ms = parseInt(
          counter.getAttribute("data-timeout-in-ms")
        );
        const suffix = counter.getAttribute("data-suffix");
        let innerText = counter.innerHTML;
        innerText.substring(0, innerText.length - suffix.length);
        const count = parseInt(innerText);

        if (count < target) {
          counter.innerHTML = Math.trunc(count + increment).toString() + suffix;
          setTimeout(updateCount, timeout_in_ms);
        } else {
          counter.innerHTML = target.toString() + suffix;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row g-3">
          {Object.keys(counterData).map((e, i) => (
            <React.Fragment key={e}>
              <div className="col-md-3 counter">
                <h3
                  data-target={counterData[e].target}
                  data-increment={counterData[e].increment}
                  data-timeout-in-ms={counterData[e].timeout_in_ms}
                  data-suffix={counterData[e].suffix}
                  className="customCount"
                >
                  0
                </h3>

                <h4>{e}</h4>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
