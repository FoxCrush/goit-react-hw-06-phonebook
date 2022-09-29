import ContactListItem from 'components/ContactListItem';
import { connect } from 'react-redux';
import { deleteContact } from 'redux/contatcs/contactsActions';

function ClassList(props) {
  // const contacts = props.contact.items;
  return (
    <div className="contactListContainer">
      <ul>
        {props.contacts.items.map(({ id, name, number }) => (
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
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(deleteContact(contactId)),
  // filterContacts: () => {
  //   const { items, filterString } = this.contactsToShow;
  //   return items.filter(contact =>
  //     contact.name.toLowerCase().includes(filterString.toLowerCase())
  //   );
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
