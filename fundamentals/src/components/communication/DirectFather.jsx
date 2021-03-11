import DirectChild from './DirectChild'

export default props => {
    return (
        <div>
            <DirectChild name="Aang" age={20} nerd={false}/>
            <DirectChild name="Sokka" age={17} nerd={true}/>
        </div>
    )
}