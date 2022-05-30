import $ from "jquery";

const contacts = () => {
    if ($('#map').length) {

        // Получаем контент с сервера.
        const getResource = async function(url) {
            const result = await fetch(url);
        
            if (!result.ok) {
                throw new Error(`Сould not fetch ${url}, status ${result.status}`);
            }
        
            return await result.json(); // Это промис
        };

        // функция генерации контента
        const getCityInfo = (city, response) => {
            const item = response.find(elem => elem.city == city);
            const {map, shops} = item;

            ymaps.ready(init);
            function init(){
                // Создание карты.
                let myMap = new ymaps.Map("map", {
                    center: map,
                    zoom: 12,
                    controls: []
                });

                shops.forEach(item => {
                    let myPlacemark = new ymaps.Placemark(item.coords, {}, {
                        iconLayout: 'default#image',
                        iconImageHref: './img/icons/map-mark.png',
                        iconImageSize: [55, 57],
                        iconImageOffset: [-28, -45]
                    })

                    myMap.geoObjects.add(myPlacemark);
                })

                myMap.behaviors.disable('scrollZoom');
                if (shops.length > 1) {
                    myMap.setBounds(myMap.geoObjects.getBounds());
                } else {
                    myMap.setCenter(shops[0].coords);
                }
            }
            // вставка магазинов
            shops.forEach(elem => {
                const shop = (
                    `<div class="item">
                        <div class="head">
                            <p class="name">${elem.name}</p>
                            <span class="type">${elem.type}</span>
                        </div>
                        <div class="content">
                            <p class="address">${elem.address}</p>
                            <a href="tel:${elem.phone}" class="phone">${elem.phone}</a>
                            <a href="mailto:${elem.mail}" class="mail">${elem.mail}</a>
                            <p class="time">${elem.time}</p>
                        </div>
                    </div>`  
                )

                $('.contacts__list').append(shop);
            })

            //Убираем прелоадеры
            $('.contacts__map').removeClass('loading');
            $('.contacts__list').removeClass('loading');
            
        }   
        
        //Первоначальная подгрузка
        getResource('./public/js/city.json')
            .then(result => {
                let activeCity = $('.tabs__item.active').text().trim();
                getCityInfo(activeCity, result)
            })

        //Клик по табам
        $('.tabs_map .tabs__item').click(function () {
            if (!$(this).hasClass('active')) {
                //Добавляем прелоадеры
                $('.contacts__map').addClass('loading');
                $('.contacts__list').addClass('loading');
                
                //очищаем контент
                $('#map').html('');
                $('.contacts__list').html('');

                $(this).addClass('active').siblings().removeClass('active');

                getResource('./public/js/city.json')
                    .then(result => {
                        let activeCity = $('.tabs__item.active').text().trim();
                        getCityInfo(activeCity, result)
                    })
            }
            
        })
    }
    
}

export default contacts;