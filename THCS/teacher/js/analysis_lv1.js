let linkHomePage = "https://www.ic3.info.vn";
let data1 = [];
let listUnitLT = [];
let listUnitTT = [];
let listDataResultAllView = [];
let lstClassDetail = [];
let user1 = "";
let end_time1 = "";
let checkRow1 = false;
let lstClassSearch = [];
let checkAccAdmin = false;
let titleClass = "";
let titleUnit = "";
window.onload = init;

function init() {
  checkCookieHome();
  checkCookie();
  renderNameUsr();
  getListClassSearch();
  getListUnit();
  btnSearch();
  logOut();
}

function checkCookieHome(){
    let sheetID = '16-6ytAl5DDR1_wPty0sZDMcgSb5psUnfkAbDIqgx-o8';
    let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
    let codeSchool = getCookie("CodeSchool");
    let ls1 = getCookie("LS1");
    let ls2 = getCookie("LS2");
    let ls3 = getCookie("LS3");
    let dataCheckCookie = [];
    var sheetName = 'School_Detail';
    //up
    var qu_AllData = '';
    qu_AllData = 'Select B,C,D,F,G WHERE B = \"' + codeSchool + '\" AND F = \"' + ls1 + '\" AND G = \"' + ls2 + '\" AND H = \"' + ls3 + '\"';
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
            dataCheckCookie.push(row);
        })
        renderNameSchool(dataCheckCookie);        
        return;
    });
    
}

function renderNameSchool(data){    
    if(data.length == 0){
        alert("Bạn cần chọn lại trường mình đang học!");
        window.location.href = linkHomePage;
    }
    else{
        document.getElementById("name-school").innerHTML = getCookie('NameSchool');
    }    
}

function renderNameUsr(){
    var htmlRenderNameUser = "<span style=\"color:blue;\">Xin Chào! </span>" + getCookie("nameUsr");
    document.getElementById("nameUsr").innerHTML = htmlRenderNameUser;
}

function getListClassSearch(){
  let sheetID = getCookie("LS2");
  let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  lstClassSearch = [];
  var sheetName = 'QL_GV_K6';
  var qu_AllData = 'Select A, D WHERE A = \"' + getCookie("usr") + '\"';
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
          lstClassSearch.push(row);
      })
      actionLoadListClassSearch(lstClassSearch);
  });
}

function actionLoadListClassSearch(lstClassSearch){
    checkAccAdmin = false;
    var tmpLstClassSearch = [];
    
    for(var i=0; i<lstClassSearch.length; i++){
        //up
        if(lstClassSearch[i]["class"] == "K6"){
            let sheetID = getCookie("LS2");
            let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
            checkAccAdmin = true;
            var sheetName = 'Class_Detail';
            //up
            var qu_AllData = 'Select B WHERE A = \"K6\"';
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
                    tmpLstClassSearch.push(row);
                })
                lstClassSearch = tmpLstClassSearch;
                actionLoadListClassSearchResult(lstClassSearch);                
                return;
            });
        }
        else if(lstClassSearch[i]["class"] == "ALL"){
            let sheetID = getCookie("LS2");
            let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
            checkAccAdmin = true;
            var sheetName = 'Class_Detail';
            //up
            var qu_AllData = 'Select B WHERE A = \"K6\" OR A = \"K7\" OR A = \"K8\"';
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
                    tmpLstClassSearch.push(row);
                })
                lstClassSearch = tmpLstClassSearch;
                actionLoadListClassSearchResult(lstClassSearch);                
                return;
            });
        }
    }
    //console.log(lstClassSearch);
    if(checkAccAdmin == false){
        actionLoadListClassSearchResult(lstClassSearch);
    }    
}

function actionLoadListClassSearchResult(lstClassSearch){
    var htmlListClass = "<option value=\"0\">-----</option>";
  
    for(var i=0; i<lstClassSearch.length; i++){
        htmlListClass = htmlListClass
                    + "<option value=\""
                    + lstClassSearch[i]["class"]
                    + "\">"
                    + lstClassSearch[i]["class"]
                    + "</option>";
    }
    var htmlSelectClass = "<label>Chọn Lớp:&ensp;</label>"
                        + "<select id=\"select-class-search\" required>"
                        + htmlListClass
                        + "</select>";
    htmlSelectClass = htmlSelectClass + "<hr>";
    document.getElementById("select-class").innerHTML = htmlSelectClass;

}

