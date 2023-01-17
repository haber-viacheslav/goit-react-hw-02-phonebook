export const ContactItem = ({ id, name, number }, onDeleteContact) => (
  <li>
    <p>
      {name}: <span>{number}</span>
    </p>
    <button onClick={() => onDeleteContact(id)}>delete</button>
  </li>
);
