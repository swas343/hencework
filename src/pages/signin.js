import { Fragment } from "react";
import Sidebar from "../components/includes/sidebar";
import Header from "../components/includes/header";
import SigninComponent from "../components/pages/signin";
import Footer from "../components/includes/footer";

const Signin = (props) =>{
    return (
        <Fragment>
            <SigninComponent />
        </Fragment>
    )
}

export default Signin;