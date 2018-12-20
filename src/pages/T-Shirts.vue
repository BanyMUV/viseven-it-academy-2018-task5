<template>
  <div id="wrapper">
    <img class="top_line" src="../media/img/main-page/bot-line.png" alt="top-line">
    <div class="container">
      <a @click.prevent="goBack" class="back"><img src="../media/img/buttons/back.png" alt="<-"></a>
      <div>
        <h2 v-if="!isShowingCart">T-Shirts</h2>
          <button @click="isShowingCart = true" class="cart">
            <img class="cart-img" src="../media/img/buttons/shopping-basket.png" alt="Cart">
            <div class="total">
              {{cartTotal | currency }}
            </div>
          </button>
      </div>
      <div class="shirts" id="products" v-if="!isShowingCart">
        <div  v-for="product in products">
          <div class="box-item">
            <img :src="product.image" alt="shirts">
            <div>
              <p class="name-shirts">
                {{ product.name }}
              </p>
              <p class="price-shirts">
              {{ product.price | currency }}
              </p>
              <div>

                <div class="info">
                  <button class="plus" @click="addProductToCart(product)">+</button>
                  <button class="minus" @click="minusProductToCart(product)">-</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2>Your Cart</h2>
        <table v-if="cart.items.length > 0" class="items-in-cart">
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th class="right">Price</th>
          </tr>
          <tr v-for="item in cart.items">
            <td>
              <button @click="deleteQuantity(item)" class="delete">
                <img src="../media/img/buttons/delete.png" alt="X">
              </button>
              {{ item.product.name }}
            </td>
            <td>
              <button @click="increaseQuantity(item)" class="plus-cart">
                <img src="../media/img/buttons/plus.png" alt="+">
              </button>
              {{ item.quantity }}&nbsp;
              <button @click="decreaseQuantity(item)" class="minus-cart">
                <img src="../media/img/buttons/minus.png" alt="-">
              </button>
            </td>
            <td class="right">{{ item.quantity * item.product.price | currency}}</td>
          </tr>
        <tr id="clear-all-and-sum">
          <td><button @click="clearAll" id="clear_cart">clear all</button></td>
          <td></td>
          <td id="total-sum">Sum {{cartTotal | currency }}</td>
        </tr>
          <tr id="info-buttons">
            <td><router-link to="/main" id="continue-shop">Continue shopping</router-link></td>
            <td></td>
            <td><button @click="buy" id="buy">Buy</button></td>
          </tr>
        </table>
      </div>
    </div>
    <img class="bot_line" src="../media/img/main-page/bot-line.png" alt="top-line">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShowingCart: false,
        cart:{
          items:[]
        },
        products:[
          {
            id: 1,
            name:"Green-Xtreame",
            price: 250,
            image: 'src/media/img/t-shirts/shirt-1.png'
          },
          {
            id: 2,
            name:"Digital Owl",
            price: 312,
            image: 'src/media/img/t-shirts/shirt-2.png'
          },
         {
            id: 3,
            name:"I Can",
            price: 280,
            image: 'src/media/img/t-shirts/shirt-3.png'
          },
          {
            id: 4,
            name:"GB Shirts",
            price: 290,
            image: 'src/media/img/t-shirts/shirt-4.png'
          }
            ]
          }
    },
    computed:{
      cartTotal(){
        let total = 0;
        this.cart.items.forEach(function (item) {
          total += item.quantity * item.product.price;
        });
        return total;
      }
    },
    filters:{
      currency(value){
        let formatter = new Intl.NumberFormat("en-US",{
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        });
        return formatter.format(value);
      }
    },
    methods:{
      addProductToCart(product){
        let cartItem = this.getCartItem(product);

        if(cartItem != null){
          cartItem.quantity++;
        }else{
          this.cart.items.push({
            product: product,
            quantity: 1
          });
        }
      },
      minusProductToCart(product){
        let cartItem = this.getCartItem(product);
        cartItem.quantity--;
        if(cartItem.quantity === 0){
          this.removeItemFromCart(cartItem);
        }
      },
      increaseQuantity(cartItem){
        cartItem.quantity++;
      },
      decreaseQuantity(cartItem){
        cartItem.quantity--;
        if(cartItem.quantity === 0){
          this.removeItemFromCart(cartItem);
        }
      },
      getCartItem(product){
        for(let i = 0; i < this.cart.items.length; i++){
          if(this.cart.items[i].product.id === product.id){
            return this.cart.items[i];
          }
        }
        return null;
      },
      buy(){
        if( confirm ("Buy")){
          this.cart.items.forEach(function(item){
            item.product += item.quantity;
          });
          this.cart.items = [];
        }
      },
      clearAll(){
        this.cart.items = [];
      },
      deleteQuantity(cartItem){
        let index = this.cart.items.indexOf(cartItem);
        this.cart.items.splice(index, 1)
      },
      removeItemFromCart(cartItem){
        let index = this.cart.items.indexOf(cartItem);
        if (index !== -1){
          this.cart.items.splice(index, 1)
        }
      },
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .top_line{
    position: absolute;
    height: 5px;
    top: 0;
  }
  .bot_line{
    position: absolute;
    bottom: 0;
    left: 0;
  }
  #wrapper{
    position: relative;
    display: block;
    width: 1366px;
    height: 768px;
    overflow: hidden;
    margin: 0 auto;
  }
  .back{
    position: absolute;
    top: 59px;
    left: 39px;
  }
  h2{
    position: relative;
    font-size: 53px;
    font-family: "Segoe UI", sans-serif;
    font-weight: lighter;
    margin: 40px 0 24px 28px;
    left: 90px;
    box-sizing: border-box;
    display: block;
    letter-spacing: 1px;
  }
  .cart-img{
    padding: 15px 20px;
    float: left;
  }
  .cart{
    border: none;
    position: absolute;
    background: #d9644a;
    width: 280px;
    height: 60px;
    left: 1090px;
    top: 40px;
  }
  .cart:hover{
    background: #e8502e;
    cursor: pointer;
  }
  .total{
    position: relative;
    float: right;
  }
  .shirts{
    width: 1500px;
    position: relative;
    left: 115px;
    overflow: hidden;
  }
  .box-item{
    float: left;
    display: inline-block;
    margin: 5px;
    width: 360px;
    height: 500px;
  }

  .price-shirts{
    position: relative;
    background: #f6f4f2;
    top: -48px;
    height: 45px;
    opacity: 0.8;
    padding: 0 19px 0 0;
    font-size: 32px;
    font-family:"Segoe UI", sans-serif;
    box-sizing: border-box;
    font-weight: normal;
    width: 100%;
    text-align: right;
    color: #d9644a;
  }
  .name-shirts  {
    position: absolute;
    top: 320px;
    font-size: 22.3px;
    font-family: "Segoe UI", sans-serif;
    padding: 20px 19px;
    z-index: 1;
    color: #3d3b39;
  }
  .info{
    box-sizing: border-box;
    position: relative;
    top: -40px;
    width: 360px;
    height: 80px;
    background: #4EA686;
  }
  .minus{
    background: url("../media/img/buttons/minus.png") no-repeat;
    width: 40px;
    height: 40px;
    border: none;
    margin: 22px;
    float: left;
  }
  .plus{
    background: url("../media/img/buttons/plus.png") no-repeat;
    width: 40px;
    height: 40px;
    border: none;
    margin: 22px;
    float: right;
  }
  .total{
    margin: 15px;
    font-family: "Segoe UI", sans-serif;
    font-size: 20px;
    color: #fff;
  }
  table {
    border-collapse: collapse;
    color: #fff;
    font-family:"Segoe UI", sans-serif;
    font-size: 18px;
    font-style: normal;
    position: relative;
    height: auto;
    width: 500px;
    left: 115px;
  }
  .items-in-cart tr:nth-child(odd){
    background: #d9644a;
  }
  .items-in-cart tr:nth-child(even){
    background: #bf613f;
  }
  td{
    text-align: left;
    padding: 0 0 0 5px;
    vertical-align: middle;
  }
  th{
    text-align: left;
    padding: 0 0 0 5px;
    vertical-align: middle;
  }
  #continue-shop{
    margin: 10px;
    border: 1px solid #fff;
    color: #fff;
    background: inherit;
    font-family:"Segoe UI", sans-serif;
    font-size: 14px;
    padding: 0 20px;
    text-decoration: none;
  }
  #buy{
    margin: 10px;
    border: 1px solid #fff;
    color: #fff;
    background: inherit;
    font-family:"Segoe UI", sans-serif;
    font-size: 14px;
    padding: 0 20px;
    float: right;
  }
  #info-buttons{
    background: #4EA686;
    margin-top: 10px;
    position: relative;
    width: 500px;
    left: 115px;
  }
  #clear_cart{
    margin: 5px 10px;
    background: inherit;
    border: 1px solid #fff;
    color: #fff;
    font-family:"Segoe UI", sans-serif;
    font-size: 14px;
    padding: 0 20px;
  }
  #total-sum{
    margin:0 15px;
    color: #fff;
    font-family:"Segoe UI", sans-serif;
    font-size: 18px;
    float: right;
  }
  .delete img{
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
  .plus-cart img,
  .minus-cart img{
    width: 100%;
  }
  .delete{
    border: 1px solid #fff;
    margin: 5px 10px;
    width: 25px;
    height: 25px;
    background: inherit;
  }
  .plus-cart,
  .minus-cart{
    width: 25px;
    height: 25px;
    margin-top: 5px;
    background: inherit;
    border: none;
  }
  #clear-all-and-sum{
    background: #343e40;
    position: relative;
    height: auto;
    width: 500px;
    left: 115px;
  }
  .right{
    text-align: right;
    padding: 0 15px;
  }
</style>
