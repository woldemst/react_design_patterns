export const NumberedList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}) => {
    return (
        <>
            {items.map((item, i) => (
                <>
                    <p>{i + 1}</p>
                    <ItemComponent key={i} {...{ [resourceName]: item }} />
                </>
            ))}
        </>
    )
}