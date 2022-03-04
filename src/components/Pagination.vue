<template>
  <div class="page-wrapper">
    <ul class="pagination">
      <li class="page-item">
        <router-link class="page-link" aria-label="Previous" :to="{ name: 'Home', query: {page: getPrev} }">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <li class="page-item" v-for="page in getTotalPage" :key="page">
        <router-link class="page-link" :to="{ name: 'Home', query: {page: page} }">{{page}}</router-link>
      </li>
      <li class="page-item">
        <router-link class="page-link" aria-label="Next" :to="{ name: 'Home', query: {page: getNext} }">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Pagination',
  computed: {
    ...mapGetters(['getTotalPage', 'getNext', 'getPrev'])
  }
}
</script>

<style lang="sass" scoped>
.page-wrapper
  display: flex
  justify-content: center
  ul
    margin-top: 16px
    li
      cursor: pointer
      .page-link
        color: $text-content
</style>