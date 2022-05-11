import React, {useState} from 'react'

function Subscription() {

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        const data = {email};
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        };
        fetch("https://demoapi.com/api/series/newsletter", requestOptions)
          .then(response => response.json())
          .then(res => console.log(res));
    }

    return (
        <div>
            <h2>Subscribe to our newsletter.</h2>
            {<form>
                <input type="email" value={email} onChange={(({target}) => setEmail(target.value))}/>
                <button onClick={handleSubmit}>Subscribe!</button>
            </form>}
            <h3>{loading}</h3>
        </div>
    )
}

export default Subscription