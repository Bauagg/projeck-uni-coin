import RegisterBranding from "../UI/compponents/register/register_branding";
import RegisterForm from "../UI/compponents/register/register_form";

const Register = () => {
  return (
    <div className=" min:h-screen flex flex-col md:flex-row">
      {/* Branding Section */}
      <div className="flex flex-1">
        <RegisterBranding />
      </div>

      {/* Form Section */}
      <div className="flex flex-1">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
