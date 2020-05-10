function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    //Viết phương thức tạo ID cho đối tượng
    if (id != null) {
        sanPham.id = id;
    } else {
        sanPham.id = taoID();
    }
    //Gắn các thuộc tính cho đối tượng
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;
    //Viết phương thức cho đối tượng
    sanPham.tinhGiaBan = function () {
        var giaBan = this.giaGoc * (1 - this.phanTramGiamGia * 0.01);
        return giaBan;
    }

    sanPham.fromJSON = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanpham = danhSachSanPham[i];
            var sanPhamDayDu = taoDoiTuongSanPham(sanpham.hinhAnh, sanpham.ten, sanpham.giaGoc, sanpham.phanTramGiamGia, sanpham.khuVuc, sanpham.id);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }
    return sanPham;
}

function taoDanhSachSanPham() {
    var sonMoi = taoDoiTuongSanPham("images/sonMoi.jpg", "Son Kem Black Rouge", 298000, 30, "Hà Nội", taoID());
    var phanMat = taoDoiTuongSanPham("images/phanMat.jpg", "Phấn mắt Black Rouge", 400000, 20, "TP HCM", taoID());
    var phanNen = taoDoiTuongSanPham("images/phanNuoc.jpg", "Phấn nước Black Rouge", 640000, 20, "Đà Nẵng", taoID());
    var phanMa = taoDoiTuongSanPham("images/phanMa.jpg", "Phấn má hồng Black Rouge", 298000, 40, "Hải Phòng", taoID());
    var toner = taoDoiTuongSanPham("images/toner.jpg", "Toner dạng xịt IYOUB", 1000000, 63, "TP BMT", taoID());
    var bangTaoKhoi = taoDoiTuongSanPham("images/bangTaoKhoi.jpg", "Bảng tạo khối Black Rouge", 358000, 40, "Hà Nội", taoID());
    var chuotMi = taoDoiTuongSanPham("images/chuotMi.jpg", "Chuốt mi Black Rouge", 300000, 40, "Đà Nẵng", taoID());
    var keMat = taoDoiTuongSanPham("images/keMat.jpg", "Kẻ mắt Black Rouge", 318000, 40, "TP HCM", taoID());
    var gelMat = taoDoiTuongSanPham("images/gelMat.jpg", "Gel mắt Black Rouge", 318000, 40, "Hà Nội", taoID());
    var suaRuaMat = taoDoiTuongSanPham("images/suaRuaMat.jpg", "Sữa rửa mặt Black Rouge T", 298000, 50, "Hà Nội", taoID());
    var matNa = taoDoiTuongSanPham("images/matNa.jpg", "Mặt nạ cấp ẩm Banobagi", 25000, 8, "Hà Nội", taoID());
    var cheKhuyetDiem = taoDoiTuongSanPham("images/cheKhuyetDiem.jpg", "Che Khuyết Điểm G9Skin", 300000, 50, "Hà Nội", taoID());
    var chongNang = taoDoiTuongSanPham("images/chongNang.jpg", "Kem chống nắng nâng tone da A'pieu", 199000, 40, "Hà Nội", taoID());
    var kemLot = taoDoiTuongSanPham("images/kemLot.jpg", "Kem Lót Trang Điểm, Chống Nắng Missha ", 320000, 38, "Hà Nội", taoID());
    var guongTay = taoDoiTuongSanPham("images/guongTay.jpg", "Gương Cầm Tay Mini Romand", 200000, 61, "Hà Nội", taoID());
    var mutDanh = taoDoiTuongSanPham("images/mutDanh.jpg", "Mút Đánh Cushion Merzy Puff", 120000, 26, "Hà Nội", taoID());
    var coTan = taoDoiTuongSanPham("images/coTan.jpg", "Cọ Tán Kem Nền Merzy Dome", 220000, 32, "Hà Nội", taoID());
    var coMat = taoDoiTuongSanPham("images/coMat.jpg", "Cọ Đánh Phấn Mắt Innisfree", 140000, 29, "Hà Nội", taoID());
    var bongTayTrang = taoDoiTuongSanPham("images/bongTayTrang.jpg", "Bông Tẩy Trang Wellderma Plus", 129000, 26, "Hà Nội", taoID());
    var mayRuaMat = taoDoiTuongSanPham("images/mayRuaMat.jpg", "Máy Rửa Mặt Massage WellDerma", 1000000, 40, "Hà Nội", taoID());

    var danhSachSanPham = new Array();
    danhSachSanPham.push(sonMoi);
    danhSachSanPham.push(phanMat);
    danhSachSanPham.push(phanNen);
    danhSachSanPham.push(phanMa);
    danhSachSanPham.push(toner);
    danhSachSanPham.push(bangTaoKhoi);
    danhSachSanPham.push(chuotMi);
    danhSachSanPham.push(keMat);
    danhSachSanPham.push(gelMat);
    danhSachSanPham.push(suaRuaMat);
    danhSachSanPham.push(matNa);
    danhSachSanPham.push(cheKhuyetDiem);
    danhSachSanPham.push(chongNang);
    danhSachSanPham.push(kemLot);
    danhSachSanPham.push(guongTay);
    danhSachSanPham.push(mutDanh);
    danhSachSanPham.push(coTan);
    danhSachSanPham.push(coMat);
    danhSachSanPham.push(bongTayTrang);
    danhSachSanPham.push(mayRuaMat);

    return danhSachSanPham;
}

