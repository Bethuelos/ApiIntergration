import { Link } from "react-router-dom";

function Dashboard() {
    return(
        <>
            <p>This is my dasboard</p>
            <div>
                Go to <Link to="login" >Login</Link> form 
            </div>
            <div>
                Go to <Link to="addUser" >add user</Link> form 
            </div>
        </>
    );
}

export default Dashboard;