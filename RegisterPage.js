function RegisterPage() {
  const submit = async () => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'demo', email: 'demo@example.com', password: 'secret' })
    });
    return response.json();
  };

  return {
    name: 'RegisterPage',
    submit
  };
}

module.exports = { RegisterPage };
