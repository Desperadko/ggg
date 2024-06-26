const genres = [
    {name: 'mmo', type: 'genre'},
    {name: 'adventure', type: 'genre'},
    {name: 'rpg', type: 'genre'},
    {name: 'rts', type: 'genre'},
    {name: 'action', type: 'genre'},
    {name: 'racing', type: 'genre'},
    {name: 'horror', type: 'genre'}
];
genres.type = 'genres';

const platforms = [
    {name: 'pc', type: 'platform'},
    {name: 'ps5', type: 'platform'},
    {name: 'ps4', type: 'platform'},
    {name: 'xboxone', type: 'platform'},
    {name: 'xboxxs', type: 'platform'},
    {name: 'nintendoswitch', type: 'platform'}
];
platforms.type = 'platforms';

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const selection = params.get("selection");


    const container = document.getElementById('selection_container');

    fetch("../jsons/all_cards.json")
        .then(response => response.json())
        .then(data => {

            const games = Object.values(data);
            switch(selection){
                case 'genres':
                    setUpCards(genres, games, container);
                    break;
                case 'platforms':
                    setUpCards(platforms, games, container);
                    break;
                case 'mmo':
                    setUpCards(genres[0], games, container);
                    break;
                case 'adventure':
                    setUpCards(genres[1], games, container);
                    break;
                case 'rpg':
                    setUpCards(genres[2], games, container);
                    break;
                case 'rts':
                    setUpCards(genres[3], games, container);
                    break;
                case 'action':
                    setUpCards(genres[4], games, container);
                    break;
                case 'racing':
                    setUpCards(genres[5], games, container);
                    break;
                case 'horror':
                    setUpCards(genres[6], games, container);
                    break;
                case 'pc':
                    setUpCards(platforms[0], games, container);
                    break;
                case 'ps5':
                    setUpCards(platforms[1], games, container);
                    break;
                case 'ps4':
                    setUpCards(platforms[2], games, container);
                    break;
                case 'xboxone':
                    setUpCards(platforms[3], games, container);
                    break;
                case 'xboxxs':
                    setUpCards(platforms[4], games, container);
                    break;
                case 'nintendoswitch':
                    setUpCards(platforms[5], games, container);
                    break;
                default:
                    console.error("There was an error with the type of selection..");
            }
        })
        .catch(error => console.error(error));
});

