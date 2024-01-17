

async function getData(){
    const data = await fetch('../json/tents.json').then(res=> res.json())
    console.log(data);
    const list = document.querySelector('.product-list');
    list.innerHTML = '';
    data.forEach(item=>{
        let el = `
                <a href="product_pages/marmot-ajax-3.html">
                <img
                  src=${item.Image}
                  alt=${item.NameWithoutBrand}
                />
                <h3 class="card__brand">${item.Brand.Name}</h3>
                <h2 class="card__name">${item.NameWithoutBrand}</h2>
                <p class="product-card__price">$${item.FinalPrice}/p></a>
        `
        const li = document.createElement('li');
        li.classList.add('product-card');
        li.innerHTML = el;
        list.appendChild(li);
    })
}

getData();