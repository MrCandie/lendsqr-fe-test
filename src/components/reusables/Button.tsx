import "../../styles/button.scss";

interface Button {
  title: string;
  onClick: any;
  width?: string;
}

export default function Button({ title, onClick, width }: Button) {
  return (
    <button style={{ width }} onClick={onClick}>
      {title}
    </button>
  );
}
