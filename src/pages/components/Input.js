export default function Input(props) {
  return (
    <div className={props.Form}>
      <label htmlFor={props.name} className="label">
        <span className="label-text">{props.title}</span>
      </label>
      <input
        type={props.type}
        className={props.className}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
      ></input>
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  );
}
