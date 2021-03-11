import If, { Else } from "./If"

export default props => {
    const user = props.user || {};
    return (
        <div>
            <If test={user && user.name}>
            Welcome <strong>{ props.user.name }</strong>
            </If>
            <If test={!user || !user.name}>
            Welcome <strong> Nobare </strong>
            </If>
        </div>
    )
}