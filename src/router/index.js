import Vue from 'vue'
import Router from 'vue-router'
import IndexAboutus from '@/views/aboutus/IndexAboutus'
import IndexApplyproject from '@/views/applyproject/IndexApplyproject'
import IndexContactus from '@/views/contactus/IndexContactus'
import IndexHome from '@/views/home/IndexHome'
import IndexPortofolios from '@/views/portofolios/IndexPortofolios'
import ShowPortofolio from '@/views/portofolios/ShowPortofolio'
import IndexServices from '@/views/services/IndexServices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexHome',
      component: IndexHome
    },
    {
      path: '/about-us',
      name: 'IndexAboutus',
      component: IndexAboutus
    },
    {
      path: '/apply-project',
      name: 'IndexApplyproject',
      component: IndexApplyproject
    },
    {
      path: '/contact-us',
      name: 'IndexContactus',
      component: IndexContactus
    },
    {
      path: '/portofolios',
      name: 'IndexPortofolios',
      component: IndexPortofolios
    },
    {
      path: '/portofolio/:id',
      name: 'ShowPortofolio',
      component: ShowPortofolio
    },
    {
      path: '/services',
      name: 'IndexServices',
      component: IndexServices
    }
  ]
})
