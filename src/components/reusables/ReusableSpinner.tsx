interface Spinner {
  height: string;
}

export default function ReusableSpinner({ height }: Spinner) {
  return <div>{height}</div>;
}
