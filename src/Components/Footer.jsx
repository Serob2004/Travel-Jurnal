export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#181a1f",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>© {year} My Travel Page. All rights reserved.</p>
      <p>Follow us on social media!</p>
     
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              width="30"
            />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              width="30"
            />
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png"
              alt="TikTok"
              width="30"
            />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              width="30"
            />
          </a>
        </div>
      
    </div>
  );
}
