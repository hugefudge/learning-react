export default props => {
    const cb = props.whenClick;
    const makeAge = () => parseInt(Math.random() * (20)) + 50;
    const makeNerd = () => Math.random() > 0.5

    return (
        <div>
            <button onClick={e => cb('John', makeAge(), makeNerd())}>
                Fornecer Informacoes
            </button>
        </div>
    )
}