import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Create from './Create/Create';
import BlogDetails from './BlogDetails/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetails} />
            {/*catch any route it must be in bottom if it be in top it catch any path */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
