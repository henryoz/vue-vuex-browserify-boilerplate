<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="scss">
  @import '../main';
  h1 {
    color: blue;
    @include transform(scale(0.9) rotate(-3deg));
  }
</style>

<script>
export default {
  data() {
    return {
      // Note: modifying `msg` below will not cause changes to occur with
      // hot-reload. As reloaded components preserve their initial state,
      // modifying these values will have no effect.
      msg: 'Hello World!'
    };
  }
};
</script>
