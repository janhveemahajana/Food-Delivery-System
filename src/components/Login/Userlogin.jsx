import LoginTemplate from "./LoginFormTemp/LoginTemplate";

const LoginCustomer = () => {
  return (
    <>
      <LoginTemplate role="CUSTOMER" redirectTo="/user-dashboardpage" />
    </>
  );
};
export default LoginCustomer;
