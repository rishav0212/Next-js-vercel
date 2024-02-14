import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        height: "80vh",
        width: "100vw",
        paddingTop: "30vh",
        textAlign: "center",
        background: "black",
        color: "whitesmoke",
        borderBottom: "1px solid #fff",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: "2em" }}>Page is Not Currently Available</h2>
      <div style={{ textAlign: "left", fontSize: "1.4em", marginLeft: "30vw" }}>
        Return to :
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <Link href="/" style={{ color: "whitesmoke" }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" style={{ color: "whitesmoke" }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/products" style={{ color: "whitesmoke" }}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "whitesmoke" }}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
