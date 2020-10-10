import React from 'react';
import Homepage from './containers/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';
import ProductDetails from './containers/ProductDetails/ProductDetails';
function App() {
  return (
    <Layout>
      <div style={{padding: '1.5rem 8rem'}}>
        {/* <Homepage /> */}
        <ProductDetails />
      </div>
    </Layout>
    
  );
}

export default App;
