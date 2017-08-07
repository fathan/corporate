import Vue from 'vue'
import Router from 'vue-router'
import IndexAboutus from '@/views/aboutus/IndexAboutus'
import IndexApplyproject from '@/views/applyproject/IndexApplyproject'
import IndexContactus from '@/views/contactus/IndexContactus'
import IndexHome from '@/views/home/IndexHome'
import Pagenotfound from '@/views/pagenotfound/IndexPagenotfound'
import IndexPortofolios from '@/views/portofolios/IndexPortofolios'
import ShowPortofolio from '@/views/portofolios/ShowPortofolio'
import IndexServices from '@/views/services/IndexServices'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
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
      redirect: '/portofolios',
      name: 'Portofolios',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'IndexPortofolios',
          component: IndexPortofolios
        },
        {
          path: 'detail/:id',
          name: 'ShowPortofolio',
          component: ShowPortofolio
        }
      ]
    },
    {
      path: '/services',
      name: 'IndexServices',
      component: IndexServices
    },
    {
      path: '*',
      component: Pagenotfound
    }
  ]
})
