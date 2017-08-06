<template>
	<div id="Header">
    <header id="header-corporate">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu-top" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link :to="'/'" class="navbar-brand">
              <img src="https://daks2k3a4ib2z.cloudfront.net/578266d29776c827488589dc/578abbe68ad454da63985cb2_trello-logo-white.png" alt="">
            </router-link>
          </div>

          <div class="collapse navbar-collapse" id="navbar-menu-top">
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><router-link :to="'/'" exact>Home</router-link></li>
              <li><router-link :to="'about-us'">About Us</router-link></li>
              <li><router-link :to="'services'">Services</router-link></li>
              <li><router-link :to="'portofolios'">Portofolio</router-link></li>
              <li><router-link :to="'contact-us'">Contact Us</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
	</div>
</template>

<script>
	export default { name: 'Header' }
</script>
