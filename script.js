
const orders = [
    {
        img: "img/q.jpg",
        title: "Нуралы под кайфом",
        desc: "Ищу парня не только для общения) Нуралы.виц",
        btnText: "Заказать"
    },
    {
        img: "img/istockphoto-510373117-1024x1024.jpg",
        title: "Нуралы без смазки)",
        desc: "Хочу познакомиться с Негром)",
        btnText: "Написать"
    },
    {
        img: "img/homosexual-couple-men-kissing-multicolored-flag_23-2148144367.avif",
        title: "Отношения",
        desc: "Ищу серьёзные отношения и поддержку как гей.",
        btnText: "Связаться"
    },
    {
        img: "img/fun-nuraly.jpg",
        title: "Весёлый Нуралы",
        desc: "Ищу друзей для общения и весёлого времяпровождения.",
        btnText: "Написать"
    }
];

const container = document.getElementById("orders-container");

// Генерируем карточки
orders.forEach(order => {
    const div = document.createElement("div");
    div.classList.add("order");
    div.innerHTML = `
        <img src="${order.img}" alt="">
        <div class="content">
            <h3>${order.title}</h3>
            <p>${order.desc}</p>
            <a href="#" class="btn">${order.btnText}</a>
        </div>
    `;
    container.accessKey(div);
});
