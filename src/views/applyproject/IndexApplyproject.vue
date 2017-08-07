<template>
  <div id="IndexApplyproject" class="body--wrapper">
    	<section class="section--wrapper">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="title--top">
							<div class="title">
								formulir apply project
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-8 col-md-offset-2">
						<div class="panel panel-default">
							<div class="panel-body">
								<form action="">
									<div class="col-md-6">
										<label for="#">Nama Lengkap</label>
										<input type="text" class="form-control">
									</div>
									<div class="col-md-6">
										<label for="#">Website URL</label>
										<input type="text" class="form-control">
									</div>
									<div class="col-md-6">
										<label for="email">Email</label>
										<p :class="{ 'control': true }">
											<input v-validate="'required|email'" :class="{'form-control': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
											<span v-show="errors.has('email')" class="help is-danger">
												{{ errors.first('email') }}
											</span>
										</p>
									</div>
									<div class="col-md-6">
										<label for="#">Dapat dari mana info kami</label>
										<select name="" id="" class="form-control">
											<option value="#">Pilih salah satu</option>
											<option value="#">Internet</option>
											<option value="#">Google</option>
											<option value="#">Teman</option>
										</select>
									</div>
									<div class="col-md-6">
										<label for="#">Telepon</label>
										<input type="text" class="form-control">
									</div>
									<div class="col-md-6">
										<label for="#">Plan to Start</label>
										<input type="text" class="form-control">
									</div>
									<div class="col-md-12">
										<label for="#">Pesan anda</label>
										<textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
									</div>
									<div class="col-md-12">
										<label for="#">Masukan Dokumen anda</label>
										<input type="file" class="form-control">
									</div>
									<div class="col-md-12">
										<br>
										<button class="btn  btn-lg btn-danger" type="submit">
											<i class="fa fa-send"></i>
											Kirim
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  name: 'IndexApplyproject',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped></style>
