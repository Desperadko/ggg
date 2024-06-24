document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("cardsInPlace", () => {
        
        document.querySelectorAll('.home-page_subsection1').forEach(subsection => {
            const track = subsection.querySelector('.cards_list');
            const cards = Array.from(track.children);
            cards[0].classList.add('current_slide');
            const leftButton = subsection.querySelector('.button_left');
            const rightButton = subsection.querySelector('.button_right');
        
            setUpSlides(track, leftButton, rightButton);
        
            leftButton.addEventListener('click', () => {
                let currentSlide = track.querySelector('.current_slide');
                let prevSlide = currentSlide.previousElementSibling;
        
                slideCard(track, currentSlide, prevSlide, leftButton, rightButton);
            });
        
            rightButton.addEventListener('click', () => {
                let currentSlide = track.querySelector('.current_slide');
                let nextSlide = currentSlide.nextElementSibling;
        
                slideCard(track, currentSlide, nextSlide, leftButton, rightButton);
            });
        
            const mq1 = window.matchMedia('(width > 1185px)');
            mq1.addEventListener('change', () => resetTrackPos(track, cards, leftButton, rightButton));
        });
        
        function setUpSlides(track, leftButton, rightButton){
            const cards = Array.from(track.children);
            const rect = cards[0].getBoundingClientRect();
            const cardWidth = rect.width;
        
            if(window.innerWidth > 1185){
                for(let i = 0; i < cards.length; i++)
                    cards[i].style.left = cardWidth * i + 'px';
            }
            else{
                for(let i = 0; i < cards.length; i++)
                {
                    cards[i].style.left = cardWidth * i + 'px';
                    if(!cards[i].classList.contains('current_slide'))
                        cards[i].style.opacity = '0.85';
                }
            }
        
            const currentSlide = track.querySelector(".current_slide");
            buttonVisibilityToggle(track, currentSlide, leftButton, rightButton);
        }
        
        function resetTrackPos(track, cards, leftButton, rightButton){
            if(window.innerWidth > 1185){
                for(let i = 0; i < cards.length; i++)
                    cards[i].style.opacity = '1';
                track.style.transform = 'translate(0px)';
            }
            else{
                let currentSlide = track.querySelector(".current_slide");
                track.style.transform = 'translate(-'+ currentSlide.style.left +')';
        
                for(let i = 0; i < cards.length; i++)
                    if(!cards[i].classList.contains('current_slide'))
                        cards[i].style.opacity = '0.85';
        
                buttonVisibilityToggle(track, currentSlide, leftButton, rightButton);
            }
        }
        
        function slideCard(track, currentSlide, targetSlide, leftButton, rightButton){
            if(targetSlide != null)
                currentSlide.style.opacity = '0.85';
        
            track.style.transform = 'translate(-'+ targetSlide.style.left +')';
            targetSlide.style.opacity = '1';
        
            currentSlide.classList.remove('current_slide');
            targetSlide.classList.add('current_slide');
        
            buttonVisibilityToggle(track, targetSlide, leftButton, rightButton);
        }
        
        function buttonVisibilityToggle(track, currentSlide, leftButton, rightButton){
            const cards = Array.from(track.children);
        
            if(currentSlide == cards[0])
                leftButton.style.display = "none";
            else if(currentSlide == cards[cards.length - 1])
                rightButton.style.display = "none";
            else
            {
                leftButton.style.display = "block";
                rightButton.style.display = "block";
            }
        }
    })
});