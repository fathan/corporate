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
          <div class="col-md-3" v-for="project in portofolio" v-bind:key="project.id">
            <div class="list-portofolio">
              <div class="list-portofolio__image">
                <img :src="project.client_logo_url">
                <div class="box-description">
                  <router-link :to="'portofolios/detail/3'" class="title">
                    {{ project.title }}
                  </router-link>
                  <div class="type">
                    {{ project.client_name }}
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
      portofolio: []
    }
  },
  created () {
    let options = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Api-Key': 'dhiDH@AWIAWDWd&7wd7q8wqyddwjqkhq67612836178sdqydq='
      }
    }

    let body = new FormData()
    body.append('security_key', 'NjZhYzFiZTNhZDI2Yzc3MGUyMWVkOGUwNGQzNzFlMzJkZDBkNTZmNw==')

    this.axios
      .post('http://dev.lusaraproject.com/api/portfolio', body, options)
      .then((response) => {
        console.log(response.data)
        this.portofolio = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped></style>
