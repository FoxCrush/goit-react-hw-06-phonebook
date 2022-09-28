import ContactListItem from 'components/ContactListItem';

function ClassList(props) {
  if (!props.contactsToShow) {
    console.log('nothing to show in contact list');
    return;
  }
  return (
    <div className="contactListContainer">
      <ul>
        {props.contactsToShow.map(({ id, name, number }) => (
          <ContactListItem
            id={id}
            key={id}
            name={name}
            number={number}
            deleteMethod={props.deleteMethod}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
