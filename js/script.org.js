// ブラウザ判定
window.onload = function () {
    var userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
        console.log("IEでのアクセスは規制されています");

        document.getElementsByTagName("head")[0].remove();
        var body = document.getElementsByTagName("body");
        body[0].innerHTML = '\
            <div style="text-align: center; margin-top: 55px;"><h1 style="color: red;">IEではこのサイトを閲覧することができません</h1><br>\
            <div style="text-align: center; margin-top: 55px;"><h3>You can\'t access this site by IE.</h3><br>\
            <div style="text-align: center; margin-top: 55px;"><h3>動作保証環境: Edge / Chrome / FireFox</h3></div>\
        ';
    }
}