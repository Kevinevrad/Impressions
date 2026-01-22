const InputRadio = ({ format, checked, onChange }) => {
  return (
    <>
      <div className="form-check">
        <label htmlFor={`format${format}`} className="form-check-label">
          {format}
        </label>
        <input
          type="radio"
          onChange={onChange}
          className="form-check-input"
          id={`format${format}`}
          value={format}
          checked={checked}
        />
      </div>
    </>
  );
};

export default InputRadio;
