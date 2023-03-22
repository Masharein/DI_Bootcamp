function LoginForm({ data, submit, change }) {
    return (
      <>
        <h1>Welcome</h1>
        <h4>Please provide your information below.</h4>
        <form onSubmit={submit}>
          <label>
            <input type="text" placeholder="First Name" value={data.firstName} onChange={(event) => change(event, 'firstName')} />
          </label>
          <label>
            <input type="text" placeholder="Last Name" value={data.lastName} onChange={(event) => change(event, 'lastName')} />
          </label>
          <label>
            <input type="tel" placeholder="Phone Number" value={data.phone} onChange={(event) => change(event, 'phone')} />
          </label>
          <label>
            <input type="email" placeholder="Email" value={data.email} onChange={(event) => change(event, 'email')} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
  
  export default LoginForm;