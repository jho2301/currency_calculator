<template>
  <div class="app">
    <div class="total-before">
      <div class="title">상품 총액</div>
      <div>{{ totalAfter || 0 }} 원</div>
      <div>( $ {{ totalBefore||0 }} )</div>
    </div>
    <hr />
    <div class="fare">
      <div class="title">배송비</div>
      <div>{{ shippingCost || 0 }} 원</div>
      <div class="title">배대지 비용</div>
      <div>{{ agencyCost || 0 }} 원</div>
    </div>
    <hr />
    <div class="total-after">
      <div class="title">총 비용</div>
      <div>{{ ultimateTotalAfter || 0 }} 원</div>
      <div>( $ {{ ultimateTotalBefore || 0 }} )</div>
    </div>
  </div>
</template>

<script>
import { addComma } from "@/common";

export default {
  data() {
    return {};
  },
  computed: {
    shippingCost() {
      let calToKrw = this.$store.state.shippingCost * this.$store.state.currencyRate;
      calToKrw = ~~calToKrw;
      return addComma(calToKrw);
    },
    agencyCost() {
      let calToKrw = this.$store.state.agencyCost * this.$store.state.currencyRate;
      calToKrw = ~~calToKrw;
      return addComma(calToKrw);
    },
    totalBefore() {
      let totalTemp = this.$store.state.productPrice.reduce(
        (acc, cur) => acc + cur
      );
      return addComma(totalTemp);
    },
    totalAfter() {
      return addComma(
        this.$store.state.productPriceKrw.reduce((acc, cur) => acc + cur)
      );
    },
    ultimateTotalBefore() {
      return (
        this.$store.state.productPrice.reduce((acc, cur) => acc + cur) + (+this.$store.state.shippingCost) + (+this.$store.state.agencyCost)
      );
    },
    ultimateTotalAfter() {
      const totalFare = ((+this.$store.state.agencyCost) + (+this.$store.state.shippingCost)) * this.$store.state.currencyRate;
      const totalProduct = this.$store.state.productPriceKrw.reduce( (acc, cur) => acc + cur );
      return addComma(~~totalFare + ~~totalProduct);
    }
  }
};
</script>

<style lang="css" scoped >
.app {
  background: linear-gradient(
    180deg,
    rgba(240, 240, 240, 1) 0%,
    rgba(255, 255, 255, 1) 47%,
    rgba(255, 255, 255, 1) 100%
  );
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
  border: 0.5px solid rgb(206, 206, 206);
  width: 60%;
}

.title {
  font-weight: 700;
  margin-bottom: 4px;
}
</style>
