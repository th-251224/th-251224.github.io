let linkHomePage = "https://ic3.info.vn";
//Will edit
let tabPrevious = null;
window.onload = init;

function init() {
    chooseTool();
}

function chooseTool(){
    var htmlSelectTool = "";
    htmlSelectTool = "<input type=\"radio\" id=\"s1\" name=\"se_tool\" value=\"s1\"> <span style=\"color: #2a00c2;\"><b><i>Luyện Tập</i></b></span>&emsp;&ensp;"
                    + "<input type=\"radio\" id=\"s2\" name=\"se_tool\" value=\"s2\"> <b><i>Luyện Thi</i></b><br/>"
                    + "<div><button class=\"btn-select-tool\" onclick=\"confirmTool()\"><b>OK</b></button></div>";                    
    document.getElementById("select-tool").innerHTML = htmlSelectTool;
}

function confirmTool(){
    var ele = document.getElementsByName('se_tool');
    var checkSelect = false;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            if(ele[i].value == "s1"){
                detailTool1();
            }
            else if(ele[i].value == "s2"){
                detailTool2();
            }
            checkSelect = true;
        }
    }
    if(checkSelect == false){
        alert("Bạn hãy chọn \"Luyện Tập\" hoặc \"Thi Thử\" nhé!");
    }
}

function detailTool1(){
    //Need add data for LuyenTap
    var data = [
        {
            nametodo: 'Luyện Tập 1',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 15.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '1',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap1/index.html'
        },
        {
            nametodo: 'Luyện Tập 2',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 15.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '2',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap2/index.html'
        },
        {
            nametodo: 'Luyện Tập 3',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 22.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '3',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap3/index.html'
        },
        {
            nametodo: 'Luyện Tập 4',
            title: '<span style="color:blue;\">Chủ đề 2: Quản Lí Thông Tin</span><ul><li>Số câu hỏi: 19.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '4',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap4/index.html'
        },
        {
            nametodo: 'Luyện Tập 5',
            title: '<span style="color:blue;\">Chủ đề 3: Công Dân Số</span><ul><li>Số câu hỏi: 17.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '5',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap5/index.html'
        },
        {
            nametodo: 'Luyện Tập 6',
            title: '<span style="color:blue;\">Chủ đề 3: Công Dân Số</span><ul><li>Số câu hỏi: 17.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '6',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap6/index.html'
        }
    ];
    htmlListForm = "";   
    htmlListForm = htmlListForm + "<table class=\"table-form-real-estate-CongVu\">"
                                + "<tr class=\"table-row-form-real-estate-CongVu\">"
                                + "<th class=\"table-header-form-real-estate-CongVu1\">STT</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu1\">Chủ Đề</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu1\">Luyện Tập</th>"
                                + "</tr>";
    var typeTodo = "";
    var titleTodo = "";
    for(var count = 0; count < data.length; count++){
        typeTodo = "<button class=\"button-google-form\" type=\"button\">"+ data[count]['nametodo'] +"</button>";
        titleTodo = "<span style=\"color:black;font-weight:bold;\">" + data[count]['title'];    

        htmlListForm = htmlListForm + "<tr "
                                    + "id=\"info" + String(count+1) + "\""
                                    + " class=\"table-row-form-real-estate-CongVu\">"
                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                    + data[count]['number']
                                    + "</td>"
                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                    + titleTodo
                                    + "</span></td>"
                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                    + "<a href=\"#info" + String(count+1) + "\" onclick=\"goToLink("
                                    + "\'"
                                    + String(data[count]['linktodo'])
                                    + "\'"
                                    + ")\">"
                                    + typeTodo
                                    + "</a>"
                                    + "</td>"
                                    + "</tr>"
    }
    htmlListForm = htmlListForm + "</table>";
    document.getElementById("main").innerHTML = htmlListForm;
}

function detailTool2(){
    //Need add data for LuyenTap
    var data = [
        {nametodo: 'Luyện Thi 1',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 15.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '1',
            linktodo: 'Lv1/Lv1_LuyenTap1/index.html'
        },
        {nametodo: 'Luyện Thi 2',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 15.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '2',
            linktodo: 'Lv1/Lv1_LuyenTap2/index.html'
        },
        {nametodo: 'Luyện Thi 3',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 22.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '3',
            linktodo: 'Lv1/Lv1_LuyenTap3/index.html'
        },
        {
            nametodo: 'Luyện Thi 4',
            title: '<span style="color:blue;\">Chủ đề 2: Quản Lí Thông Tin</span><ul><li>Số câu hỏi: 19.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '4',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap4/index.html'
        },
        {
            nametodo: 'Luyện Thi 5',
            title: '<span style="color:blue;\">Chủ đề 3: Công Dân Số</span><ul><li>Số câu hỏi: 17.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '5',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap5/index.html'
        },
        {
            nametodo: 'Luyện Thi 6',
            title: '<span style="color:blue;\">Chủ đề 3: Công Dân Số</span><ul><li>Số câu hỏi: 17.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '6',
            linktodo: 'Lv1/LuyenTap/Lv1_LuyenTap6/index.html'
        }
    ];
    htmlListForm = "";   
    htmlListForm = htmlListForm + "<table class=\"table-form-real-estate-CongVu\">"
                                + "<tr class=\"table-row-form-real-estate-CongVu\">"
                                + "<th class=\"table-header-form-real-estate-CongVu\">STT</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu\">Chủ Đề</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu\">Luyện Thi</th>"
                                + "</tr>";
    var typeTodo = "";
    var titleTodo = "";
    for(var count = 0; count < data.length; count++){
        typeTodo = "<button class=\"button-google-form1\" type=\"button\">"+ data[count]['nametodo'] +"</button>";
        titleTodo = "<span style=\"color:black;font-weight:bold;\">" + data[count]['title'];    

        htmlListForm = htmlListForm + "<tr "
                                    + "id=\"info" + String(count+1) + "\""
                                    + " class=\"table-row-form-real-estate-CongVu\">"
                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                    + data[count]['number']
                                    + "</td>"
                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                    + titleTodo
                                    + "</span></td>"
                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                    + "<a href=\"#info" + String(count+1) + "\" onclick=\"goToLink("
                                    + "\'"
                                    + String(data[count]['linktodo'])
                                    + "\'"
                                    + ")\">"
                                    + typeTodo
                                    + "</a>"
                                    + "</td>"
                                    + "</tr>"
    }
    htmlListForm = htmlListForm + "</table>";
    document.getElementById("main").innerHTML = htmlListForm;
}

function goToLink(linkToDo){
    if(tabPrevious != null){
        tabPrevious.close();
        tabPrevious = window.open(linkToDo,'_blank');
    }
    else{
        tabPrevious = window.open(linkToDo,'_blank'); 
    }
}