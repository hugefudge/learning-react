import products from '../../data/products'
import './TableProducts.css';

export default props => {
    const tableProducts = products.map((product, i) => {
        return (
            <tr key={product.id} className={i % 2 === 0 ? 'Even' : 'Odd'}>
                <td>{product.nome}</td>
                <td>{product.price}</td>
            </tr>
        )
    })
    return (
        <table className="table-products" border="1">
            <tbody>
            {tableProducts}
            </tbody>
        </table>
    )
}