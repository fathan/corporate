<template>
  <div id="IndexServices" class="body--wrapper">
    <!-- SUB HEADER TOP -->
		<section class="sub--header">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="box-desc">
							<div class="title">
								Servis Kami
							</div>
							<div class="description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi distinctio iusto sunt ducimus eos nesciunt impedit ex ipsam. Ratione necessitatibus, beatae nesciunt, excepturi error exercitationem. Maxime voluptatem, fugit laboriosam assumenda?
							</div>
							<br>
              <router-link :to="'apply-project'" class="btn btn-lg btn-warning">
							  Konsultasikan pada kami
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /.SUB HEADER TOP -->
		<!-- NAV TARGET -->
		<section id="navigation-type-service" class="nav-target">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="box-list-nav">
							<ul>
								<li>
									<a class="jump-target" data-target-jump="#bussinessprocess">Bussines Proces</a>
								</li>
								<li>
									<a class="jump-target" data-target-jump="#company-profile">Company Profile</a>
								</li>
								<li>
									<a class="jump-target" data-target-jump="#ecommerce">E-Commerce</a>
								</li>
								<li>
									<a class="jump-target" data-target-jump="#sisteminformasi">Sistem Informasi</a>
								</li>
								<li>
									<a class="jump-target" data-target-jump="#buildstartup">Build Start Up</a>
								</li>
								<li>
									<a class="jump-target" data-target-jump="#webapplication">Web App</a>
								</li>
								<li class="tech">
									<a class="jump-target" data-target-jump="#technologies">Technologies</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /.NAV TARGET -->
		<!-- PROCESS BUSSINESS -->
		<section id="bussinessprocess" class="section--wrapper service-page-wrapper bg-white">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="title--top">
							<div class="title">
								PROCESS BUSSINES/AGILE PROJECT MANAGEMENT
							</div>
							<div class="description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus temporibus sint, soluta, repellat eum suscipit dolorum numquam sunt reiciendis perferendis dolores velit ad voluptas architecto accusamus, placeat eveniet ipsam?
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="service-wrapper__image-process">
							<img src="static/images/gallery/agile.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /.PROCESS BUSSINESS -->
		<section id="company-profile" class="service-page-wrapper bg-grey2">
			<div class="container">
				<div class="row">
					<div class="service-wrapper__info-service">
						<div class="col-md-6">
							<div class="service-info">
								<div class="title">
									Company Profile
								</div>
								<div class="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsum aspernatur repellat repudiandae maiores quam quaerat minima soluta itaque dolorum ad sequi hic, quod eligendi, cum numquam consequuntur veritatis totam.
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="image-info">
								<img src="static/images/service/company-profile.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="ecommerce" class="service-page-wrapper bg-white">
			<div class="container">
				<div class="row">
					<div class="service-wrapper__info-service">
						<div class="col-md-6">
							<div class="image-info">
								<img src="static/images/service/ecommerce.png" alt="">
							</div>
						</div>
						<div class="col-md-6">
							<div class="service-info">
								<div class="title">
									E-Commerce
								</div>
								<div class="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsum aspernatur repellat repudiandae maiores quam quaerat minima soluta itaque dolorum ad sequi hic, quod eligendi, cum numquam consequuntur veritatis totam.
									<ul class="no_bullet">
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="sisteminformasi" class="service-page-wrapper bg-grey2">
			<div class="container">
				<div class="row">
					<div class="service-wrapper__info-service">
						<div class="col-md-6">
							<div class="service-info">
								<div class="title">
									Sistem Informasi
								</div>
								<div class="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsum aspernatur repellat repudiandae maiores quam quaerat minima soluta itaque dolorum ad sequi hic, quod eligendi, cum numquam consequuntur veritatis totam.
									<ul class="no_bullet">
										<li class="check">Lorem ipsum dolor sit amet lorem</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="image-info">
								<img src="static/images/service/sisteminformasi.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="buildstartup" class="service-page-wrapper bg-white">
			<div class="container">
				<div class="row">
					<div class="service-wrapper__info-service">
						<div class="col-md-6">
							<div class="image-info">
								<img src="static/images/service/startup.jpg" alt="">
							</div>
						</div>
						<div class="col-md-6">
							<div class="service-info">
								<div class="title">
									Build Start Up
								</div>
								<div class="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsum aspernatur repellat repudiandae maiores quam quaerat minima soluta itaque dolorum ad sequi hic, quod eligendi, cum numquam consequuntur veritatis totam.
									<ul class="no_bullet">
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="webapplication" class="service-page-wrapper bg-grey2">
			<div class="container">
				<div class="row">
					<div class="service-wrapper__info-service">
						<div class="col-md-6">
							<div class="service-info">
								<div class="title">
									Web App
								</div>
								<div class="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsum aspernatur repellat repudiandae maiores quam quaerat minima soluta itaque dolorum ad sequi hic, quod eligendi, cum numquam consequuntur veritatis totam.
									<ul class="no_bullet">
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
										<li class="check">Lorem ipsum dolor sit amet</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="image-info">
								<img src="static/images/service/webapp.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="technologies" class="section--wrapper">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="title--top">
							<div class="title">
								Technologies Use
							</div>
							<div class="description">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet totam officia facilis inventore asperiores illo animi nisi iusto maiores similique, explicabo sint a. Minus, labore, hic exercitationem at ab ea!
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
  name: 'IndexServices',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped></style>
