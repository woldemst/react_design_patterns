
export const LargePersonListItem = (props) => {
    return (
        <>
            <h3>{props.name}</h3>
            <p className="age">Age: {props.age}</p>
            <p className="hair-color">Hair Color: {props.hairColor}</p>
            <h3 className="hobbies">Hobbies:</h3>

            <ul className="list">
                {props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>

    );
};