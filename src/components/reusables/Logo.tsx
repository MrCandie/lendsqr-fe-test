export default function Logo() {
  return (
    <>
      <div style={{ width: "90px" }} className="logo">
        <img
          className="logo-img"
          loading="lazy"
          src="/logo.png"
          alt="auth image"
        />
      </div>
    </>
  );
}