function actionLoadListUnit(lstU1,lstU2){
  var htmlListUnit1 = "<option value=\"0\">-----</option>";
  
  for(var i=0; i<lstU1.length; i++){
    htmlListUnit1 = htmlListUnit1
                  + "<option value=\""
                  + lstU1[i]["id"]
                  + "\">"
                  + lstU1[i]["nametodo"]
                  + "</option>";
  }

  var htmlListUnit2 = "";
  for(var i=0; i<lstU2.length; i++){
    htmlListUnit2 = htmlListUnit2
                  + "<option value=\""
                  + lstU2[i]["id"]
                  + "\">"
                  + lstU2[i]["nametodo"]
                  + "</option>";
  }
  var htmlSelectUnit = "<label>Chọn Bài:&ensp;</label>"
                      + "<select id=\"select-unit-analysis\" required>"
                      + htmlListUnit1
                      + htmlListUnit2
                      + "</select>";
  htmlSelectUnit = htmlSelectUnit + "<hr>";
  document.getElementById("select-tool").innerHTML = htmlSelectUnit;
}

function getListUnit(){
  let sheetID = getCookie("LS1");
  let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  listUnitLT = [];
  //Here
  var sheetName = 'CC1_LV1';
  var qu_AllData = 'Select B, E';
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
          listUnitLT.push(row);
      })
      getListUnit2(listUnitLT);
  });
}

function getListUnit2(listUnitLT){
  let sheetID = getCookie("LS1");
  let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  listUnitTT = [];
  //Here
  var sheetName = 'CC2_LV1';
  var qu_AllData = 'Select B, E';
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
          listUnitTT.push(row);
      })
      actionLoadListUnit(listUnitLT,listUnitTT);
  });
}

function renderDataResultSearch(){
  let sheetID = getCookie("LS2");
  let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  var unitSelected = document.getElementById("select-unit-analysis");
  var classSelected = document.getElementById("select-class-search");
  titleUnit = unitSelected.options[unitSelected.selectedIndex].text;
  titleClass = classSelected.options[classSelected.selectedIndex].text;
  unitSelected = unitSelected.value;  
  classSelected = classSelected.value;
  
  var userStatus = document.getElementById("select-user-status");
  userStatus = userStatus.value;
  if(userStatus=="0" || classSelected=="0" || unitSelected=="0"){
    alert("Bạn vui lòng chọn các mục: \"Lớp\", \"Bài\", \"Trạng Thái\" để tìm kiếm!");
  }
  else{
    listDataResultAllView = [];
    var sheetName = 'Result_All_View';
    var qu_AllData = 'Select B, C, D, E, F, G, H, I, J WHERE E = \"' + unitSelected + '\" AND D = \"' + classSelected + '\"';
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
            listDataResultAllView.push(row);
        })
        lstResultAllView(listDataResultAllView);
    });
  }  
}

function lstResultAllView(lst_ResAllView){
    var userStatus = document.getElementById("select-user-status");
    userStatus = userStatus.value;
    if(lst_ResAllView.length == 0){
        if(userStatus == "1"){
            document.getElementById("main").innerHTML = "<h2><span style=\"color:blue;font-weight:bold;font-style:italic\">Chưa có dữ liệu!</span></h2>";
        }
        else if(userStatus == "2"){
            let sheetID = getCookie("LS2");
            let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
            var classSelected = document.getElementById("select-class-search");
            classSelected = classSelected.value;
            
            lstClassDetail = [];
            //Here
            var sheetName = 'LogIn1';
            var qu_AllData = 'Select A, I WHERE H = \"' + classSelected + '\"';
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
                    lstClassDetail.push(row);
                })
                renderTableDataResultSearch(lstClassDetail,lst_ResAllView,0,2);
            });
        }
    }
    else{
        let sheetID = getCookie("LS2");
        let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
        var classSelected = document.getElementById("select-class-search");
        classSelected = classSelected.value;
        
        lstClassDetail = [];
        //Here
        var sheetName = 'LogIn1';
        var qu_AllData = 'Select A, I WHERE H = \"' + classSelected + '\"';
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
                lstClassDetail.push(row);
            })
            renderTableDataResultSearch(lstClassDetail,lst_ResAllView,1,3);
        });
    }
}

