const SecondaryButton = (props) => {
    return (
            <button onClick={props.onClick} className="inline-flex items-center justify-center w-32 py-3.5 bg-accent shadow rounded-2xl">
    <p className="text-xs font-medium text-gray-100">Connect</p>
</button>
    )
}

export default SecondaryButton