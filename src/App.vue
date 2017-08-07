<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooterintermezo></appFooterintermezo>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import appFooterintermezo from '@/components/appFooterintermezo'
import appFooter from '@/components/appFooter'

export default {
  name: 'app',
  components: {
    appHeader,
    appFooterintermezo,
    appFooter
  }
}
</script>
