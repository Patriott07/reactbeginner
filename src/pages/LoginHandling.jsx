import { useNavigate } from "react-router-dom";
let login;

function Loginx(){

    const navigate = useNavigate();
    // function untuk handle login
    const handleLogin = async() => {

        // ... Logika login
        if(login == true) { // jika login berhasil
            navigate('/home') // kita arahkan ke halaman /home
        }
    }

    const handleSubmit = () => {
        console.log('form was submitted')
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => {console.log(e.target.value)}} />
            <button onClick={() => console.log('Button was clicked')}>
                Click me
            </button>
        </form>
    )
}

export default Loginx;