document.addEventListener('DOMContentLoaded', () => {
    
    const liftImg = (imgWrapper, step = 29) => {
        const wrapper = document.querySelector(imgWrapper),
              img =  wrapper.querySelector('img');

        let i = 0;

        window.addEventListener('wheel', (e) => {
            if (e.deltaY < 99) {
                if (window.pageYOffset > 0) {
                    if(i <= step + 1 ) {
                        i = 0;
                        img.style.top = `${i}px`;
                    } else {
                        i += step;
                        img.style.top = `${i}px`;
                    }
                }
            }
            else {
                i -= step;
                img.style.top = `${i}px`;
            }
        });
    }

    liftImg('.manufacturer_item.manufacturer_item_second>.manufacturer_item_img');
    liftImg('.fields_item_img_child', 19);
});



        // $(window).bind('mousewheel', function(event) {

        //     if (event.originalEvent.wheelDelta >= 0) {
        //         if (window.pageYOffset > 0) {
        //             if(i <= 40 ) {
        //                 i = 0;
        //                 img.style.top = `${i}px`;
        //             } else {
        //                 i += 39;
        //                 img.style.top = `${i}px`;
        //             }
        //         }
        //     }
        //     else {
        //         i -= 39;
        //         img.style.top = `${i}px`;
        //     }
        // });