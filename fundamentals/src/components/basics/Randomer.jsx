export default (props) => {
    const random = parseInt(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            <h2>Randomer</h2>
            <p>Valor Minimo: {props.min} </p>
            <p>Valor Maximo: {props.max} </p>
            <p>Valor selecionado: {random}</p>
        </div>
    )
}