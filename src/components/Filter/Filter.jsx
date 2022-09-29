import { connect } from 'react-redux';
import { filterContacts } from 'redux/contatcs/contactsActions';

function FilterComponent(props) {
  const { filterString, onFilterInputChange } = props;
  return (
    <input
      value={filterString}
      onChange={onFilterInputChange}
      className="clientInputTextfield"
      type="text"
    />
  );
}
const mapStateToProps = state => ({
  filterString: state.contacts.filterString,
});

const mapDispatchToProps = dispatch => ({
  onFilterInputChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
