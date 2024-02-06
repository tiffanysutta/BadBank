function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" title="Home Page">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="Click here to create an account.">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" title="Click here to log into your account.">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" title="Click here to make a deposit.">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" title="Click here to make a withdrawal.">Withdraw</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#/balance/" title="Click here to check your balance.">Balance</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="Click here to see all of the accounts at this bank.">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}
