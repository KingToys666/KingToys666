function SanPhamService() {
    this.getListProductAPI=function () {
        return axios({
            url: "https://631eeb5858a1c0fe9f5b0ac4.mockapi.io/KingToys",
            method: "GET",
        });
    };
    // add 
    this.addProductAPI=function (product) {
        return axios({
            url: "https://631eeb5858a1c0fe9f5b0ac4.mockapi.io/KingToys",
            method: "POST",
            data: product
        });
    };
    // xóa 
    this.deleteProductAPI=function (id) {
        return axios({
            url: `https://631eeb5858a1c0fe9f5b0ac4.mockapi.io/KingToys/${id}`,
            method: "DELETE",
        })
    }

    this.getListProductIDAPI=function (id) {
        return axios({
            url: `https://631eeb5858a1c0fe9f5b0ac4.mockapi.io/KingToys/${id}`,
            method: "GET",
        });
    }
    // sửa 
    this.editproductAPI=function (product) {
        return axios({
            url: `https://631eeb5858a1c0fe9f5b0ac4.mockapi.io/KingToys/${product.id}`,
            method: "PUT",
            data : product
        })
    }

    this.findProduct = function (id){
        return axios ({
            url: `https://631eeb5858a1c0fe9f5b0ac4.mockapi.io/KingToys/${id}`,
            method: "GET",
        })
    }

}

