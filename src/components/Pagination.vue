<template>
  <div class="page-wrapper">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in getTotalPage" :key="page">
        <router-link class="page-link" :to="{ name: 'Home', query: {page: page} }">{{page}}</router-link>
      </li>
      <li class="page-item">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Pagination',
  computed: {
    ...mapGetters(['getTotalPage'])
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