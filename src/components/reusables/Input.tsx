import "../../styles/input.scss";

interface Input {
  id: string;
  label?: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  label,
  value,
  type = "text",
  onChange,
  placeholder,
}: Input) {
  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
