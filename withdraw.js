function Withdraw(){
  // const [show, setShow]         = React.useState(true);
  // const [status, setStatus]     = React.useState('');
  // const [name, setName]         = React.useState('');
  // const [email, setEmail]       = React.useState('');
  // const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function handle(){
    ctx.users.push({name: data.name, withdraw: data.withdraw});
    return true;
  }

  return (
    <Card
      bgcolor="primary"
      header="Make a Withdrawal"
      withdraw={handle}
      submitButtonWithdraw="Withdrawal Submitted"
    />
  )
}
