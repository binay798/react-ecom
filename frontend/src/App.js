import React from 'react';
import Homepage from './containers/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import Cart from './containers/Cart/Cart';
import CategorieResult from './containers/CategorieResult/CategorieResult';
import AddProductToDb from './containers/AddProductToDb/AddProductToDb';
import Auth from './containers/Auth/Auth';
import classes from './App.module.scss'
// import AddToDb from './AddToDb';
import { Route,Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      {/* Add to db page */}
      <Layout>
      <div className={classes.app}>
        <Switch>
          <Route path="/productDetails/:id" exact component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/addToDb" exact component={AddProductToDb} />
          <Route path="/accounts"  component={Auth} />

          <Route path="/categorieResult/:id" component={CategorieResult} />
          <Route path="/" component={Homepage} />
        </Switch>
        
      </div>
    </Layout>
    </React.Fragment>
    
    
  );
}

export default App;
