import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@radix-ui/themes";

import ProductBox from "../custom/ProductBox";

export default class CamerasTab extends Component {

  state = { products: [],}

  componentDidMount() {
    let data;
    let pdts;
    axios.get('http://localhost:8000/api/get-category-pdts?category=2')
      .then(response => {
        pdts = response.data;
        data = pdts.data;
        this.setState({
          products: data
        });
      })
      .catch(error => {
        console.log("Failed to get products from api");
        console.log(error);
      })
  }
  

  render() {
    const { products } = this.state;

    return (
    <Grid columns='3' gap='3' width='auto'>
      {products.length === 0 ? (
        <div>Loading...</div> // Or any other loading indicator
      ) : (
        products.map((product, index) => (
          <ProductBox product={product} index={index} />
        ))
      )}
    </Grid>
  );
}
}