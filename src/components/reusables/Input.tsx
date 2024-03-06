import "../../styles/input.scss";

interface Input {
  id: string;
  label?: string;
  value: string;
  type: string;
  placeholder: string;
  title?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  label,
  value,
  type = "text",
  onChange,
  placeholder,
  title,
}: Input) {
  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        title={label ? label : title}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
