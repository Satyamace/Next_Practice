export default function Form() {
  return <div>
    <div className="container">
        <form className="form">
            <h1>Login</h1>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" required/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" required/>

            <button type="submit">Login</button>
            <p>
                Don't have an account? <a href="/signup">Sign up</a>
            </p>

        </form>
    </div>
  </div>;
}
