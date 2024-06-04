export default function Errors(props: { errors?: any }) {
    if (!props.errors?.length) return null;
    return <div>{props.errors.map(err => <p>{err}</p>)}</div>
}