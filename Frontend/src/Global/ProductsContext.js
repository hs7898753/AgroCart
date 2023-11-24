import React, { createContext } from 'react'
import { db } from '../config/config'

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        db.collection('Products').onSnapshot(snapshot => {
          let changes = snapshot.docChanges();
          let updatedProducts = [...this.state.products]; // Copy the current state
      
          changes.forEach(change => {
            if (change.type === 'added') {
              updatedProducts.push({
                id: change.doc.id,
                category: change.doc.data().category,
                title: change.doc.data().title,
                price: change.doc.data().price,
                img: change.doc.data().img
              });
            }
          });
      
          // Update the state once after all changes
          this.setState({
            products: updatedProducts
          });
        });
      }
      
    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}