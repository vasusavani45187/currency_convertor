import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId() //foe unique id (value).
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //ask the variable if its enabled or disabled.
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                    //onAmountChange for checking if it is available, only then use onAmountChange.
                    //event returns value in the form of a string, so convert it to number.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //string is good.
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => ( //if we {}, we will have to return a value.
                            <option key={currency} value={currency}>
                            {currency}
                            </option> //to bring performance to the loop, use key.
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;