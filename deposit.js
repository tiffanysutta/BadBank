function Deposit(){
  // const [show, setShow]         = React.useState(true);
  // const [status, setStatus]     = React.useState('');
  // const [name, setName]         = React.useState('');
  // const [email, setEmail]       = React.useState('');
  // const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function handle(){
    ctx.users.push({name: data.name, deposit: data.deposit});
    return true;
  }

  return (
    <Card
      bgcolor="primary"
      header="Make a Deposit"
      deposit={handle}
      submitButtonDeposit="Deposit Submitted"
    />
  )
}
