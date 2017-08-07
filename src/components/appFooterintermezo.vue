<template>
	<div id="Footerintermezo">
		<section class="intermezo-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="pull-left">
              <div class="box-info">
                <div class="title">
                  Ayo buat aplikasimu sekarang juga
                </div>
                <div class="description">
                  Dengan kami Brand anda semuanya menjadi lebih profesional
                </div>
              </div>
            </div>
            <div class="pull-right">
              <router-link :to="'portofolios'" class="btn btn-lg btn-danger">
                <i class="fa fa-eye"></i>
                LIHAT SEMUA PORTOFOLIO
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
	export default { name: 'appFooterintermezo' }
</script>
