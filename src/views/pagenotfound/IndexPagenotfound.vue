<template>
  <div id="Pagenotfound">
    <section class="section--wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3>{{ msg }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Pagenotfound',
    data () {
      return {
        msg: 'Maaf, halaman tidak ditemukan dalam sistem'
      }
    }
  }
</script>

<style scoped>

</style>
