import "./Dropdown.css";

export const Dropdown = ({ label, itens, ...props }) => {
  const { teams } = itens;

  function handleChange(e) {
    props.inputChanged(e.target.value);
  }

  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select onChange={handleChange}>
        {teams.map(({ id, team }) => (
          <option key={id} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};
