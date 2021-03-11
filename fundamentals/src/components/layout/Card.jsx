import './Card.css'

export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || 'orangered',
        borderColor: props.color || 'orangered'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">
                {props.children} 
            </div>
        </div>
    )
}