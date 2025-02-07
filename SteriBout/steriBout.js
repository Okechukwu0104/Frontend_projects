let products_url = "https://fakestoreapi.com/products";

const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        showProducts(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}



const showProducts = (products) => {
    const productTray = document.getElementById("all-items");
    productTray.innerHTML = "";
    products.forEach((product) => {
        const { image, title, description, price, rating, category } = product;
        let newElement = `
        <div class="pic vid">
            <img src="${image}" alt="Product image">
            <p id="title">${title}</p>
            <p class="description1">${reduceOverview(description)}</p>
            <p class="price">Price: $${price}</p>
            <p class="description2"> Quantity: ${rating.count} piece(s)</p>
            <p class="category">${category}</p>
        </div>
        `;
        productTray.innerHTML += newElement;
    });
}

const reduceOverview = (overview) => {
    return overview.substring(0, 200) + "...";
}

const searchInput = async () => {
    try {
        let search = document.getElementById("search").value.toUpperCase();
        const itemList = document.querySelectorAll(".vid");
        itemList.forEach((item) => {
            let title = item.querySelector("#title").innerHTML.toUpperCase();
            item.style.display = title.includes(search) ? "flex" : "none";
        });
    } catch (error) {
        alert(error);
    }
};

const searchPerCategory = (option) => {
    try {
        const itemList = document.querySelectorAll(".vid");
        itemList.forEach((item) => {
            let category = item.querySelector(".category").innerHTML.toUpperCase();
            item.style.display = option === category ? "flex" : "none";
        });
    } catch (error) {
        alert(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getProducts(products_url);
    fetch(products_url)
        .then(response => response.json())
        .then(data => {
            const categories = [...new Set(data.map(product => product.category.toUpperCase()))];
            const dropdown = document.getElementById("categoryDropdown");
            let count = 0;
            categories.forEach(category => {
                const option = document.createElement("option");
                option.id = `category-${count}`;
                option.value = category;
                option.textContent = category;
                dropdown.appendChild(option);
                count++;
                countMonitor(count);
            });
        })
        .catch(error => console.error("Error fetching categories:", error));
});

const countMonitor = (count) => {
    const alat = document.getElementById("error");
    alat.style.display = count > 0 ? "none" : "flex";
}

document.getElementById("categoryDropdown").addEventListener("change", (event) => {
    let option = event.target.value.toUpperCase();
    searchPerCategory(option);
});
