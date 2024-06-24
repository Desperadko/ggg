document.addEventListener("DOMContentLoaded", () => {
    fetch("../jsons/home-page_cards.json")
        .then(responce => responce.json())
        .then(data => {
            let cards;

            let cardsListContainer1 = document.getElementById('trending_cards_list1');
            let cardsListContainer2 = document.getElementById('trending_cards_list2');
            cards = data.trending;
            placeCards(cards, cardsListContainer1, cardsListContainer2);

            cardsListContainer1 = document.getElementById('latest_cards_list1');
            cardsListContainer2 = document.getElementById('latest_cards_list2');
            cards = data.latest;
            placeCards(cards, cardsListContainer1, cardsListContainer2);

            cardsListContainer1 = document.getElementById('new-releases_cards_list1');
            cardsListContainer2 = document.getElementById('new-releases_cards_list2');
            cards = data.new_releases;
            placeCards(cards, cardsListContainer1, cardsListContainer2);

            cardsListContainer1 = document.getElementById('upcoming_cards_list1');
            cardsListContainer2 = document.getElementById('upcoming_cards_list2');
            cards = data.upcoming;
            placeCards(cards, cardsListContainer1, cardsListContainer2);

            let event = new CustomEvent("cardsInPlace");
            document.dispatchEvent(event);
        })
        .catch(error => console.error(error));
});

function placeCards(cards, cardsListContainer1, cardsListContainer2){
    for(let i = 0; i < cards.length; i++){
        if(i > 2){
            let listItem = document.createElement('article');
            listItem.innerHTML = `
                <a href="review-prototype.html?review=${cards[i].review_id}" class="horizontal_card">
                    <img src="${cards[i].image}" alt="${cards[i].title.toLowerCase()} image">
                    <div class="card_content">
                        <h3 class="card_title">${cards[i].title}</h3>
                        <p class="card_description">${cards[i].desc}</p>
                        <p class="card_author">author: ${cards[i].author}</p>
                    </div>
                </a>
            `;
            cardsListContainer2.appendChild(listItem);
        }
        else{
            let listItem = document.createElement('li');
            listItem.classList.add('card');
            listItem.innerHTML = `
                <a href="review-prototype.html?review=${cards[i].review_id}" class="vertical_card stacked">
                    <img src="${cards[i].image}" alt="${cards[i].title.toLowerCase()} image">
                    <div class="card_content">
                        <h3 class="card_title">${cards[i].title}</h3>
                        <p class="card_description">${cards[i].desc}</p>
                        <p class="card_author">author: ${cards[i].author}</p>
                    </div>
                </a>
            `;
            cardsListContainer1.appendChild(listItem);
        }
    }
}