import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h2>Youtube Clone</h2>
        <h1 className="login__logo">
          Mini<span>Tube</span>
        </h1>
        <button>Login With google</button>
      </div>
    </div>
  );
};

export default LoginScreen;
