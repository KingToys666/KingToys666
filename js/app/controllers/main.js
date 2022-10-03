var service=new SanPhamService();

function getEle(id) {
    return document.getElementById(id)
}
function getData() {
    service.getListProductAPI()
        // thanh công
        .then(function (result) {
            renderListProduct(result.data)
        })
        //  thất bại
        .catch(function (error) {
            console.log(error);
        })
}
getData()
function renderListProduct(list) {
    var content="";

    for (var i=0;i<list.length;i++) {
        content+=`
            <tr>
                <td>${i+1}</td>
                <td>${list[i].name}</td>
                <td>${list[i].price}</td>
                <td>
                    <img src="${list[i].hinhAnh}"/>
                </td>
                <td>${list[i].moTa}</td>
                <td>${list[i].status}</td>

                <td>
                    <button class="btn btn-success" onclick="deleteProduct(${list[i].id})">xóa</button>
                    <button id="btnEditSP" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="suaSanPham(${list[i].id})">
                    Sửa
                </button>
                </td>
                
            </tr>
        `
    }
    document.getElementById("tblDanhSachSP").innerHTML=content
}
getEle("btnThemSP").addEventListener("click",function () {
    document.getElementsByClassName("modal-title")[0].innerHTML="thêm sản phẩm"

    var footer='<button class="btn btn-success" onclick="addProduct()">thêm sp</button>'

    document.getElementsByClassName("modal-footer")[0].innerHTML=footer
})
// thêm sản phẩm 
function addProduct(){
    var tenSP = getEle("TenSP").value
    var giaSP = getEle("GiaSP").value
    var HinhSP = getEle("HinhSP").value
    var motaSP = getEle("moTaSP").value
    var status = getEle("status").value
    var sanPham = new SanPham("",tenSP,giaSP,HinhSP,motaSP,status)

    service.addProductAPI(sanPham)

    .then(function(rs){
        // thành công
        console.log(rs);
        document.getElementsByClassName("close")[0].click();

        getData()

    })
    // thất bại
    .catch(function(err){
        console.log(err);
    })


}
// xóa sản phẩm 
function deleteProduct (id){
    service.deleteProductAPI(id)
    .then(function(){
     
        // alert("xóa thành công")
        getData()
    })
    .catch(function(err){
        console.log(err);
    })
}
// sửa sản phẩm 

// lấy thông tin sản phẩm 
function suaSanPham(id){
    document.getElementsByClassName("modal-title")[0].innerHTML = "sửa sản phẩm"
    var footer = `<button onclick="capNhatSP(${id})">cập nhật</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer
    service.getListProductIDAPI(id)
    .then(function(rs){
        getEle("TenSP").value = rs.data.tenSP;
        getEle("GiaSP").value = rs.data.gia;
        getEle("HinhSP").value = rs.data.hinhAnh;
        getEle("moTaSP").value = rs.data.moTa;
        getEle("status").value = rs.data.status;
    })
    .catch(function(err){
        console.log(err);
    })
}
// cập nhật 

function capNhatSP (id){
    var tenSP = getEle("TenSP").value;
    var sanSP = getEle("GiaSP").value;
    var hinhSP = getEle("HinhSP").value;
    var motaSP = getEle("moTaSP").value;
    var sanPham = new SanPham(id,tenSP,sanSP,hinhSP,motaSP)
    service.editproductAPI(sanPham)
    .then(function(){
        alert("cập nhật thành công ")
        document.getElementsByClassName("close")[0].click();
        getData()
    })
    .catch(function(error){
        console.log(error);
    })

}

// tim kiếm 
getEle("enter").addEventListener("click",function(){
        var index_1 = getEle("txtSearch").value;
        service.findProduct(index_1)
        .then(function(rs){
       table(rs.data)

        })
        .catch(function(err){
            console.log(err);
        })
})

function table (rs){
    var content="";
        content+=`
            <tr>
            <td>${rs.id}</td>
                <td>${rs.tenSP}</td>
                <td>${rs.gia}</td>
                <td>
                    <img src="./../../asset/img/${rs.hinhAnh}"/>
                </td>
                <td>${rs.moTa}</td>
                <td>
                    <button class="btn btn-success" onclick="deleteProduct(${rs.id})">xóa</button>
                    <button id="btnEditSP" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="suaSanPham(${rs.id})">
                    Sửa
                </button>
                </td>
                
            </tr>
        `
    
    document.getElementById("tblDanhSachSP").innerHTML=content
}

// hello chị chou