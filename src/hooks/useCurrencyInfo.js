import { useEffect, useState } from "react" //custon hook.

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})
    useEffect (() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then ((res) => res.json())
        .then ((res) => setData(res[currency])) //currency is the key.
    }, [currency])
    return data //we returned a method. (all hooks like useState return entire methods)
}

export default useCurrencyInfo;