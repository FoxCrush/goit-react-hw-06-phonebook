import ContactListItem from 'components/ContactListItem';
import { connect } from 'react-redux';
import { deleteContact } from 'redux/contatcs/contactsActions';

function ClassList(props) {
  return (
    <div className="contactListContainer">
      <ul>
        {props.visibleContacts.map(({ id, name, number }) => (
          <ContactListItem
            id={id}
            key={id}
            name={name}
            number={number}
            deleteMethod={props.deleteContact}
          />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  const { items, filterString } = state.contacts;
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterString.toLowerCase())
  );
  return { visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