function renderTableDataResultSearch(lstClassDetail,lst_ResAllView,val_lst_ResAllView,val_User_Status){
//TH1
    if(val_lst_ResAllView == 0 && val_User_Status == 2){
        var iCount = 0;
        var htmlListForm1 = "";
        for(var count=0; count<lstClassDetail.length; count++){
            htmlListForm1 = htmlListForm1 + "<tr "
                                        + " class=\"table-row-form-real-estate-CongVu\">"
                                        + "<td class=\"table-data-form-real-estate-CongVu\">"
                                        + (iCount+1).toString()
                                        + "</td>"
                                        + "<td class=\"table-data-form-real-estate-CongVu\" style=\"color: red;\">"
                                        + lstClassDetail[count]['user']
                                        + "</td>"
                                        + "<td class=\"table-data-form-real-estate-CongVu\">"
                                        + lstClassDetail[count]['fullname']
                                        + "</td>"
                                        + "</tr>";
            iCount = iCount + 1;
        }
        if(htmlListForm1 != ""){
            var htmlListFormTmp = "<table class=\"table-form-real-estate-CongVu\">"
                                + "<tr class=\"table-row-form-real-estate-CongVu\">"
                                + "<th class=\"table-header-form-real-estate-CongVu\">STT</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu\">Tên Tài Khoản</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu\">Họ Và Tên</th>"
                                + "</tr>";
            htmlListForm1 = htmlListFormTmp + htmlListForm1;
        }
        if(htmlListForm1 != ""){
        htmlListForm1 = htmlListForm1 + "</table>";
        document.getElementById("main").innerHTML = htmlListForm1;
        }
        else{
        document.getElementById("main").innerHTML = "<h2><span style=\"color:blue;font-weight:bold;font-style:italic\">Chưa có dữ liệu!</span></h2>";
        }
    }
    else if(val_lst_ResAllView == 1 && val_User_Status == 3){
        var userStatus = document.getElementById("select-user-status");
        userStatus = userStatus.value;
//TH2: Đã làm
        if(userStatus == 1){
            var htmlListForm = "";
            var dateAnalysis = document.getElementById("date_analysis").value;
            var iCount = 0;
            
            if(dateAnalysis == ""){
                for(var count=0; count<lst_ResAllView.length; count++){                    
                    var dDuration = Number(lst_ResAllView[count]['duration']);
                    var dMinute = Math.floor(dDuration/60);
                    var dSecond = dDuration%60;
                    var strSTime = "";
                    strSTime = lst_ResAllView[count]['time'];
                    strSTime = strSTime.slice(5,);
                    var yearSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var monthSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var daySTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var hourSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var minuteSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var secondSTime = Number(strSTime.slice(0,strSTime.length-1));
        
                    htmlListForm = htmlListForm + "<tr "
                                                + " class=\"table-row-form-real-estate-CongVu\">"
                                                + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                + (iCount+1).toString()
                                                + "</td>"
                                                + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                + lst_ResAllView[count]['user']
                                                + "</td>"
                                                + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                + lst_ResAllView[count]['fullname']
                                                + "</td>"
                                                + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                + daySTime + "/" + (monthSTime + 1).toString() + "/" + yearSTime
                                                + "</td>"
                                                + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                + hourSTime + ":" + minuteSTime + ":" + secondSTime
                                                + "</td>"
                                                + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                                + dMinute.toString() + " phút " + dSecond.toString() + " giây"
                                                + "</td>"
                                                + "<td class=\"table-data-form-real-estate-CongVu\" style=\"font-weight: bold; text-align:center; color:blue;\">"
                                                + lst_ResAllView[count]['score']
                                                + "</td>"
                                                + "</tr>";
                    iCount = iCount + 1;
                }
            }
            else{
                var dateAnalysisValue = new Date(dateAnalysis);
                for(var count=0; count<lst_ResAllView.length; count++){
                    var dDuration = Number(lst_ResAllView[count]['duration']);
                    var dMinute = Math.floor(dDuration/60);
                    var dSecond = dDuration%60;
                    var strSTime = "";
                    strSTime = lst_ResAllView[count]['time'];
                    strSTime = strSTime.slice(5,);
                    var yearSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var monthSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var daySTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var hourSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var minuteSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var secondSTime = Number(strSTime.slice(0,strSTime.length-1));
                    
                    if(Number(dateAnalysisValue.getFullYear())==yearSTime
                    && Number(dateAnalysisValue.getMonth())==monthSTime
                    && Number(dateAnalysisValue.getDate())==daySTime){    
                        htmlListForm = htmlListForm + "<tr "
                                                    + " class=\"table-row-form-real-estate-CongVu\">"
                                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                    + (iCount+1).toString()
                                                    + "</td>"
                                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                    + lst_ResAllView[count]['user']
                                                    + "</td>"
                                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                    + lst_ResAllView[count]['fullname']
                                                    + "</td>"
                                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                    + daySTime + "/" + (monthSTime + 1).toString() + "/" + yearSTime
                                                    + "</td>"
                                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                                    + hourSTime + ":" + minuteSTime + ":" + secondSTime
                                                    + "</td>"
                                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                                    + dMinute.toString() + " phút " + dSecond.toString() + " giây"
                                                    + "</td>"
                                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"font-weight: bold; text-align:center; color:blue;\">"
                                                    + lst_ResAllView[count]['score']
                                                    + "</td>"
                                                    + "</tr>";
                        iCount = iCount + 1;
                    }
                }
            }
            var htmlListFormTmp = "<table class=\"table-form-real-estate-CongVu\">"
                    + "<tr class=\"table-row-form-real-estate-CongVu\">"
                    + "<th class=\"table-header-form-real-estate-CongVu\">STT</th>"
                    + "<th class=\"table-header-form-real-estate-CongVu\">Tên Tài Khoản</th>"
                    + "<th class=\"table-header-form-real-estate-CongVu\">Họ Và Tên</th>"
                    + "<th class=\"table-header-form-real-estate-CongVu\">Ngày Làm Bài</th>"
                    + "<th class=\"table-header-form-real-estate-CongVu\">Giờ Làm Bài</th>"
                    + "<th class=\"table-header-form-real-estate-CongVu\">Thời Gian Làm Bài</th>"
                    + "<th class=\"table-header-form-real-estate-CongVu\">Điểm</th>"
                    + "</tr>";
                htmlListForm = htmlListFormTmp + htmlListForm;
            
            if(htmlListForm != ""){
                htmlListForm = htmlListForm + "</table>";
                document.getElementById("main").innerHTML = htmlListForm;
            }
            else{
                document.getElementById("main").innerHTML = "<h2><span style=\"color:blue;font-weight:bold;font-style:italic\">Chưa có dữ liệu!</span></h2>";
            }
        }
//TH3: Chưa làm
        else if(userStatus == 2){
            var htmlListForm = "";
            var htmlListForm1 = "";
            var dateAnalysis = document.getElementById("date_analysis").value;            
            
            if(dateAnalysis == ""){                
                for(var count=0; count<lst_ResAllView.length; count++){
                    // Bỏ các phần tử đã làm.
                    var newlstClassDetail = lstClassDetail.filter(item => item.user !== lst_ResAllView[count].user);
                    lstClassDetail = newlstClassDetail;
                }
                
            }
            else{// Nếu có chọn ngày cụ thể
                var dateAnalysisValue = new Date(dateAnalysis);
                for(var count=0; count<lst_ResAllView.length; count++){

                    var dDuration = Number(lst_ResAllView[count]['duration']);
                    var dMinute = Math.floor(dDuration/60);
                    var dSecond = dDuration%60;
                    var strSTime = "";
                    strSTime = lst_ResAllView[count]['time'];
                    strSTime = strSTime.slice(5,);
                    var yearSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var monthSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var daySTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var hourSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var minuteSTime = Number(strSTime.slice(0,strSTime.search(",")));
                    strSTime = strSTime.slice(strSTime.search(",")+1,);
                    var secondSTime = Number(strSTime.slice(0,strSTime.length-1));
                    
                    if(Number(dateAnalysisValue.getFullYear())==yearSTime
                    && Number(dateAnalysisValue.getMonth())==monthSTime
                    && Number(dateAnalysisValue.getDate())==daySTime){    
                        // Bỏ các phần tử đã làm.
                        var newlstClassDetail = lstClassDetail.filter(item => item.user !== lst_ResAllView[count].user);
                        lstClassDetail = newlstClassDetail;
                    }
                }
            }
            var iCountAfterFilter = 0;                
            for(var count=0; count<lstClassDetail.length; count++){
                htmlListForm1 = htmlListForm1 + "<tr "
                                            + " class=\"table-row-form-real-estate-CongVu\">"
                                            + "<td class=\"table-data-form-real-estate-CongVu\">"
                                            + (iCountAfterFilter+1).toString()
                                            + "</td>"
                                            + "<td class=\"table-data-form-real-estate-CongVu\" style=\"color: red;\">"
                                            + lstClassDetail[count]['user']
                                            + "</td>"
                                            + "<td class=\"table-data-form-real-estate-CongVu\">"
                                            + lstClassDetail[count]['fullname']
                                            + "</td>"
                                            + "</tr>";
                iCountAfterFilter = iCountAfterFilter + 1;
            }
            if(htmlListForm1 != ""){
                var htmlListFormTmp = "<table class=\"table-form-real-estate-CongVu\">"
                                    + "<tr class=\"table-row-form-real-estate-CongVu\">"
                                    + "<th class=\"table-header-form-real-estate-CongVu\">STT</th>"
                                    + "<th class=\"table-header-form-real-estate-CongVu\">Tên Tài Khoản</th>"
                                    + "<th class=\"table-header-form-real-estate-CongVu\">Họ Và Tên</th>"
                                    + "</tr>";
                htmlListForm1 = htmlListFormTmp + htmlListForm1;
            }
            if(htmlListForm1 != ""){
                htmlListForm1 = htmlListForm1 + "</table>";
                document.getElementById("main").innerHTML = htmlListForm1;
            }
            else{
                document.getElementById("main").innerHTML = "<h2><span style=\"color:blue;font-weight:bold;font-style:italic\">Chưa có dữ liệu!</span></h2>";
            }

            // console.log("ds tất cả HS của lớp:");
            // console.log(typeof lstClassDetail);
            // console.log(lstClassDetail);
            
            // console.log("ds HS của lớp đã làm:");
            // console.log(lst_ResAllView);
        }
    }
}

