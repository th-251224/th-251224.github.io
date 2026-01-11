let goToLink1 = "";
let goToLink2 = "";

window.onload = init;

function init() {
    //renderLuaChonCongCu();
    actionLogOut();
    let urlCurrent = window.location.href;    
    if(urlCurrent.search("index.html") != -1){
        urlCurrent = urlCurrent.substring(0,urlCurrent.search("index.html")-1);
    }
    else if(urlCurrent.search("/#") != -1){
        urlCurrent = urlCurrent.substring(0,urlCurrent.search("/#"));
    }
    // else if(urlCurrent.search("/") != -1){
    //     urlCurrent = urlCurrent.substring(0,urlCurrent.search("index.html"));
    // }
    goToLink1 = urlCurrent + "/TieuHoc";
    goToLink2 = urlCurrent + "/THCS";
}

// Get the modal
let modal = document.getElementById('id01');
var valueLevel = 0;

function modalSchool(value){
    valueLevel = value;
    var titleLogInLevel = "";
    var colorTitleLogInLevel = "";
    if(valueLevel == 1){
        colorTitleLogInLevel = "#994589";
        titleLogInLevel = "Chọn Trường Cấp Tiểu Học";
        lstSchool(titleLogInLevel, colorTitleLogInLevel, 1);
    }
    else if(valueLevel == 2){
        colorTitleLogInLevel = "#843C0C";
        titleLogInLevel = "Chọn Trường Cấp THCS";
        lstSchool(titleLogInLevel, colorTitleLogInLevel, 2);
    }    
}

let data = [];

function lstSchool(titleModal, colorModal, typeSchool){
    let sheetID = '16-6ytAl5DDR1_wPty0sZDMcgSb5psUnfkAbDIqgx-o8';
    let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
    data = [];
    if(typeSchool==1 || typeSchool==2){
        var sheetName = 'School_Detail';
        //up
        var qu_AllData = '';
        if(typeSchool==1){
            qu_AllData = 'Select B,C,D,F,G,H WHERE C = \"S1\" AND E = \"ON\"';
        }
        else{
            qu_AllData = 'Select B,C,D,F,G,H WHERE C = \"S2\" AND E = \"ON\"';
        }
        var queryAllData = encodeURIComponent(qu_AllData);
        
        var urlAllData = `${base}&sheet=${sheetName}&tq=${queryAllData}`;
        fetch(urlAllData)
        .then(res => res.text())
        .then(rep => {                
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            const colz = [];
            jsData.table.cols.forEach((heading) => {
                if (heading.label) {
                    colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
                }
            })
            jsData.table.rows.forEach((main) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
                })
                data.push(row);
            })            
            renderNameSchool(titleModal, colorModal, data);
            return;
        });
    }
    else{
        data = null;
        renderNameSchool(titleModal, colorModal, data);
    }
}

function renderNameSchool(titleModal, colorModal, data){
    document.getElementById('id01').style.display='block';
    var htmlModalSchool = "";
    var htmlListSchool = "<select id=\"select-name-school\" style=\"padding:10px; margin:5px;\" required>" + "<option value=\"0\">-----.-----</option>";

    for(var i=0; i<data.length; i++){
        htmlListSchool = htmlListSchool
                    + "<option value=\""
                    + data[i]["codeschool"]
                    + "\">"
                    + data[i]["nameschool"]
                    + "</option>";
    }
    htmlListSchool = htmlListSchool + "</select>";

    htmlModalSchool = "<div class=\"modal-content animate\">"
                    + "<div class=\"imgcontainer\">"
                    + "<span onclick=\"document.getElementById(\'id01\').style.display=\'none\'\" class=\"close\" title=\"Close Modal\">&times;</span>"
                    + "</div>"
                    + "<div class=\"container\" autocomplete=\"off\" >"
                    + "<h2 style=\"text-align: center; color: "
                    + colorModal
                    + ";\" for=\"uname\"><b>"
                    + titleModal
                    + "</b></h2>"
                    + htmlListSchool
                    + "<button style=\"width:90%;\" onclick=\"goToTool()\">OK</button>"
                    + "</div>"
                    + "</div>";


    document.getElementById("id01").innerHTML = htmlModalSchool;
    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function goToTool(){
    var valNameSchool = "";
    valNameSchool = document.getElementById("select-name-school").value;

    if(valNameSchool == 0){
        alert("Bạn hãy chọn trường học trước khi bắt đầu nhé!");
    }
    else{                 
        for(var i=0; i<data.length; i++){
            if(data[i]["codeschool"] == valNameSchool){
                setCookie("CodeSchool",data[i]["codeschool"],8);
                setCookie("CodeTypeSchool",data[i]["codetypeschool"],8);
                setCookie("NameSchool",data[i]["nameschool"],8);
                setCookie("LS1",data[i]["ls1"],8);
                setCookie("LS2",data[i]["ls2"],8);
                setCookie("LS3",data[i]["ls3"],8);
                break;
            }
        }
        if(getCookie("CodeTypeSchool") == "S1"){
            window.open(goToLink1,"_self");
        }
        else if(getCookie("CodeTypeSchool") == "S2"){
            window.open(goToLink2,"_self");
        }
    }
}

function setCookie(cname,cvalue,exhours) {
    const d = new Date();
    d.setTime(d.getTime() + (exhours*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";   
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function actionLogOut(){
    document.cookie = 'CodeSchool=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'CodeTypeSchool=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'NameSchool=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'LS1=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'LS2=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'LS3=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'classOfUser=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'nameUsr=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'typeUserDetail=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'usr=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'ID=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'STime=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}