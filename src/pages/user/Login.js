// import React, {useEffect} from "react";
import { useFormik } from "formik";
import { login } from "../../features/auth/authSlice";
// import * as Yup from "yup";
import { useDispatch } from "react-redux";

function LoginForm() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            telephone: "699066747",
            motdepasse: "123456",
        },

        onSubmit: (values) => {
            
            dispatch(
                login({ telephone: values.telephone, motdepasse: values.motdepasse })
            )
        },
    });

    return(
        <>
            <form className="center" onSubmit={formik.handleSubmit}>
                <div>
                    <label>Number</label>
                    <input type="text" name="telephone" onChange={formik.handleChange} value={formik.values.telephone}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="motdepasse" onChange={formik.handleChange} value={formik.values.motdepasse}></input>
                </div>
                <div className="row">
                    <button type="submit">Submit</button>
                    <button type="cancel">Cancel</button>
                </div>
            </form> <br/><br/>
            
        </>
    )
}

export default LoginForm;