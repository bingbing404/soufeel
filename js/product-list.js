$(".header .auto .list ul li:first-child").hover(function(){
  $(".header .auto .zb").show()
});
$(".header .auto .zb").mouseout(function(){
  $(this).hide();
});

$(".header .auto .list ul li:nth-child(2)").hover(function(){
  $(".header .auto .lp").show()
});
$(".header .auto .lp").mouseout(function(){
  $(this).hide();
});

$(".header .auto .list ul li:nth-child(4)").hover(function(){
  $(".header .auto .jr").show()
});
$(".header .auto .jr").mouseout(function(){
  $(this).hide();
});

$(".header .auto .list ul li:nth-child(5)").hover(function(){
  $(".header .auto .dz").show()
});
$(".header .auto .dz").mouseout(function(){
  $(this).hide();
});

$(".msg .auto .toolbar .sorter .by .label span").click(function(){
  $(".msg .auto .toolbar .sorter .by .label .active").css("display","block");
})

$(".msg .auto .toolbar .sorter .by .label .active li").click(function(){
  var iis = this;
  iis.innerHTML = $(".msg .auto .toolbar .sorter .by .label label").value;
})