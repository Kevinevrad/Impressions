const TextArea = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  errors,
}) => {
  return (
    <div className="col-12 form-group mb-4">
      <label className="form-label fw-bold" htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        className="form-control  "
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
      ></textarea>
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

export default TextArea;
