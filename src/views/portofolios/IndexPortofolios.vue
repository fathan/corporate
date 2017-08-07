<template>
  <div id="IndexPortofolios" class="body--wrapper">
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
              <router-link :to="'apply-project'" class="btn btn-lg btn-warning">
							  Konsultasikan pada kami
							</router-link>
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
          <div class="col-md-3" v-for="project in projects">
            <div class="list-portofolio">
              <div class="list-portofolio__image">
                <img :src="project.img">
                <div class="box-description">
                  <router-link :to="'portofolios/detail/3'" class="title">
                    {{ project.title }}
                  </router-link>
                  <div class="type">
                    {{ project.type }}
                  </div>
                </div>
              </div>
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
      projects: [
        {
          id: 1,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        },
        {
          id: 2,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        },
        {
          id: 3,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        },
        {
          id: 4,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        },
        {
          id: 5,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        },
        {
          id: 6,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        },
        {
          id: 7,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        },
        {
          id: 8,
          img: 'static/images/gallery/bg1.jpg',
          title: 'Judul portofolio',
          type: 'Type portofolio'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
