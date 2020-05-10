function hienThiAnhZoom(event) {
    //Truy cập vào node ảnh zoom
   var nodeZoom = layNodeZoom(event);
    //Chuyển trạng thái của nó sang dạng hiển thị 
    nodeZoom.style.display = "block";
}

function anAnhZoom(event) {
    //Truy cập vào node ảnh zoom
    var nodeZoom = layNodeZoom(event);
    //Chuyển trạng thái của nó sang dạng ẩn đi
    nodeZoom.style.display = "none";
}

function layNodeZoom(event) {
    var nodeHienTaiDangReChuotVao = event.target;
    var nodeCha = nodeHienTaiDangReChuotVao.parentElement;var nodeZoom = nodeCha.getElementsByClassName("zoom")[0];
    return nodeZoom;
}