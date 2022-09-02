const PrimaryButton = (props) => {
    return (
            <button onClick={props.onClick} className="inline-flex items-center justify-center w-full py-3.5 bg-secondary drop-shadow-['0 35px 35px rgba(237, 174, 73, 0.7)'] rounded-2xl">
    <p className="text-xs font-medium text-gray-100">{props.title}</p>
</button>
    )
}

export default PrimaryButton