function chuyenDoiDanhSachSanPhamThanhHTML(danhSachSanPham) {
    var HTMLTong = "";
    for (let i = 0; i < danhSachSanPham.length; i++) {
        //lấy sản phẩm ở vị trí i
        var sanPham = danhSachSanPham[i];
        var HTML = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLTong += HTML;
    }
    return HTMLTong;
}

function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id)

    var giaGoc = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(sanPham.giaGoc);
    var giaBan = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(sanPham.tinhGiaBan());

    var HTML = "";
    //Chuyển đổi sang HTML
    HTML += "<div class = 'san-pham'>";
    HTML += "   <div class = 'hinh-anh-san-pham'>   "
    HTML += "       <img onmouseover='hienThiAnhZoom(event)' src='" + sanPham.hinhAnh + "'>";
    HTML += "       <img class='zoom' onmouseout='anAnhZoom(event)' src='" + sanPham.hinhAnh + "'>";
    HTML += "   </div>";
    HTML += "   <h3 class='ten-san-pham'>" + sanPham.ten + "</h3>";
    HTML += "   <p class='gia-truoc-khi-giam'>" + "Giá gốc: " + giaGoc + "</p>";
    HTML += "   <p class='gia-sau-khi-giam'>" + "Giá bán: " + giaBan + "</p>";
    HTML += "   <p class='gia-giam'>" + "(" + "Giảm " + sanPham.phanTramGiamGia + "%" + ")" + "</p>";
    HTML += "   <p class='khu-vuc-ban'>" + sanPham.khuVuc + "</p>";
    HTML += '<button onclick="onClickDuaVaoGioHang(\'' + sanPham.id + '\')" class="btn btn-primary">Đưa vào giỏ hàng</button>';
    HTML += "</div>";
    return HTML;
}

/* Xây dựng hàm sinh ID tự động, output là chuỗi ID duy nhất */
function taoID() {
    //Lấy ms ở thời điểm hiện tại; 1s = 1000ms
    id = Math.random().toString().substring(2, 10) + String(new Date().getTime());
    return id;
}

function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    //Load toàn bộ sản phẩm dưới local storage lên
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();
    //Tìm ra đối tượng nào trong danh sách mà có id = idSanPham
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if (sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
            break;
        }
    }
    //Chuyển đổi đối tượng thành đối tượng đầy đủ
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);

    return sanPham;
}
 
function layDanhSachSanPhamDuoiLocalStorage() {
    //Load json
    var jsonDanhSachSanPham = localStorage.getItem("danhSachSanPham");
    //Chuyển json thành đối tượng 
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}