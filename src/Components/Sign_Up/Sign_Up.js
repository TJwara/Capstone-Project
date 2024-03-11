import './Sign_Up.css';

function Sign_Up(){

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
                <h1>Sign Up</h1>

            </div>
            <div className="signup-text1">
                Already a member? <a href="../Login/Login.html" > <span style={{color: '#0818fc;'}}>Login</span></a>
            </div>
            <br/>
            <div className="signup-form">
                <form>

                    <div className="form-group"><br/>
                        <label for="name">Role</label>
                        <select type="text" name="name" id="name" required className="form-control" placeholder="Choose your role" aria-describedby="helpId" >
                            
                            <option value="Patient">Patient</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>
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
                </form>
            </div>
        </div>
    </div>
       
        </div>
    );
}
export default Sign_Up