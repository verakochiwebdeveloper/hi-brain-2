const articlesFilter = document.querySelector('.articles__filter'),
  articlesFilterBtn = document.querySelectorAll('.article__list-link');

function filter() {
  articlesFilter.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    console.log(targetId);

    switch (targetId) {
      case "all":
        getItems('article__list-link');
        break;
      case "appliances":
        getItems(targetId);
        break;
      case "cloth":
        getItems(targetId);
        break;
        case "cars":
        getItems(targetId);
        break;
        case "phones":
        getItems(targetId);
        break;
        case "clause":
        getItems(targetId);
        break;
    }
  });
}
filter();

function getItems(activeFilter) {
  articlesFilterBtn.forEach((item) => {
    if (item.classList.contains(activeFilter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
