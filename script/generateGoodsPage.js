import { getData } from "./getData.js";
const wishList = ["idd005", "idd100", "idd077", "idd033"];
const generateGoodsPage = () => {
  const mainHeader = document.querySelector(".main-header");
  const goodsList = document.querySelector(".goods-list");

  if (location.pathname.includes("goods") && location.search) {
    const search = decodeURI(location.search);
    const prop = search.split("=")[0].substring(1);
    const value = search.split("=")[1];
    const generateCards = (data) => {
      data.forEach((item) => {
        goodsList.insertAdjacentHTML(
          "afterbegin",
          `
          <li class="goods-list__item">
            <a class="goods-item__link" href="card.html#${item.id}">
                <article class="goods-item">
                    <div class="goods-item__img">
                        <img src="${item.img[0]}"
                            data-second-image="${item.img[1]}"
                            alt="${item.name}">
                    </div>
                    <p class="goods-item__new"><!--Новинка--></p>
                    <h3 class="goods-item__header">${item.name}</h3>
                    <p class="goods-item__description">${item.description}</p>
                    <p class="goods-item__price">
                        <span class="goods-item__price-value">${item.price}</span>
                        <span class="goods-item__currency"> ₽</span>
                    </p>
                    <button class="btn btn-add-card" aria-label="Добравить в корзину"
                        data-idd="${item.id}"></button>
                </article>
            </a>
          </li>
          `
        );
      });
    };
    if (prop === "s") {
      getData.search(value, generateCards);
      if (goodsList) {
        mainHeader.textContent = `Поиск: ${value}`;
      } else {
        mainHeader.textContent = "Ничего не найдено";
      }
    } else if (prop === "wishlist") {
      getData.wishList(wishList, generateCards);
      mainHeader.textContent = "Список желаний";
    } else if (prop === "cat" || prop === "subcat") {
      getData.category(prop, value, generateCards);
      mainHeader.textContent = value;
    }
  }
};

export default generateGoodsPage;
