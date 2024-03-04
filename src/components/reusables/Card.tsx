export default function Card({
  src,
  title,
  text,
  width,
}: {
  title: string;
  text: string;
  src: string;
  width?: string;
}) {
  return (
    <div style={{ width }} className="card">
      <div className="card-inner">
        <div className="card-image">
          <img loading="lazy" src={src} alt={text} />
        </div>
        <p>{text}</p>
        <h1>{title?.toLocaleString()}</h1>
      </div>
    </div>
  );
}
