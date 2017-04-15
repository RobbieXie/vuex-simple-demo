<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
          <ul class="nav metismenu" id="side-menu">
              <li class="nav-header">
                  <div class="dropdown profile-element">
                          <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                          <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                           </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>
                          <ul class="dropdown-menu animated fadeInRight m-t-xs">
                              <li><a href="#">Logout</a></li>
                          </ul>
                  </div>
                  <div class="logo-element">
                      IN+
                  </div>
              </li>
              <li class="active">
                  <!-- <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Main view</span></a> -->
                  <router-link to="/">Main Page</router-link>
              </li>
              <li  class="active">
                  <!-- <a href="baidu.html"><i class="fa fa-th-large"></i> <span class="nav-label">Baidu view</span> </a> -->
                  <router-link to="/baidu">Map Page</router-link>
              </li>
              <li  class="active">
                  <a href="openlayers.html"><i class="fa fa-th-large"></i> <span class="nav-label">Openlayers view</span> </a>
              </li>
          </ul>

      </div>
  </nav>

</template>

<script>
export default {
  name: 'navBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
