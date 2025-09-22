import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="Photo Url" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <NavLink className="text-blue-300" to={"/auth/login"}>
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