function checkCookie() {
    let sheetID = getCookie("LS2");
    let base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
    let ur = getCookie("usr");
    //Here
    var sheetName = 'LogIn1';
    var qu_AllData = 'Select A, D, I WHERE A = \"' + ur + '\"';
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
            data1 = Object.keys(row).map((key) => [key, row[key]]);
            user1 = data1[0][1].toString();
            end_time1 = data1[1][1].toString();
            setCookie("usr", data1[0][1].toString(), 8);
            setCookie("nameUsr",data1[2][1].toString(),8);
            checkLogIn1(ur);
            checkRow1 = true;
        })
        if(checkRow1 == false){
            checkLogIn1(ur);
        }
    })
}

function checkLogIn1(ur){
    var currentDate = new Date();
    if(user1 == ur){
        if(currentDate.getUTCFullYear() > Number(end_time1.slice(5,9))){
            backToLogInPage();
        }
        else if(currentDate.getUTCFullYear() == Number(end_time1.slice(5,9))){
            var strMonth_Day_Tmp = end_time1.slice(end_time1.indexOf(",")+1,end_time1.length-1);
            var strMonth = strMonth_Day_Tmp.slice(0,strMonth_Day_Tmp.indexOf(","));
            if(currentDate.getUTCMonth() > Number(strMonth)){
                backToLogInPage();
            }
            else if(currentDate.getUTCMonth() == Number(strMonth)){
                var strDay = strMonth_Day_Tmp.slice(strMonth_Day_Tmp.indexOf(",")+1,strMonth_Day_Tmp.length);
                if(currentDate.getUTCDate() > Number(strDay)){
                    backToLogInPage();
                }
                else{
                    return;
                }
            }
            else{
                return;
            }
        }
        else{
            return;
        }  
    }
    else{
        backToLogInPage();
    }
}

function backToLogInPage(){
    alert("Bạn cần đăng nhập lại để tiếp tục!");
    window.location.href = linkHomePage;
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

function setCookie(cname,cvalue,exhours) {
  const d = new Date();
  d.setTime(d.getTime() + (exhours*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // document.cookie = courseName + "=" + courseValue + ";" + expires + ";path=/";
  // document.cookie = achievementsOfUserName + "=" + achievementsOfUserValue + ";" + expires + ";path=/";
  
}

function logOut(){   
    var htmlLogOut = "";
    htmlLogOut = "<div><button class=\"btn-log-out\" onclick=\"actionLogOut()\"><b>Đăng Xuất</b></button></div>"
                    
    document.getElementById("log_out").innerHTML = htmlLogOut;
}

function btnSearch(){
    var htmlBtnSearch = "";
    htmlBtnSearch = "<button class=\"btn-search\" onclick=\"renderDataResultSearch()\"><b>Tìm Kiếm</b></button>";                    
    document.getElementById("search_btn").innerHTML = htmlBtnSearch;
}

function actionLogOut(){
    document.cookie = 'usr=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'nameUsr=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'ID=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'STime=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = linkHomePage;
}