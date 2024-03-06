import "../../styles/button.scss";

interface Button {
  title: string;
  onClick: () => void;
  width?: string;
}

export default function Button({ title, onClick, width }: Button) {
  return (
    <button
      className="button"
      style={{ width, opacity: title ? "100%" : 0 }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
