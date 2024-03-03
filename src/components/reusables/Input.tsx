import "../../styles/input.scss";

interface Input {
  id: string;
  label?: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: any;
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
    <div>
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
