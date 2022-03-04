<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initialFB } from '../src/utils/fbLogin'
export default {
  name: 'App',
  created() {
    initialFB()
  },
}
</script>

<style lang="sass">
@import './styles/main.sass'
</style>