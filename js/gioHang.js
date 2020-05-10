function layGioHangTuLocalStorage() {
    var gioHang = new Array();
    //Lấy JSON
    var jsonGioHang = localStorage.getItem("gioHang");
    //Chuyển JSON thành đối tượng giỏ hàng
    if (jsonGioHang != null) {
        gioHang = JSON.parse(jsonGioHang);
    }
    return gioHang;
}

function themSanPhamVaoGioHang(idSanPham, gioHang) {
    var gioHangSauKhiDuocThem = gioHang;
    //Bước 1: Tạo ra đối tượng item giỏ hàng
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
    //Bước 2: Thêm vào giỏ hàng item mới
    console.log(gioHang);
    gioHangSauKhiDuocThem.push(itemGioHang);

    return gioHangSauKhiDuocThem;
}

function luuGioHangVaoLocalStorage(gioHang) {
    //Chuyển thành chuỗi json
    var jsonGioHang = JSON.stringify(gioHang);
    //Lưu vào Local Storage
    localStorage.setItem("gioHang", jsonGioHang);
}

function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}

function taoDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, soLuong);
    danhSachItemGioHang.push(itemGioHang);
    return danhSachItemGioHang;
}

function chuyenDanhSachItemGioHangThanhJson(danhSachItemGioHang) {
    var danhSachItemGioHang = taoDanhSachItemGioHang();
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    return jsonDanhSachItemGioHang;
}

function xoaSanPhamTrongGioHang(idSanPham) {
    var danhSachItemGioHang = layGioHangTuLocalStorage();
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var sanPham = danhSachItemGioHang[i];
        if (sanPham.id == idSanPham) {
            var index = i;
            break;
        }
    }
    //Xóa giỏ hàng
    danhSachItemGioHang.splice(index, 1);
    localStorage.setItem("gioHang", JSON.stringify(danhSachItemGioHang));

    hienThiGioHang();
}

function suaSoLuongSanPhamTrongGioHang(idSanPham) {
    var danhSachItemGioHang = layGioHangTuLocalStorage();
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        if (danhSachItemGioHang[i].idSanPham == idSanPham) {
            danhSachItemGioHang[i].soLuong = document.getElementById(danhSachItemGioHang[i].idSanPham).value;
            // Khi số lượng sản phẩm giảm về âm thì trả lại số lượng bằng 0
            if(document.getElementById(danhSachItemGioHang[i].idSanPham).value < 0) {
                danhSachItemGioHang[i].soLuong = 0
            }
            break;
        }
    }
    luuGioHangVaoLocalStorage(danhSachItemGioHang);
    hienThiGioHang();
}