function setUpCards(selection, games, container){
    let section;
    let h2;
    let cardsContainer;
    let article;

    if(typeof selection.name === 'string'){
        switch(selection.type)
        {
            case 'genre':
                section = document.createElement('section');
                section.id = `${selection.name}_section`;
        
                h2 = document.createElement('h2');
                h2.innerHTML = `
                    <a href="selection-page.html?selection=${selection.name}">${selection.name.toUpperCase()}</a>
                `;
                section.appendChild(h2);

                cardsContainer = document.createElement("div");
                cardsContainer.classList.add("cards_container");

                games.forEach(game => {
                    if(game.genre.includes(selection.name)){
                        article = document.createElement('article');
                            article.innerHTML = `
                                <a href="review-prototype.html?review=${game.review_id}" class="horizontal_card">
                                    <img src="${game.image}" alt="${game.title.toLowerCase()} image">
                                    <div class="card_content">
                                        <h3 class="card_title">${game.title}</h3>
                                        <p class="card_description">${game.desc}</p>
                                        <p class="card_author">author: ${game.author}</p>
                                    </div>
                                </a>
                            `;
                        cardsContainer.appendChild(article);
                    }
                });

                section.appendChild(cardsContainer);
                container.appendChild(section);
            break;
            case 'platform':
                section = document.createElement('section');
                section.id = `${selection.name}_section`;
        
                h2 = document.createElement('h2');
                h2.innerHTML = `
                    <a href="selection-page.html?selection=${selection.name}">${selection.name.toUpperCase()}</a>
                `;
                section.appendChild(h2);

                cardsContainer = document.createElement('div');
                cardsContainer.classList.add("cards_container");

                games.forEach(game => {
                    if(game.platform.includes(selection.name)){
                        article = document.createElement('article');
                            article.innerHTML = `
                                <a href="review-prototype.html?review=${game.review_id}" class="horizontal_card">
                                    <img src="${game.image}" alt="${game.title.toLowerCase()} image">
                                    <div class="card_content">
                                        <h3 class="card_title">${game.title}</h3>
                                        <p class="card_description">${game.desc}</p>
                                        <p class="card_author">author: ${game.author}</p>
                                    </div>
                                </a>
                            `;
                        cardsContainer.appendChild(article);
                    }
                });

                section.appendChild(cardsContainer);
                container.appendChild(section);
            break;
        }
    }
    else if(Array.isArray(selection)){
        switch(selection.type){
            case 'genres':
                selection.forEach(genre => {
                    section = document.createElement('section');
                    section.id = `${genre.name}_section`;
                    section.classList.add('selection_section');

                    h2 = document.createElement('h2');
                    h2.innerHTML = `
                        <a href="selection-page.html?selection=${genre.name}">${genre.name.toUpperCase()}</a>
                    `;
                    section.appendChild(h2);

                    cardsContainer = document.createElement('div');
                    cardsContainer.classList.add("cards_container");
                    
                    // let card = null;
                    // let cardStyle = null;

                    let numOfCards = 0;
                    
                    for(let i = 0; i < games.length; i++){
                        if(games[i].genre.includes(genre.name)){
                            article = document.createElement('article');
                            article.innerHTML = `
                            <a href="review-prototype.html?review=${games[i].review_id}" class="horizontal_card">
                            <img src="${games[i].image}" alt="${games[i].title.toLowerCase()} image">
                                    <div class="card_content">
                                    <h3 class="card_title">${games[i].title}</h3>
                                    <p class="card_description">${games[i].desc}</p>
                                    <p class="card_author">author: ${games[i].author}</p>
                                    </div>
                                    </a>
                                    `;

                            cardsContainer.appendChild(article);

                            // if(card === null){
                            //     card = article;
                            // }
                            
                            numOfCards++;
                        }
                    };

                    section.appendChild(cardsContainer);
                    container.appendChild(section);

                    // let arrowContainer = document.createElement('div');

                    // let arrowDown = document.createElement('i');
                    // arrowDown.classList.add("arrow");
                    // arrowDown.innerHTML = `
                    // 	<img src="../assets/chevron-down.svg" alt="">
                    // `;
                    // let arrowUp = document.createElement('i');
                    // arrowUp.classList.add("arrow");
                    // arrowUp.innerHTML = `
                    //     <img src="../assets/chevron-up.svg" alt="">
                    // `;
                    
                    // arrowContainer.appendChild(arrowUp);
                    // arrowContainer.appendChild(arrowDown);
                    // section.appendChild(arrowContainer);

                    // cardStyle = window.getComputedStyle(card.children[0]);

                    // if(numOfCards > 3){
                    //     cardsContainer.style.height = h2.offsetHeight + card.offsetHeight * 3 + cardsContainer.style.gap + "px";
                    // }
                    // else{
                    //     cardsContainer.style.height = h2.offsetHeight + card.offsetHeight * numOfCards + cardsContainer.style.gap + "px";
                    // }
                });
            break;
            case 'platforms':
                selection.forEach(platform => {
                    section = document.createElement('section');
                    section.id = `${platform.name}_section`;
                    section.classList.add('selection_section');

                    h2 = document.createElement('h2');
                    h2.innerHTML = `
                        <a href="selection-page.html?selection=${platform.name}">${platform.name.toUpperCase()}</a>
                    `;
                    section.appendChild(h2);

                    cardsContainer = document.createElement('div');
                    cardsContainer.classList.add("cards_container");

                    // let numOfCards = 0;
                    for(let i = 0; i < games.length; i++){
                        if(games[i].platform.includes(platform.name)){
                            article = document.createElement('article');
                            article.innerHTML = `
                                <a href="review-prototype.html?review=${games[i].review_id}" class="horizontal_card">
                                    <img src="${games[i].image}" alt="${games[i].title.toLowerCase()} image">
                                    <div class="card_content">
                                        <h3 class="card_title">${games[i].title}</h3>
                                        <p class="card_description">${games[i].desc}</p>
                                        <p class="card_author">author: ${games[i].author}</p>
                                    </div>
                                </a>
                            `;
                            cardsContainer.appendChild(article);
                            // numOfCards++;
                            // if(numOfCards > 2)
                            //     break;
                        }
                    };

                    section.appendChild(cardsContainer);
                    container.appendChild(section);
                });
            break;
        }
    }
    else
        console.error("There was an error with the type of selection..");
}