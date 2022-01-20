<template>
  <div class="page-wrapper">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
.page-wrapper
  display: flex
  justify-content: center
  ul
    margin-top: 16px
    li
      .page-link
        color: $mainPink
</style>