function LoginPage() {
  const submit = async () => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer demo-token'
      },
      body: JSON.stringify({ email: 'demo@example.com', password: 'secret' })
    });
    return response.json();
  };

  return {
    name: 'LoginPage',
    submit
  };
}

module.exports = { LoginPage };
