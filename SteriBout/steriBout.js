let products_url = "https://fakestoreapi.com/products";

const getProducts = async (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => { showProducts(data) })
}


const showProducts = (products) => {
    const productTray = document.getElementById("all-items");
    products.forEach((product) => {
        const { image, title, description, price, rating, category } = product;
        let newElement = `
        <div class="pic">
                <img src="${image}" alt="Movie poster">
                <p id="title" >${title}</p>
                <p class="description1">${reduceOverview(description)}</p>
                <p class="price">Price: $${price}</p>
                <p class="description2"> Quantity: ${rating.count} piece(s)</p>
                <p class="category">${category}</p>

        </div>
        `;
        productTray.innerHTML += newElement;
    });
}

const reduceOverview = (overView) => {
    if (overView.length > 249) {
        return overView.substring(0, 200) + "...";
    }
    return overView;
}

const searchInput = async () => {
    try {
        let search = document.getElementById("search").value.toUpperCase();
        const itemList = document.querySelectorAll(".vid")
        console.log(search)
        itemList.forEach((item) => {
            let title = item.querySelector("#title").innerHTML.toUpperCase()

            if (title.includes(search)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        })

    } catch (error) {
        alert(error);
    }
};

const searchPerCategory = (option) => {
    try {
        const itemList = document.querySelectorAll(".vid")
        itemList.forEach((item) => {
            let category = item.querySelector(".category").innerHTML.toUpperCase()

            if (option == category) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        })

    } catch (error) {
        alert(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const categories = [...new Set(data.map(product => product.category))];
            const dropdown = document.getElementById("categoryDropdown");
            let count = 0
            categories.forEach(category => {
                const option = document.createElement("option");
                option.id = `category-${count}`
                // option.onchange =()=> searchPerCategory(this); 

                option.value = category;
                option.textContent = category;
                dropdown.appendChild(option);
                count++
                countMonitor(count)
            });

        })
        .catch(error => console.error("Error fetching data:", error));
});

const countMonitor = (count) => {
    const alat = document.getElementById("error");
    if (count > 0) {
        alat.style.display = "none";
    } else {
        alat.style.display = "flex";
    } 
}

document.getElementById("categoryDropdown").addEventListener("change", (event) => {
    let option = event.target.value.toUpperCase()
    searchPerCategory(option)
})


getProducts(products_url)


