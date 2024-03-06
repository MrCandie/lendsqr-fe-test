import "../../styles/input.scss";

interface Input {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string>;
}

export default function Select({
  id,
  label,
  value,
  options = [],
  onChange,
}: Input) {
  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <select onChange={onChange} value={value}>
        {options.map((el: string, i: number) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}
