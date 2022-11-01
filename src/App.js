import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import ResponsiveAppBar from 'components/ResponsiveAppBar';
import Offers from 'pages/Offers';
import Posts from 'pages/Posts';
import Freelancer from 'pages/Freelancer';
import ActivationCompte from 'pages/ActivationCompte';
import LoginClient from 'pages/LoginClient';
import RegisterClient from 'pages/RegisterClient';
import Servicedetails from 'pages/Servicedetails';

function App() {

    return (
        <>
        <div className="absolute w-full z-20">
        <ResponsiveAppBar />
    </div>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/freelancer" component={Freelancer} />
            <Route exact path="/confirm/:token" component={ActivationCompte} />
            <Route exact path="/servicedetails" component={Servicedetails} />
             <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/client/login" component={LoginClient} />
            <Route exact path="/client/register" component={RegisterClient} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    );
}

export default App;
