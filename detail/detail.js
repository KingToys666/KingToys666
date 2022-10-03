
// cách lấy id thông qua URL 
const getIDfromUrl=() => window.location.search.substr(1).split("=")[1]


const getDetailShoes=() => {
    return axios({
        method: "GET",
        url: "https://631eeb5858a1c0fe9f5b0ac4.mockapi.io/KingToys/"+getIDfromUrl()
    })
        .then(function (res) {
            // getEle("name").innerHTML=res.data.name
            getEle("imgs").setAttribute("src",res.data.hinhAnh[0])
            getEle("product-name").innerHTML ="Tên:" + res.data.name
            // getEle("TenSP").innerHTML=res.data.name
            getEle("product-price").innerHTML="Giá:" + res.data.price
            getEle("product-description").innerHTML= "Mô Tả :" + res.data.moTa
            renderImg(res.data.hinhAnh)
            // getEle("size").innerHTML = res.data.content.size
        })
        .catch(function (err) {
            console.log(err);
        })
}
getDetailShoes()
let getEle=(id) => document.getElementById(id)
let renderImg=(imgs) => {
    var content=""
    var allHoverImages=imgs;
    allHoverImages.map((item,key) => {
        
        content+=`
            <div  >
                <img  onmouseover="choiceImg('${item}')" id="imgsr" src="${item}"/>
            </div>             
        `
    })
    document.getElementById("hover-container").innerHTML=content
}

function choiceImg(imgs) {
    getEle("imgs").setAttribute("src",imgs)
}



// function resetActiveImg() {
//     allHoverImages.forEach((img) => {
//         img.parentElement.classList.remove('active');
//     });
// }