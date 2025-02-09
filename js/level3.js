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
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 19.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '1',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap1/index.html'
        },
        {
            nametodo: 'Luyện Tập 2',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '2',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap2/index.html'
        },
        {
            nametodo: 'Luyện Tập 3',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 17.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '3',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap3/index.html'
        },
        {
            nametodo: 'Luyện Tập 4',
            title: '<span style="color:blue;\">Chủ đề 2: Công Dân Số</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '4',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap4/index.html'
        },
        {
            nametodo: 'Luyện Tập 5',
            title: '<span style="color:blue;\">Chủ đề 2: Công Dân Số</span><ul><li>Số câu hỏi: 18.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '5',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap5/index.html'
        },
        {
            nametodo: 'Luyện Tập 6',
            title: '<span style="color:blue;\">Chủ đề 3: Quản Lí Thông Tin</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '6',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap6/index.html'
        },
        {
            nametodo: 'Luyện Tập 7',
            title: '<span style="color:blue;\">Chủ đề 3: Quản Lí Thông Tin</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '7',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap7/index.html'
        },
        {
            nametodo: 'Luyện Tập 8',
            title: '<span style="color:blue;\">Chủ đề 4: Sáng Tạo Nội Dung</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '8',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap8/index.html'
        },
        {
            nametodo: 'Luyện Tập 9',
            title: '<span style="color:blue;\">Chủ đề 4: Sáng Tạo Nội Dung</span><ul><li>Số câu hỏi: 21.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '9',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap9/index.html'
        },
        {
            nametodo: 'Luyện Tập 10',
            title: '<span style="color:blue;\">Chủ đề 4: Sáng Tạo Nội Dung</span><ul><li>Số câu hỏi: 21.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '10',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap10/index.html'
        },
        {
            nametodo: 'Luyện Tập 11',
            title: '<span style="color:blue;\">Chủ đề 5: Giao Tiếp Kĩ Thuật Số</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '11',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap11/index.html'
        },
        {
            nametodo: 'Luyện Tập 12',
            title: '<span style="color:blue;\">Chủ đề 5: Giao Tiếp Kĩ Thuật Số</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '12',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap12/index.html'
        },
        {
            nametodo: 'Luyện Tập 13',
            title: '<span style="color:blue;\">Chủ đề 6: Cộng Tác</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '13',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap13/index.html'
        },
        {
            nametodo: 'Luyện Tập 14',
            title: '<span style="color:blue;\">Chủ đề 7: An Toàn Và Bảo Mật</span><ul><li>Số câu hỏi: 14.</li><li>Thời gian: 60 phút.</li><li>Điểm đạt: 1000.</li></ul>',
            number: '14',
            linktodo: 'Lv3/LuyenTap/Lv3_LuyenTap14/index.html'
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
        {
            nametodo: 'Luyện Thi 1',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 19.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '1',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi1/index.html'
        },
        {
            nametodo: 'Luyện Thi 2',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '2',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi2/index.html'
        },
        {
            nametodo: 'Luyện Thi 3',
            title: '<span style="color:blue;\">Chủ đề 1: Căn Bản Về Công Nghệ</span><ul><li>Số câu hỏi: 17.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '3',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi3/index.html'
        },
        {
            nametodo: 'Luyện Thi 4',
            title: '<span style="color:blue;\">Chủ đề 2: Công Dân Số</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '4',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi4/index.html'
        },
        {
            nametodo: 'Luyện Thi 5',
            title: '<span style="color:blue;\">Chủ đề 2: Công Dân Số</span><ul><li>Số câu hỏi: 18.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '5',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi5/index.html'
        },
        {
            nametodo: 'Luyện Thi 6',
            title: '<span style="color:blue;\">Chủ đề 3: Quản Lí Thông Tin</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '6',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi6/index.html'
        },
        {
            nametodo: 'Luyện Thi 7',
            title: '<span style="color:blue;\">Chủ đề 3: Quản Lí Thông Tin</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '7',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi7/index.html'
        },
        {
            nametodo: 'Luyện Thi 8',
            title: '<span style="color:blue;\">Chủ đề 4: Sáng Tạo Nội Dung</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '8',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi8/index.html'
        },
        {
            nametodo: 'Luyện Thi 9',
            title: '<span style="color:blue;\">Chủ đề 4: Sáng Tạo Nội Dung</span><ul><li>Số câu hỏi: 21.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '9',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi9/index.html'
        },
        {
            nametodo: 'Luyện Thi 10',
            title: '<span style="color:blue;\">Chủ đề 4: Sáng Tạo Nội Dung</span><ul><li>Số câu hỏi: 21.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '10',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi10/index.html'
        },
        {
            nametodo: 'Luyện Thi 11',
            title: '<span style="color:blue;\">Chủ đề 5: Giao Tiếp Kĩ Thuật Số</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '11',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi11/index.html'
        },
        {
            nametodo: 'Luyện Thi 12',
            title: '<span style="color:blue;\">Chủ đề 5: Giao Tiếp Kĩ Thuật Số</span><ul><li>Số câu hỏi: 16.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '12',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi12/index.html'
        },
        {
            nametodo: 'Luyện Thi 13',
            title: '<span style="color:blue;\">Chủ đề 6: Cộng Tác</span><ul><li>Số câu hỏi: 20.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '13',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi13/index.html'
        },
        {
            nametodo: 'Luyện Thi 14',
            title: '<span style="color:blue;\">Chủ đề 7: An Toàn Và Bảo Mật</span><ul><li>Số câu hỏi: 14.</li><li>Thời gian: 30 phút.</li><li>Điểm đạt: 900.</li></ul>',
            number: '14',
            linktodo: 'Lv3/LuyenThi/Lv3_LuyenThi14/index.html'
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