<template>
  <div id="IndexHome" class="body--wrapper">
    <!-- BANNER TOP -->
    <section class="banner-top">
      <div class="banner-top__image-background">
        <div class="img">
          <img src="http://www.primewalls.com/images/magnetic-banner.jpg" alt="Corporate IT Profesional">
          <div class="banner-description">
            <div class="box-desc">
              <div class="title">
                Consultant IT Profesional
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus temporibus culpa alias architecto, blanditiis ex neque consequuntur quo, non inventore ab expedita tempora? Inventore error nulla, fuga. Voluptates, laboriosam, laborum!
              </div>
              <router-link :to="'about-us'" class="btn btn-lg btn-default">
                Abut Us
              </router-link>
              <router-link :to="'portofolios'" class="btn btn-lg btn-danger">
                Portofolio
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="intermezo-banner-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="pull-left">
              <div class="title">
                Ayo Buat aplikasimu sekarang juga!
              </div>
            </div>
            <div class="pull-right">
              <router-link :to="'portofolios'" class="btn btn-lg btn-warning">
                <i class="fa fa-eye"></i>
                LIHAT SEMUA PORTOFOLIO
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.BANNER TOP -->
    <!-- OUR SERVICE -->
    <section class="section--wrapper service-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title--top">
              <div class="title">
                Our Services
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="service-wrapper__list-service">
              <ul>
                <li>
                  <div class="list-service__box-icon">
                    <img src="static/images/gallery/service/company-profile.png" alt="">
                  </div>
                  <div class="list-service__title">
                    Company Profile
                  </div>
                </li>
                <li>
                  <div class="list-service__box-icon">
                    <img src="static/images/gallery/service/online-shop.png" alt="">
                  </div>
                  <div class="list-service__title">
                    E-Commerce
                  </div>
                </li>
                <li>
                  <div class="list-service__box-icon">
                    <img src="static/images/gallery/service/sistem-informasi.png" alt="">
                  </div>
                  <div class="list-service__title">
                    Sistem Informasi
                  </div>
                </li>
                <li>
                  <div class="list-service__box-icon">
                    <img src="static/images/gallery/service/world-map.png" alt="">
                  </div>
                  <div class="list-service__title">
                    Web App
                  </div>
                </li>
                <li>
                  <div class="list-service__box-icon">
                    <img src="static/images/gallery/service/startup.png" alt="">
                  </div>
                  <div class="list-service__title">
                    Build Start Up
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.OUR SERVICE -->
    <!-- POINT-POINT -->
    <section class="point-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12">
                <div class="point-wrapper__box-title-top">
                  <div class="title">
                    Kebutuhan Teknologi
                  </div>
                  <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat numquam eum incidunt, eos a, magnam maxime aliquam. A nobis sunt vitae.
                  </div>
                </div>
              </div>
              <div class="col-md-6" v-for="tech in technologies_desc">
                <div class="point-wrapper__box-point">
                  <div class="image">
                    <img :src="tech.img" alt="">
                  </div>
                  <div class="description">
                    <p>{{ tech.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-12">
                <div class="point-wrapper__box-counting">
                  <div class="box-head">
                    <div class="count-big">
                      50
                    </div>
                    <div class="count-desc">
                      total client
                    </div>
                  </div>
                  <hr>
                  <div class="box-body">
                    <p>
                      <span>30</span>&nbsp;company</p>
                    <p>
                      <span>10</span>&nbsp;online store</p>
                    <p>
                      <span>05</span>&nbsp;goverment</p>
                    <p>
                      <span>05</span>&nbsp;personal</p>
                  </div>
                </div>
                <br>
                <router-link :to="'portofolios'" class="btn btn-block btn-lg btn-warning">
                  <i class="fa fa-eye"></i>
                  LIHAT SEMUA PORTOFOLIO
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.POINT-POINT -->
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
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <br>
              <br>
              <router-link :to="'portofolios'" class="btn btn-lg btn-danger">
                <i class="fa fa-eye"></i>
                LIHAT SEMUA PORTOFOLIO
              </router-link>
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
  name: 'IndexHome',
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
      ],
      technologies_desc: [
        {
          id: 1,
          img: 'static/images/gallery/internet/internet-1.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nihil accusantium.'
        },
        {
          id: 2,
          img: 'static/images/gallery/internet/internet-1.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nihil accusantium.'
        },
        {
          id: 3,
          img: 'static/images/gallery/internet/internet-1.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nihil accusantium.'
        },
        {
          id: 4,
          img: 'static/images/gallery/internet/internet-1.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nihil accusantium.'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
