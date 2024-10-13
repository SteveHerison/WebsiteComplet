type Props = {
  label: string;
  type: string;
  place: string;
  value: string;
  id: string;
  required?: boolean;
  onChange: (value: string) => void;
};

const InputForm = ({
  label,
  type,
  place,
  value,
  id,
  required,
  onChange,
  ...rest
}: Props) => {
  return (
    <label htmlFor="" className="flex flex-col">
      {label}
      <input
        type={type}
        name=""
        id={id}
        className="p-1 rounded-xl my-2"
        placeholder={place}
        value={value}
        required={required}
        onChange={({ target }) => onChange(target.value)}
        {...rest}
      />
    </label>
  );
};

export default InputForm;
