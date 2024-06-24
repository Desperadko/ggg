document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const review = params.get("review");

    fetch("../jsons/reviews.json")
        .then(responce => responce.json())
        .then(data => {
            if(data && data.reviews && data.reviews[review]){
                const reviewParams = data.reviews[review];
                const reviewHeader = document.getElementById('review_header');
                const reviewMain = document.getElementById('review_main');

                reviewHeader.innerHTML = `
                    <div class="img_and_title_container">
                        <img src="${reviewParams.image}" alt="">
                        <div class="title">
                            <h2 class="title_h">${reviewParams.title}</h2>
                            <h3 class="title_desc">${reviewParams.short_desc}</h3>
                        </div>
                    </div>
                    <div class="review_details_container">
                        <div class="adp_container">
                            <p>Author: ${reviewParams.author}</p>
                            <p>Date: ${reviewParams.date_of_publish}</p>
                            <p>Playtime on review publish: ${reviewParams.playtime_of_publish}</p>
                        </div>
                        <h3 class="review_score">${reviewParams.rating}</h3>
                    </div>
                    <div class="game_details_container">
                        <p>GENRE ${reviewParams.genre}</p>
                        <p>DEVELOPER ${reviewParams.developer}</p>
                        <p>PUBLISHER ${reviewParams.publisher}</p>
                        <p>PLATFORM ${reviewParams.platform}</p>
                        <p>RELEASE DATE ${reviewParams.release_date}</p>
                    </div>
                `;

                reviewMain.innerHTML = `
                    <div class="review_main_subsection">
                        <h3>Game Introduction</h3>
                        <p>${reviewParams.game_introduction}</p>
                    </div>
                    <div class="review_main_subsection">
                        <h3>Gameplay</h3>
                        <p>${reviewParams.gameplay}</p>
                    </div>
                    <div class="review_main_subsection">
                        <h3>Story</h3>
                        <p>${reviewParams.story}</p>
                    </div>
                    <div class="review_main_subsection">
                        <h3>Final Thougts</h3>
                        <p>${reviewParams.final_thoughts}</p>
                    </div>
                `;
            }
            else
                console.log("Couldn't fine review..")
        })
        .catch(error => console.error(error));  
});