import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}


function renderProducts(prods: Product[]): void {
    const prodHMTL = prods.flatMap(generateProductHTML);
    const mainHTML = document.getElementById("main-container");
    console.log(prodHMTL.length);

    mainHTML.innerHTML = "";
    for (let p of prodHMTL){
        mainHTML.innerHTML += p;
    }
}

function getByCategory(category: string): void {
    const filteredProducts: Product[] = products.filter((a:Product) => {return a.category.includes(category)})
    renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
    const ratedProducts: Product[] = products.filter((a:Product) => {return a.rating > minRating})
    renderProducts(ratedProducts);
}

export { renderProducts, getByCategory, getByRating };