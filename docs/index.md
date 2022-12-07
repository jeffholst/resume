---
title: "Home"
---

<script setup>
    import VueWriter from 'vue-writer'

    const welcomeAry = [
        'Howdy from Austin, Texas',
        'My name is Jeff Holst',
        'Nice to meet you (virtually)',
        'I\'m a full-stack developer',
        'I love to build amazing things',
        'Enjoy your stay',
    ]
</script>

<div class="grid place-items-center">
  <div class="card card0">
    <div class="border">
    </div>
  </div>
  <div class='mt-3 text-2xl font-bold'>
     <VueWriter :array="welcomeAry" :eraseSpeed="25" />
  </div>
</div>

<style>
.border {
  height: 269px;
  width: 190px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
}
.border:hover {
  border: 1px solid #fff;
}
.card {
  height: 279px;
  width: 200px;
  background: #808080;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card0 {
  background: url("./Jeff01.jpg") center center no-repeat;
  background-size: 220px;
}
.card0:hover {
  background: url("./Jeff02.jpg") left center no-repeat;
  background-size: 400px;
}
.card0:hover .fa {
  opacity: 1;
}
</style>
