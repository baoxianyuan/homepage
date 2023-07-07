$(document).ready(function () {
  function updateTime() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    const dateStr = year + "年" + month + "月" + day + "日 ";
    const timeStr = hours + ':' + minutes + ':' + seconds;

    var week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
    document.querySelector('.date').textContent = dateStr + week[String(today.getDay())];
    // document.querySelector('.time').textContent = timeStr;
  }

  // 每秒钟更新一次时间
  setInterval(updateTime, 1000);

  //
  $(".aside .social ul li a").hover(function(){
    $(".aside .social ul li .img_card").removeClass("on");
    var p = $(this).parents("li").find(".img_card");
    p.addClass("on")
  },
  function(){
    $(".aside .social ul li .img_card").removeClass("on");
  })
})