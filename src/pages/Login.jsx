import Form from "../component/Form";

function Login(){
    return(
        <div>
            <Form action='login' textBtn={`Login now..`} />
        </div>
    )
}

export default Login;