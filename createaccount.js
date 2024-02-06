function CreateAccount(){
  // const [show, setShow]         = React.useState(true);
  // const [status, setStatus]     = React.useState('');
  // const [name, setName]         = React.useState('');
  // const [email, setEmail]       = React.useState('');
  // const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];
  let userNumber = users.length;

  // function validate(field, label){
  //     if (!field) {
  //       setStatus('Error: ' + label);
  //       setTimeout(() => setStatus(''),3000);
  //       return false;
  //     }
  //     return true;
  // }

  function handle(data){
    // if (!validate(name,     'name'))     return;
    // if (!validate(email,    'email'))    return;
    // if (!validate(password, 'password')) return;
    ctx.users.push({id: userNumber, name: data.name, email: data.email, password: data.password, balance:100});
    console.log(id, name, email, password, balance);
    return true;
  }    

  // function clearForm(){
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setDeposit('');
  //   setWithdraw('');
  //   setShow(true);
  // }

  return (
    <Card
      bgcolor="primary"
      header="Create an Account"
      handle={handle}
      submitButton="Create another account"
      // status={status}
      // body={show ? (  
      //         <>
      //         Name<br/>
      //         <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
      //         Email address<br/>
      //         <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      //         Password<br/>
      //         <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
      //         <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
      //         </>
      //       ):(
      //         <>
      //         <h5>Success</h5>
      //         <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
      //         </>
      //       )}
    />
  )
}
