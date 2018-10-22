
import React from "react";
import  Link  from"./../react-router/Link";
import Route from "./../react-router/Route";
import BrowserRouter  from "./../react-router/BrowserRouter";
const CustomLinkExample = () => (
    <BrowserRouter>
      <div>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
        <OldSchoolMenuLink to="/about" label="About" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
  
  const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? "active" : ""}>
          {match ? "> " : ""}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
  
  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );
  
  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  );
  
  export default CustomLinkExample;