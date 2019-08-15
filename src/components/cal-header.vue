<template>
  <div class="layout">
    <span class="title">직구 계산기</span>
    <font-awesome-icon class="calculator" icon="calculator" />
    <span class="currency">
      krw/usd
      <font-awesome-icon class="sort-down" icon="sort-down" />
    </span>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped >
.layout {
  display: flex;
  align-items: flex-end;
}

.title {
  font-family: "Black Han Sans", sans-serif;
  font-size: 4rem;
  line-height: 50px;
}

.currency {
  font-family: "Noto Sans KR";
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0 0 4px auto;
}

.sort-down {
  margin: 3px;
}

.calculator {
  font-size: 3rem;
  margin-bottom: 6px;
  margin-left: 4px;
}
</style>
