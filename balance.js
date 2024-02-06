function Balance(){
  const ctx = React.useContext(UserContext);

  function handleBalance(){
    ctx.users.pull({name: data.name, balance: data.balance});
    return true;
  };

  return (
    <Card
      bgcolor="primary"
      header="Balanace"
      balance={handleBalance}
    />
  )
}