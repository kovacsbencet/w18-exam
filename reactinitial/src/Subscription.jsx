import React, {useState} from 'react'
import LoadingMask from "./LoadingMask"


function Subscription() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [submitText, setSubmitText] = useState("")

    const emailChange = e => setEmail(e.target.value);

    const onSubmitEvents = () =>{
        setSubmitText("Subscribed")
        setSubmitted(true)
        setLoading(false)
    }

    const emailSubmit = () => {
        setLoading(true)
        const subscriptionData = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email})
        };
        fetch("https://demoapi.com/api/series/newsletter", subscriptionData)
        .then(response => response.json())
        .then(response => 
        (response.done === true) ?
        onSubmitEvents() : console.log("ÉC"))
 
    };

    return (
        <div>
            {
            loading ?
            <LoadingMask /> : null}
            {submitted ? <div>Subscribed</div> :
            <>
                <h2>Subscribe to our newsletter.</h2>
                <input type="email" value={email} onChange={emailChange}/>
                <button disabled={email.includes("@" && ".") ? false : true} onClick={emailSubmit}>Subscribe!</button>
            </>
            }
        </div>
    )
}

export default Subscription