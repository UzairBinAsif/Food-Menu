let resturantData = [
    {
        name: "Zinger Burger",
        price: "$15.99",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempore dolore earum quasi repudiandae, rem, ipsa culpa fugiat ",
        imgSrc: "https://tse3.mm.bing.net/th/id/OIP.uPJNhmsCGP72JL72DmMLfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "lunch"
    },
    {
        name: "Chai",
        price: "$2.99",
        desc: "Lorem Iusto tempore dolore earum quasi repudiandae, rem, ipsa culpa fugiat ",
        imgSrc: "https://tse4.mm.bing.net/th/id/OIP.oNzn9GVuLzFLjY3UFm8KeQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "breakfast"
    },
    {
        name: "Halwa Puri",
        price: "$8.99",
        desc: "adipisicing elit. Iusto tempore dolore earum quasi, rem, ipsa culpa fugiat ",
        imgSrc: "https://tse1.mm.bing.net/th/id/OIP.9oxrLIrMUbZEEgsoK63RcwHaDO?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "breakfast"
    },
    {
        name: "Oreo Milk shake",
        price: "$11.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://tse3.mm.bing.net/th/id/OIP.LNQW-RiYvgE2lGUWK5OgXgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "shakes"
    },
    {
        name: "Spicy Tikka Pizza",
        price: "$24.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/R.fc554f69365b77a2bca688f40d1e5136?rik=rBjjN1CzBw%2b1aA&pid=ImgRaw&r=0",
        category: "lunch"
    },
    {
        name: "Shawarma",
        price: "$9.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://th.bing.com/th/id/R.e781fb705c02675eb20d6c16b8e033d7?rik=Ze1sQDmVx4kCqw&pid=ImgRaw&r=0",
        category: "lunch"
    },
    {
        name: "Crispy French Fries",
        price: "$4.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://tse1.mm.bing.net/th/id/OIP.hQREQulCPMW96c_FfZjw3QHaI3?w=700&h=838&rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "lunch"
    },
    {
        name: "Cola Next",
        price: "$2.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://tse4.mm.bing.net/th/id/OIP.iBeMl0lJU0FAyzyLxIEpXgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "shakes"
    },
    {
        name: "Half Fry Egg Bread",
        price: "$4.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://thumbs.dreamstime.com/b/indian-style-spicy-egg-half-fry-bread-closeup-popular-dish-called-346447654.jpg",
        category: "breakfast"
    },
    {
        name: "Chicken Cheeze Paratha",
        price: "$14.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://tse1.mm.bing.net/th/id/OIP.i93BVge1krDvGu_Mo-0IbAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        category: "breakfast"
    },
    {
        name: "Strawberry Cream Shake",
        price: "$24.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://www.lovefromtheoven.com/wp-content/uploads/2023/02/strawberry-milkshake-24.jpg",
        category: "shakes"
    },
    {
        name: "Golden Chocolate Shake",
        price: "$99.99",
        desc: "adipisicing elit.quasi repudiandae, rem, ipsa culpa fugiat rem, ipsa culpa fugiat ",
        imgSrc: "https://img.freepik.com/premium-photo/glass-chocolate-milkshake-with-gold-handle-gold-spoon_534373-4502.jpg",
        category: "shakes"
    },
]

function allMap() {
    resturantData.map((item) => {
        menuContainer.innerHTML += `<div class="card">
        <div class="image" id="image${imageNum}"></div>
            <div class="details">
                <div>
                    <h3 id="uiItemName">${item.name}</h3>
                    <div id="uiPrice">${item.price}</div>
                </div><hr>
                <p id="uiDesc">
                    ${item.desc}
                </p>
            </div>
        </div>`
        document.getElementById(`image${imageNum}`).style.backgroundImage = `url(${item.imgSrc})`
        imageNum++
    })
}

function itemsFinder(x) {
    imageNum = 0
    menuContainer.innerHTML = ""
    resturantData.filter((item) => {
        if (x) {
            return item.category == x
        } else {
            return true
        }
    }).map((item) => {
        menuContainer.innerHTML += `
        <div class="card">
            <div class="image" id="image${imageNum}"></div>
            <div class="details">
                <div>
                    <h3 id="uiItemName">${item.name}</h3>
                    <div id="uiPrice">${item.price}</div>
                </div><hr>
                <p id="uiDesc">
                    ${item.desc}
                </p>
            </div>
        </div>`
    document.getElementById(`image${imageNum}`).style.backgroundImage = `url(${item.imgSrc})`
    imageNum++
    })
}

function searchItems() {
    imageNum = 0
    menuContainer.innerHTML = ""
    let userInput = document.getElementById("search")
    let itemFound = false
    // console.log(resturantData.find((item) => userInput.value == item.name)) // Can also do this but this only returns correct card item 
    //                                                                            if all letters are typed and just gives one card per search.

    resturantData.forEach((item) => {
        if (item.name.toLowerCase().includes(userInput.value.trim().toLowerCase()) && userInput.value.trim() != "") {
            menuContainer.innerHTML = `
                <div class="card">
                    <div class="image" id="image${imageNum}"></div>
                    <div class="details">
                        <div>
                            <h3 id="uiItemName">${item.name}</h3>
                            <div id="uiPrice">${item.price}</div>
                        </div><hr>
                        <p id="uiDesc">
                            ${item.desc}
                        </p>
                    </div>
                </div>`
            document.getElementById(`image${imageNum}`).style.backgroundImage = `url(${item.imgSrc})`
            itemFound = true
            imageNum++
        }
    })

    if (itemFound == false) {
        menuContainer.innerHTML = "<h3>No Item Found</h3>"
    }
}

let allBtn = document.querySelector("#all")
let menuContainer = document.querySelector(".menuContainer")
let imageNum = 0

allMap()