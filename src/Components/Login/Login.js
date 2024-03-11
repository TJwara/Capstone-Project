import './Login.css';

function Login(){

    function myFunction() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return(
        <div>

<div className="container" >
        <div className="signup-grid">
        <div className="signup-text">
                <h1>Login</h1>

            </div>
            <div className="signup-text1" style={{text-align: "center;"}}><br/>
                Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{color: "#0a2df1;"}}> Sign Up Here</a></span>
            </div>
            <br/>
            <div className="signup-form">
                <form>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />

                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" /><br/><br/>
                        <input type="checkbox" onclick={() => myFunction()}/>&ensp;Show Password

                    </div>
                     <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button><br/><br/>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>

                    <div className="signup-text1" style={{text-align: "left;"}}>
                        Forgot password? <span><a href="../Sign_Up/Sign_Up.html" style={{color: "#0a2df1;"}}> Click here to reset</a></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
       
        </div>
    );
}
export default Login