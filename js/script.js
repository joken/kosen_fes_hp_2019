// modle画面のOn/off
function modal_open(map_num, place_num) {
  let img = document.getElementById("p" + place_num);
  img.children[0].setAttribute("fill", "#e3170a");
  img.children[1].setAttribute("stroke", "#fdfffc");
  img.classList.add("flag");
  const modals = document.getElementById(map_num).classList.toggle("is-active");
}

function modal_close() {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove("is-active");
  }
  let point_place = document.getElementsByClassName("flag")[0];
  point_place.children[0].setAttribute("fill", "#FFFFFF");
  point_place.children[1].setAttribute("stroke", "");
  point_place.classList.remove("flag");
}

// 記事を読み込む
// fetch("json/shop.json", {
//   mode: "cors"
// })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     // console.log(JSON.stringify(myJson));
//     initVue(myJson);
//   });

var site_data = JSON.parse(
  '{"fes":[{"place":"1","group":"陸上競技部","product":"ハムカツ","map":"map1","contents":[]},{"place":"2","group":"卓球部","product":"チュロス","map":"map1","contents":[]},{"place":"3","group":"硬式テニス部","product":"焼き鳥","map":"map1","contents":[]},{"place":"4","group":"ハンドボール部","product":"ミルクせんべい","map":"map1","contents":[]},{"place":"6","group":"バレーボール部","product":"フランクフルト","map":"map1","contents":[]},{"place":"7","group":"4I","product":"タピオカジュース","map":"map1","contents":[]},{"place":"8","group":"バスケットボール部","map":"map1","product":"からあげ","contents":[]},{"place":"9","group":"高専祭実行委員会","product":"500mlペットボトル飲料","map":"map1","contents":[]},{"place":"10","group":"水泳部","product":"ぶっかけうどん","map":"map1","contents":[]},{"place":"11","group":"ソフトテニス部","product":"コロッケ","map":"map1","contents":[]},{"place":"12","group":"4E","product":"あげギョウザ","map":"map1","contents":[]},{"place":"13","group":"硬式野球部","product":"ワッフル","map":"map1","contents":[]},{"place":"14","group":"剣道部","product":"호떡（ホットク）","map":"map1","contents":[]},{"place":"15","group":"弓道部","product":"チーズドッグ","map":"map1","contents":[]},{"place":"16","group":"アーチェリー部","product":"じゃがバター","map":"map1","contents":[]},{"place":"17","group":"生協学生同好会","product":"スーパーボールすくい","map":"map1","contents":[]},{"place":"18","group":"3C","product":"ホットドッグ","map":"map1","contents":[]},{"place":"19","group":"専攻科","product":"ドリップコーヒー","map":"map1","contents":[]}],"dep":[{"place":"A","group":"電子制御工学科展","product":"自動演奏ハンドベルや自動販売機などの展示","map":"map2","contents":[]},{"place":"C","group":"クイズ研究会","product":"クイズ大会の開催","map":"map2","contents":[]},{"place":"D","group":"機械研究会","product":"鉄道模型の展示","map":"map2","contents":[]},{"place":"E","group":"学生会執行部(talkcafe)","product":"「高専らしさ」をテーマにプレゼン","map":"map2","contents":[]},{"place":"F","group":"将棋部","product":"部員による指導対局","map":"map2","contents":[]},{"place":"G","group":"情報処理研究会","product":"日ごろの活動内容を紹介する展示","map":"map2","contents":[]},{"place":"H","group":"電気工学科展","product":"研究内容、創造実験での製作物の展示等","map":"map2","contents":[]},{"place":"J","group":"物質化学工学科展","product":"体験型の科学実験","map":"map2","contents":[]},{"place":"K","group":"図書委員会","product":"ミニ図書館で読書や読み聞かせ","map":"map2","contents":[]},{"place":"L","group":"美術部","product":"体験コーナー、部員の作品の展示","map":"map2","contents":[]},{"place":"M","group":"現代視覚文化研究会","product":"部員による作品の頒布や展示","map":"map2","contents":[]},{"place":"N","group":"女子プロ","product":"インスタ映えする休憩室","map":"map2","contents":[]},{"place":"O","group":"情報工学科展","product":"シューティングゲーム、プロジェクションマッピング等","map":"map1","contents":[]},{"place":"P","group":"機械工学科展","product":"LaQ、空気砲、VRテキサン等の展示","map":"map1","contents":[]},{"place":"Q","group":"EVプロジェクト","product":"電気自動車の展示","map":"map1","contents":[]}],"plan":{"first":[{"time":"11:00","title":"風船わり"},{"time":"11:45","title":"軽音部アウトライブ"},{"time":"12:30","title":"紙飛行機飛ばし"},{"time":"13:15","title":"合唱同好会"},{"time":"15:00","title":"吹奏楽部お祭りコンサート"}],"second":[{"time":"10:30","title":"軽音部アウトライブ"},{"time":"11:15","title":"ポッキーゲーム"},{"time":"12:00","title":"軽音部アウトライブ"},{"time":"13:30","title":"ストラックアウト"},{"time":"14:15","title":"BINGO"},{"time":"15:00","title":"軽音部アウトライブ"}]},"images":[{"src":"./images/IMG_3138.jpg"},{"src":"./images/IMG_3103.jpg"},{"src":"./images/IMG_3183.jpg"},{"src":"./images/IMG_3280.jpg"}]}'
);

console.log(site_data);

function initVue() {
  new Vue({
    el: "#nav",
    data: {
      showNav: false
    }
  });
  new Vue({
    el: "#app",
    data: {
      groups: site_data["fes"],
      dep: site_data["dep"],
      plan: site_data["plan"],
      img: site_data["images"]
    },
    methods: {
      open: function(map, place) {
        modal_open(map, place);
      }
    }
  });
}

// ブラウザ判定
window.onload = function() {
  var userAgent = window.navigator.userAgent;
  if (userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
    console.log("IEでのアクセスは規制されています");

    document.getElementsByTagName("head")[0].remove();
    var body = document.getElementsByTagName("body");
    body[0].innerHTML =
      '\
            <div style="text-align: center; margin-top: 55px;"><h1 style="color: red;">IEではこのサイトを閲覧することができません</h1><br>\
            <div style="text-align: center; margin-top: 55px;"><h3>You can\'t access this site by IE.</h3><br>\
            <div style="text-align: center; margin-top: 55px;"><h3>動作保証環境: Edge / Chrome / FireFox / Safari</h3></div>\
        ';
  }
  initVue();
};
