import Counter from "./Counter";
import styles from "./NumberCounter.module.css";

export default function NumberCounter() {
  const counterConfig = {
    Established: {
      target: 2005,
      increment: 6,
      timeout_in_ms: 1,
      suffix: "",
    },
    "Manufacturing Units": {
      target: 4,
      increment: 1,
      timeout_in_ms: 500,
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

  return (
    <div className="container">
      <div className="row g-3">
        {Object.entries(counterConfig).map(([key, value]) => (
          <div key={key} className={`col-md-3 ${styles["counter"]}`}>
            <Counter {...value} />
            <h4>{key}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
