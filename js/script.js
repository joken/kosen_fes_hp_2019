// modle画面のOn/off
function modal_open(map_num, place_num) {
  let img = document.getElementById('p' + place_num);
  img.children[0].setAttribute('fill', '#e3170a');
  img.children[1].setAttribute('stroke', '#fdfffc');
  img.classList.add('flag');
  const modals = document.getElementById(map_num).classList.toggle("is-active");
}

function modal_close() {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove("is-active");
  }
  let point_place = document.getElementsByClassName('flag')[0];
  point_place.children[0].setAttribute('fill', '#FFFFFF');
  point_place.children[1].setAttribute('stroke', '');
  point_place.classList.remove('flag');
}

// 記事を読み込む
fetch("json/shop.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    // console.log(JSON.stringify(myJson));
    initVue(myJson);
  });

function initVue(data) {
  new Vue({
    el: "#nav",
    data: {
      showNav: false
    }
  });
  new Vue({
    el: "#app",
    data: {
      groups: data["fes"],
      dep: data["dep"],
      plan: data["plan"]
    },
    methods: {
      open: function (map, place) {
        modal_open(map, place);
      }
    },
  });
}
