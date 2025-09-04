import axios from "axios";

export function getProductData(id) {
    return axios.get("https://dummyjson.com/products/" +id).then(function(response){
      return response.data;
    });
}

export function getProductList() {
  return axios.get("https://dummyjson.com/products").then(function(response){
    return response.data.products;
  });
}

  //xyz is a promise and we are returning that
  /* xyz.then((data)=>{
        console.log("data aa gya",data);

    });
    console.log("aage ka code");*/


//xyz=token
