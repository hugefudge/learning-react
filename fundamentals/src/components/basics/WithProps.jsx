export default function WithProps(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado';
    const notaInt = Math.ceil(props.nota) // PROPS ARE READ ONLY
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong> { props.aluno } </strong>
                tem nota
                <strong> { notaInt } </strong>
                e esta
                <strong> { status }</strong>!
            </p>
        </div>
    )
}