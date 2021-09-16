<template>
  <div class="dashboard-container">
    <div class="dashboard-text">仅供展示demo使用</div>
    <img :src="$resource('desktop_list_book.svg','svg')" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
