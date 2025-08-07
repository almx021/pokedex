import { useEffect, useState } from "react"

const LoadingText = () => {
    const [loadingDots, setLoadingDots] = useState("")

    useEffect(() => {
        const control = setInterval(() => {
            setLoadingDots(currentText => (currentText.length < 3 ? currentText + '.' : ''))
        }, 200)

        return () => clearInterval(control)
    }, [])

    return <span>Carregando{loadingDots}</span>
}

export default LoadingText