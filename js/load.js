
var game_div_template = '<div class="game">\
  <div class="title"><%= Title %></div>\
  <div class="coverimg"><img src="<%= CoverImg %>"/></div>\
  <div class="metadata">\
    <div class="installed"><%= Installed %></div>\
    <div class="status"><%= Status %></div>\
  </div>\
</div>';


function load(data, coverdir){
  var main_div = $(".main");
  var single_template = _.template(game_div_template);

  for (var i=0; i<data.length; i++){
    var game_data = data[i];
    game_data.CoverImg = coverdir + game_data.CoverImg;
    var single_html = single_template(game_data);
    main_div.append(single_html);
  }

  var num = data.length;
  $(".menu").html(num);
}

// TODO: change this so that the json doesn't know about any folder strucutre
// pass it in through the pc.html as a $DIR