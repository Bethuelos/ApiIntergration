import { useFormik } from "formik";
import { addUser } from "../../features/auth/authSlice";
// import * as Yup from "yup";
import { useDispatch } from "react-redux";

function UserForm() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            nom: "TCHUENTE",
            prenom: "Bethuel",
            telephone: "671660023",
            motdepasse: "123456",
            role: "64059d9acd584ec883c847c1",
        },

        onSubmit: (values) => {
            console.log(values.nom)
            dispatch(
                addUser({ nom: values.nom, prenom: values.prenom, motdepasse: values.motdepasse, telephone: values.telephone, role: values.role })
            )
        },
      });

    return(
        <>
            <form className="center" onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="nom" onChange={formik.handleChange} value={formik.values.nom}></input>
                </div>
                <div>
                    <label>Surname</label>
                    <input type="text" name="prenom" onChange={formik.handleChange} value={formik.values.prenom}></input>
                </div>
                <div>
                    <label>Number</label>
                    <input type="text" name="telephone" onChange={formik.handleChange} value={formik.values.telephone}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="motdepasse" onChange={formik.handleChange} value={formik.values.motdepasse}></input>
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" name="role" onChange={formik.handleChange} value={formik.values.role}></input>
                </div>
                <div className="row">
                    <button type="submit">Submit</button>
                    <button type="cancel">Cancel</button>
                </div>
            </form> <br/><br/>

            {/* <div>
                <form>
                    List users
                    <button type="submit">get</button>
                </form>
            </div> */}

            
        </>
    )
}

export default UserForm;