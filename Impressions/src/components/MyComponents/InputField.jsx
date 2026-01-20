const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  errors,
}) => {
  return (
    <div className="col-12 form-group mb-4">
      <label htmlFor={label} className="form-label fs-6 fw-bold">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${errors ? "is-invalid" : ""}`}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

export default InputField;
