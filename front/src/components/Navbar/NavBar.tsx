// import { useSelector } from "react-redux";
import ButtonNav from "../ButtonNavar/ButtonNav";
import LogoApp from "../LogoApp/LogoApp";
import "./navbar.css";
// import { useEffect } from "react";

const Navbar = () => {
//   const userData = useSelector((state) => state.user.userData);

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);
  const userData = {login: true}

  return (
    <nav className="nav">
      <LogoApp />
      <ul className="nav-ul">
        <ButtonNav name={"Home"} rout={"/"} />
        {!userData.login && <ButtonNav name={"Register"} rout={"/register"} />}
        {!userData.login && <ButtonNav name={"Login"} rout={"/login"} />}
        {userData.login && <ButtonNav name={"My Reservations"} rout={"/shifts"} />}
        {userData.login && <ButtonNav name={"New Reservation"} rout={"/newShift"} />}
        {userData.login && <ButtonNav name={"Logout"} rout={"/logout"} />}
      </ul>
    </nav>
  );
};

export default Navbar;