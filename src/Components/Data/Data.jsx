
import React, {useState} from 'react'
import './Data.scss'


const Data = () => {
    const [user, setUser] = useState({
        email:"",
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value})
    };

    const postData = async(event) => {
        event.preventDefault();
    
        const {email} = user;

        if(email){
            const res = await fetch(
                "https://acciojobtest-default-rtdb.firebaseio.com/acciojob.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify({
                        email,
                    }),
                }
                );
                if(res) {
                    setUser({
                        email:"",
                    });
                    alert("Thanks for Choosing Acciojob")
                }

        }else {
            alert("Please Enter Your Email.")
        }

       
        
    };

  return (
    <div className='subs' >
                <form action="" method="POST">
                    <h5>Get in Touch</h5>
                    <label className='label'>

                        <input type="text" name="email" 
                        id='email'
                        placeholder='Your Email'
                        value={user.email} 
                        onChange={handleInputs}
                        autoComplete="off"
                        />

                        <button onClick={postData}>Subscribe</button>
                    </label>

                    <h6>Lorem impsum dolor amit</h6>
                </form>
                
            </div>
  )
}

export default Data;