<template>
  <div id="IndexPortofolios">
    <!-- SUB HEADER TOP -->
		<section class="sub--header diagonal-shadow mg-bottom-diagonal">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="box-desc">
							<div class="title">
								Portofolio
							</div>
							<div class="description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi distinctio iusto sunt ducimus eos nesciunt impedit ex ipsam. Ratione necessitatibus, beatae nesciunt, excepturi error exercitationem. Maxime voluptatem, fugit laboriosam assumenda?
							</div>
							<br>
							<a href="page-formulir-apply-project.php" class="btn btn-lg btn-warning">
								Konsultasikan pada kami
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /.SUB HEADER TOP -->
		<!-- LATEST-PROJECT -->
		<section class="section--wrapper">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="title--top">
							<div class="title">
								latest project
							</div>
						</div>
					</div>
				</div>
				<div class="row">
          <a href="page-portofolio-detail.php">
            <div class="col-md-3">
              <div class="list-portofolio">
                <div class="list-portofolio__image">
                  <img src="static/images/gallery/bg1.jpg" alt="">
                  <div class="box-description">
                    <div class="title">
                      Judul portofolio
                    </div>
                    <div class="type">
                      Type project
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="text-center">
							<br>
							<br>
							<a href="page-portofolio.php" class="btn btn-lg btn-danger">
								<i class="fa fa-eye"></i>
								LIHAT SEMUA PORTOFOLIO
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /.LATEST-PROJECT -->
  </div>
</template>

<script>
export default {
  name: 'IndexPortofolios',
  data () {
    return {
      msg: 'Index portofolio'
    }
  }
}
</script>

<style scoped></style>
