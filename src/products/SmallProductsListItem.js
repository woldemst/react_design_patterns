export const SmallProductListItem = ({ product }) => {

    const { name, price } = product;
    return (
        <li className="product">
           <h3>{name} - {price}</h3>
        </li>
    );
};