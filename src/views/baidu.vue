<template>
  <div class="wrapper wrapper-content animated fadeInRight">
      <p>baidu map</p>
      <div class="ibox-content" id="map" style="position: relative; height: 820px"></div>
  </div>
</template>

<script>
export default {
  name: 'mapPage' ,
  mounted(){
      console.log(999)
      //百度地图加载完成会调用这里，这里就可以正常初始化了
      var map = new BMap.Map('map')   // 创建Map实例
      map.centerAndZoom(new BMap.Point(121.76, 31.05), 11)  // 初始化地图,设置中心点坐标和地图级别
      map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
      //    map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true)    // 开启鼠标滚轮缩放
  }
}

</script>
