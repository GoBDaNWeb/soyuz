document.addEventListener('DOMContentLoaded', () => {
    function filterItems () {
        const topTriggers = document.querySelectorAll('.catalog-nav>li>a'), 
              bottomItems = document.querySelectorAll('.categories-nav-item>input');


        let topData;

        topTriggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();

                bottomItems.forEach(item => item.checked = false);

                topTriggers.forEach(trigger => {
                    trigger.classList.remove('active')
                });
                trigger.classList.add('active');
                
                topData = trigger.getAttribute('data-view');

				const cards = document.querySelectorAll('.catalog>.row>.col');
				cards.forEach(card => card.style.display = 'none');

                cards.forEach(card => {
                    if (topData === 'all') {
                        card.style.display = 'block'
                    } else {
                        if (card.getAttribute('data-view') === topData) {
                            card.style.display = 'block'
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });

                bottomItems.forEach(item => {
                    item.addEventListener('click', e => {
                        if (e.target.checked) {
                            let activeBottomItem = Array.prototype.filter.call(bottomItems, item => item.checked);
                            // let topFilteredCasrds = document.querySelectorAll('.catalog>.row>.col');

                            cards.forEach(item => item.style.display = 'none');

                            activeBottomItem.forEach(bottom => {
                                cards.forEach(card => {
                                    if (card.getAttribute('data-type') === bottom.getAttribute('data-type')) {
                                        if (card.getAttribute('data-view') === topData) {
                                            card.style.display = 'block';
                                        } else {
                                            if (topData === 'all') {
                                                card.style.display = 'block';
                                            }
                                        }
                                    } 
                                });
                            });

                        } else {
                            cards.forEach(card => {
                                if (topData === 'all') {
                                    card.style.display = 'block';
                                } else {
                                    if (card.getAttribute('data-view') === topData) {
                                        card.style.display = 'block'
                                    } else {
                                        card.style.display = 'none';
                                    }
                                }
                            });

                            let activeBottomItem = Array.prototype.filter.call(bottomItems, item => item.checked);
                            let topFilteredCasrds = document.querySelectorAll('.catalog>.row>.col');

                            activeBottomItem.forEach(bottom => {
                                let currentCasrds = Array.prototype.filter.call(topFilteredCasrds, card => {
                                    if (card.getAttribute('data-type') !== bottom.getAttribute('data-type')){
                                        card.style.display = 'none';
                                    } 
                                })
                            });
                        }
                    });
                });
                return cards;
                
            });
		trigger === topTriggers[0] ? trigger.click() : null;

});

// ajax
// $(document).ready(function(){

//     $(document).on('click', '.load_more', function(e){

// 		e.preventDefault();
// 		const bottomActiveBtns = document.querySelectorAll('.categories-nav-item>input:checked');

//         var targetContainer = $('.news-list'),          //  Контейнер, в котором хранятся элементы
//             url =  $('.load_more').attr('data-url');    //  URL, из которого будем брать элементы

//         if (url !== undefined) {
//             $.ajax({
//                 type: 'GET',
//                 url: url,
//                 dataType: 'html',
//                 success: function(data){

//                     //  Удаляем старую навигацию
//                     $('.load_more').remove();

//                     var elements = $(data).find('.news-item'),  //  Ищем элементы
//                         pagination = $(data).find('.load_more');//  Ищем навигацию

//                     targetContainer.append(elements);   //  Добавляем посты в конец контейнера
//                     targetContainer.append(pagination); //  добавляем навигацию следом

// 					let activeTab = document.querySelector('a[data-view].active');
// 					//let bottomActiveBtns = document.querySelectorAll('.categories-nav-item>input');

// 					activeTab.click();
// 					bottomActiveBtns.forEach(btn => btn.click());


//                 }
//             });
//         }

//     });

// });

