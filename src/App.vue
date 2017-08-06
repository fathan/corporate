<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
     <Footerintermezo></Footerintermezo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footerintermezo from '@/components/Footerintermezo'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footerintermezo,
    Footer
  }
}
</script>
