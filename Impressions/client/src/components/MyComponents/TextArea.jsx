const TextArea = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  errors,
  rowValue,
}) => {
  return (
    <div className="col form-group mb-4 ">
      <label className="form-label fw-bold" htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        className="form-control  "
        placeholder={placeholder}
        rows={rowValue}
        value={value}
        onChange={onChange}
      ></textarea>
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

export default TextArea;
