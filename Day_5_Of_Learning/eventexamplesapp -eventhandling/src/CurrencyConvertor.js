import { useState } from "react"

export function CurrencyConvertor(){
    const[amt,setAmt]=useState(0);

    function handleSubmit(event){
        event.preventDefault();
        const amount=80*amt;
        console.log(amt);
        console.log(amount);
        alert("Conveting to Euro amount is : "+amount);
    }

    function handleChange(event){
        const value=event.target.value;

        setAmt(value);
        
    }
    return(
        <div>
            <h1 style={{color:"green"}}>Currency Convertor!!!! </h1>

            <form >
                <label>Amount :
                <input type="number" value={amt} onChange={handleChange}/>
                </label><br/><br/>
                <label>Currency :
                <textarea  value="Euro" rows={2} readOnly/>
                </label><br/><br/>
                <input type="submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}