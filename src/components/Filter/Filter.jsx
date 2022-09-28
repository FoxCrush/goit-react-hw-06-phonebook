function FilterComponent(props) {
  const { filterСondition, onFilterInputChange } = props;
  return (
    <input
      value={filterСondition}
      onChange={e => onFilterInputChange(e.target.value)}
      className="clientInputTextfield"
      type="text"
    />
  );
}
export default FilterComponent;
