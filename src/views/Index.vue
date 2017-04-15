<template>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center m-t-lg">
                    <h1>
                        {{userInfo.userName}} 666
                    </h1>
                    <small>
                        It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment for these projects.
                    </small>
                    <p>
                      <button @click="login('xietiandi','930912')">login</button>
                      <button @click="logout('xietiandi','930912')">logout</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'index',
  computed: {
    ...mapGetters({
    userInfo: 'userInfo'
    }),
    isLoggedIn () {
      return this.userInfo.userName != "";
    }
  },
  methods:{
    ...mapActions([
    'login',
    'logout'
    ])
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
