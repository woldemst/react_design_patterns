export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (
        <>
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <p className="description">{description}</p>
            <p className="rating">Rating: {rating}</p>
        </>
    );
};