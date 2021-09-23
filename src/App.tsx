import RecipeListComponent from "./components/recipe-list/RecipeList";
import RecipeProvider from "./context/RecipeProvider";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavouriteList from "./components/recipe-list/FavouriteList";

function App() {
  return (
    <div className='App'>
      <Router>
        <RecipeProvider>
          <Navbar />
          <Switch>
            <Route path='/fav' component={FavouriteList} />
            <Route exact path='/' component={RecipeListComponent} />
          </Switch>
        </RecipeProvider>
      </Router>
    </div>
  );
}

export default App;
