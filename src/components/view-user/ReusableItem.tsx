export default function ReusableItem({
  title,
  text,
}: {
  title: string;
  text: string | number;
}) {
  return (
    <div className="title-wrapper">
      <p title="Title">{title}</p>
      <h1>{text}</h1>
    </div>
  );
}
