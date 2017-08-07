<template>
  <div id="IndexContactus" class="body--wrapper">
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
  name: 'IndexContactus',
  data () {
    return {
      msg: 'Index contact us'
    }
  }
}
</script>

<style scoped></style>
