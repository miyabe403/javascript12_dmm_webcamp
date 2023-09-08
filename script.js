//  $(function() {  
//   $('.menu-trigger').on('click', function(event) {
//     $(this).toggleClass('active');
//     $('#sp-menu').fadeToggle();
//     event.preventDefault();
//   });
// });

// $('#tab-contents .tab[id != "tab1"]').hide();             

// $('#tab-menu a').on('click', function(event) {
//   $("#tab-contents .tab").hide();
//   $("#tab-menu .active").removeClass("active");
//   $(this).addClass("active");
//   $($(this).attr("href")).show();
//   event.preventDefault();
// });

// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "9651237588a4f04285cfe795a57d26a5";
$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    }); 
  });
});