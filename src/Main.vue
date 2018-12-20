<template>
<div class="wrapper">
    <img class="top_line" src="./media/img/main-page/bot-line.png" alt="top-line">
    <div>
        <h1>
            Shopping Cart — Make Purchases Now!
        </h1>
    </div>
    <a >
        <div class="cart">
            <img src="media/img/buttons/shopping-basket.png" alt="basket">
        </div>
    </a>
    <div class="content">
      <router-link to="/t-shirts">
        <div class="t_shorts">
          <img src="./media/img/main-page/t-shirts.png" alt="t_shorts">
          <p>T-Shirts</p>
        </div>
      </router-link>



        <div class="square">
            <img src="./media/img/main-page/cards.png" alt="cards">
            <p>Cards</p>
        </div>
        <div class="square">
            <img src="./media/img/main-page/pens-and-pencils.png" alt="pens-and-pencils">
            <p>Pens & Pencils</p>
        </div>
        <div class="horizontal_notebook">
            <img src="./media/img/main-page/notebooks.png" alt="notebooks">
            <p>Notebooks</p>
        </div>
        <div class="square">
            <img src="./media/img/main-page/toys.png" alt="toys">
            <p>Toys</p>
        </div>
        <div class="vertical">
            <img src="./media/img/main-page/bags.png" alt="bags">
            <p>Bags</p>
        </div>
        <div class="square">
            <img src="./media/img/main-page/scrum-cards.png" alt="scrum-cards">
            <p>Scrum cards</p>
        </div>
        <div class="square">
            <img src="./media/img/main-page/magnets.png" alt="magnets">
            <p>Magnets</p>
        </div>
        <div class="square">
            <img src="./media/img/main-page/pens-and-pencils.png" alt="pens-and-pencils">
            <p>Pens & Pencils</p>
        </div>
        <div class="square">
            <img src="./media/img/main-page/toys.png" alt="toys">
            <p>Toys</p>
        </div>
        <div class="horizontal">
            <img src="./media/img/main-page/caps.png" alt="caps">
            <p>Caps</p>
        </div>
        <div class="square magnet">
            <img src="./media/img/main-page/magnets.png" alt="magnets">
            <p>Magnets</p>
        </div>
    </div>
    <img class="bot_line" src="./media/img/main-page/top-line.png" alt="top-line">
</div>
</template>
<style>
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
  .wrapper{
    position: relative;
    display: block;
    width: 1366px;
    height: 768px;
    overflow: hidden;
    margin: 0 auto;
  }
  h1{
    position: relative;
    font-size: 53px;
    font-family:"Segoe UI", sans-serif;
    font-weight: lighter;
    margin: 33px 30px 32px 30px;
    left: 90px;
    box-sizing: border-box;
    display: block;
  }
  .cart img{
    padding: 15px 20px;
  }
  .cart{
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
  .content{
    position: relative;
    left: 115px;
  }
  .t_shorts{
    width: 360px;
    height: 370px;
    margin: 5px;
    display: inline-block;
    float: left;
  }
  .square{
    height: 180px;
    width: 230px;
    margin: 5px;
    display: inline-block;
    float: left;
  }
  .horizontal{
    position: relative;
    height: 180px;
    width: 360px;
    margin: 5px;
    display: inline-block;
    float: left;
    top: -190px;
  }
  .magnet{
    position: relative;
    top: -190px;
  }
  .horizontal_notebook{
    height: 180px;
    width: 396px;
    margin: 5px;
    display: inline-block;
    float: left;
  }
  .vertical{
    position: relative;
    height: 370px;
    width: 230px;
    margin: 5px;
    display: inline-block;
    float: left;
  }
  .content p{
    position: relative;
    background: #f6f4f2;
    color: #000;
    top: -43px;
    height: 40px;
    opacity: 0.8;
    padding: 5px 20px;
    font-size: 22px;
    font-family:"Segoe UI", sans-serif;
    box-sizing: border-box;
    font-weight: normal;
    width: 100%;
  }

</style>
