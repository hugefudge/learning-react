export default props => {
    
    return (
        <div>
            <label htmlFor='passInput'>Passo: </label>
            <input id='passInput' type='number' value={props.pass} 
            onChange={event => props.setPass(+event.target.value)}>
            </input>
        </div>
    )
}