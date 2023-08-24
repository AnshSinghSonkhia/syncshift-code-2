
export default function Login({setTitle, appAcc}){
  setTitle('SyncShift Login');

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    const enal = e.target[0].value.trim();

    appAcc.createRecovery(enal, "http://localhost:3000/reset-password").then((ra) => {
      alert("Done")
    });
    window.location.href = '/';
  }


  const handleSecondSubmit = (e) => {
    e.preventDefault();

    let laf = window.location.search.substr(1).split("&");
    let faf = {};
    for(const a of laf){
      faf[a.split("=")[0]] = a.split("=")[1]
    }

    const enal = e.target[0].value.trim();
    const enaal = e.target[1].value.trim();

    appAcc.updateRecovery(faf.userId, faf.secret, enal, enaal).then((ra) => {
      let f = "Done"
    });
    window.location.href = '/';
  }

  if(window.location.search){

  return(<body>
    <h1 className="title">SyncShift</h1>
    <h3 className="headline">Shifting Management Tools</h3>
    <form onSubmit={handleSecondSubmit} >
      <div className="container">
        <div className="form_contents">
        <label>Password : </label>
        <input type="text" placeholder="Enter New Password" name="pass" required />
        <label>Repeat : </label>
        <input type="text" placeholder="Repeat New Password" name="rpt-pass" required />
          
        <button className="login" >Update Password</button>

        <button onClick={() => {window.location.href='/newuser'}} className="b1">Create Account</button>

        <button onClick={() => {window.location.href='/index'}} className="b2">Login</button><br /><br />
        </div> 
      </div>
    </form>
    </body>)
 
  }

  return(<body>
    <h1 className="title">SyncShift</h1>
    <h3 className="headline">Shifting Management Tools</h3>
    <form onSubmit={handleFirstSubmit} >
      <div className="container">
        <div className="form_contents">
        <label>E-mail : </label>
        <input type="text" placeholder="Enter Username" name="username" required />
          
        <button className="login" >Send Link</button>

        <button onClick={() => {window.location.href='/newuser'}} className="b1">Create Account</button>

        <button onClick={() => {window.location.href='/index'}} className="b2">Login</button><br /><br />
        </div> 
      </div>
    </form>
    </body>)

}
