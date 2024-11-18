export const SmallPersonListItem = ({ person }) => {
    return (
        <li className="person">Name: {person.name} Age: {person.age}</li>
    );
};