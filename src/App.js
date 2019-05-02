import React, {Component} from 'react';
import storeItems from './data/storeItems.js';
import ProductItem from'./components/ProductItem';

class App extends Component {
    render(){
        return (
            <div Classname="container">
                <div className="row">
                    {storeItems.map((item, i) => {
                        return (

                            <ProcuctItem
                                key={i}
                                name={item.name}
                                price={item.price}
                            />
                        )

                    })}
                </div>
            </div>
    );
  }
}
    export default App;
