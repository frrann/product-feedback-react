import { useFormContext } from 'react-hook-form';

function FormRow({ label, name, rules, disabled, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-[0.5rem] px-0">
      <label htmlFor={name} className="text-sm text-neutral-slate">
        {label}
      </label>
      <input
        className="my-2 w-full rounded border-0 bg-neutral-silver px-5 py-3 text-sm text-blue-dark transition duration-300 focus:outline-none focus:ring-1 focus:ring-blue"
        id={name}
        {...register(name, rules)}
        disabled={disabled}
        {...rest}
      />
      {errors[name] && (
        <span className="text-xs text-red">{errors[name].message}</span>
      )}
    </div>
  );
}

export default FormRow;
