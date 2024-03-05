export default function ReusableItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="title-wrapper">
      <p>{title}</p>
      <h1>{text}</h1>
    </div>
  );
}
