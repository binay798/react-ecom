import React from 'react';
import Homepage from './containers/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import Cart from './containers/Cart/Cart';
import CategorieResult from './containers/CategorieResult/CategorieResult';
import AddToDb from './AddToDb';
import { Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <div style={{padding: '1.5rem 8rem'}}>
        <Switch>
          <Route path="/productDetails/:id" exact component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/categorieResult/:id" component={CategorieResult} />
          <Route path="/" component={Homepage} />

        </Switch>
        
        <AddToDb />
      </div>
    </Layout>
    
  );
}

export default App;
