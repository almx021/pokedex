const ErrorMessage = ({message} : {message: string}) => {
    return (
        <span className="text-red-500 whitespace-pre-line">
            <strong>
                {message}
            </strong>
        </span>
    )
}

export default ErrorMessage

