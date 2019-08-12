<template>
  <div class="app">
    <div class="total-before">
      <div>상품 총액</div>
      <div>$1,240</div>
      <div>12312312원</div>
    </div>
    <hr>
    <div class="fare">
      <div>배송비</div>
      <div>1321321원</div>
      <div>배대지 비용</div>
      <div>123123원</div>
    </div>
    <hr>
    <div class="total-after">
      <div>총 비용</div>
      <div>$1,240</div>
      <div>12312312원</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped >
  .app {
    background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 47%, rgba(255,255,255,1) 100%);
    padding: 14px 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: inset 0 3px 4px rgba(145, 154, 173, 0.548);
  }

  * {
    font-size: 0.9rem;
  }

  hr {
    border: 0.6px solid rgb(206, 206, 206);
    width: 60%;
  }
</style>
