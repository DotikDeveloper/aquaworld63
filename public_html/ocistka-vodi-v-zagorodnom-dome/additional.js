// НАСТРОЙКА ВАЛИДАТОРА ФОРМ
var validateMessages = {
    name: "Пожалуйста, укажите имя",
    phone: "Введите телефон, пожалуйста",
    email: {
        required: "Пожалуйста, введите E-mail адрес",
        email: "Пожалуйста, введите корректный E-mail адрес",
    },
    securityCode: "Введите защитный код",
    terms: " "
};
// КОНЕЦ НАСТРОЙКА ВАЛИДАТОРА ФОРМ


$(document).ready(function () {

// ИНИЦИАЛИЗАЦИЯ ВАЛИДАТОРА ФОРМ

    var validationParameter = {
        'messages': validateMessages,
        'rules': {
            'name': 'required',
            'phone': 'required'
        },
        'submitHandler': function(form)
        {
            var $form = $(form);
            $form.addClass('b-form_loading');

            $form.ajaxSubmit({
                'success': function(data)
                {
                    if(data.status == 'success')
                    {
                        var $message = $('<div class="b-message">' + data.message + '</div>');
                        $form.empty().append($message);
                    }
                    else
                    {
                        // technical error
                        console.log(data);
                    }
                },
                'complete': function()
                {
                    setTimeout(function()
                    {
                        $form.removeClass('b-form_loading');
                    }, 1000);
                }
            });
        }
    };
    $('form').each(function(ind, el) {
		$(el).validate(validationParameter);
	});
// КОНЕЦ ВАДИДАТОР ФОРМ

//Обработка нажатия на кнопку "Вверх"
    $("#page_up_btn").click(function () {
        //Необходимо прокрутить в начало страницы
        var curPos = $(document).scrollTop();
        var scrollTime = curPos / 1.73;
        $("body,html").animate({"scrollTop": 0}, scrollTime);
    });

    //Обработка нажатия на кнопку "Вниз"
    $("#down").click(function () {
        //Необходимо прокрутить в конец страницы
        var curPos = $(document).scrollTop();
        var height = $("body").height();
        var scrollTime = (height - curPos) / 1.73;
        $("body,html").animate({"scrollTop": height}, scrollTime);
    });

    $('.fancybox').fancybox({});
    $(".fancybox-gallery-cert").attr('rel', 'gallery-cert').fancybox({});
    $(".fancybox-gallery").attr('rel', 'gallery').fancybox({});

    if ($('a.popup-form.zakaz_zvonok').length || $('a.popup-form.zakaz_filtr').length || $('a.popup-form.more').length) {
        /*setInterval(function(){
         if ($('.fancybox-wrap').length)
         $('.fancybox-wrap').addClass('fancybox-zakaz-zvonok');
         },100)*/
    }
    /*$('a.popup-form.zakaz_zvonok').addClass('fancybox.ajax').fancybox({
     wrapCSS    : 'fancybox-zakaz-zvonok'
     });
     $('a.popup-form.zakaz_filtr').addClass('fancybox.ajax').fancybox({
     wrapCSS    : 'fancybox-zakaz-filtr'
     });
     $('a.popup-form.more').addClass('fancybox.ajax').fancybox({
     wrapCSS    : 'fancybox-zakaz-more'
     });*/

// ГАРМОШКА FAQ
    $(".faq div.answer").hide();
// $(".faq div.answer:not(:first)").hide();
    $(".faq .ask").click(function () {
        $(this).next("div.answer").slideToggle("slow").siblings("div.answer:visible").slideUp("slow");
        if (!$(this).hasClass('active'))
            $(this).addClass("active");
        else
            $(this).removeClass("active");
    });
// КОНЕЦ ГАРМОШКА FAQ

// Зебра для таблиц
    $(".zebra tr").mouseover(function () {
        $(this).addClass("over");
    }).mouseout(function () {
        $(this).removeClass("over");
    });
    $(".zebra tr:even").addClass("even");
//$(".zebra tr:last").removeClass("even");

// Счетчик
//    $(function() {
//
//        var note = $('#note'),
//                ts = new Date(2014, 07, 25);//(год (2013), (месяц-1 (октябрь=10-1=09)) 09, день (05))
//
//        $('#countdown').countdown({
//            timestamp: ts
//        });
//    });

// КАРУСЕЛЬКА фото

    $(document).ready(function () {
        $('#makeMeScrollableCert').smoothDivScroll({
            manualContinuousScrolling: false,
            touchScrolling: true,
            visibleHotSpotBackgrounds: "always"
        });
        $('#makeMeScrollable').smoothDivScroll({
            manualContinuousScrolling: false,
            touchScrolling: true,
            visibleHotSpotBackgrounds: "always"
        });
    });

// КОНОЕЦ КАРУСЕЛЬКА
// СЛАЙДЕР
    $(function () {
        $('.slides_container').slidesjs({
            // preload: true,
            // preloadImage: '/themes/standart/img/loading.gif',

            // Настройка эффектов
            effect: {
                // Эффект прозрачности (картинка просто исчезает и появляется методом изменения прозрачности)
                fade: {
                    speed: 300,
                    // [число] Скорость анимации в милисекундах.
                    crossfade: true
                            // [boolean] Использовать наложение
                },
                // Эффект скольжения
                slide: {
                    speed: 300
                            // [number] Скорость анимации в милисекундах.
                }
            },
            // Ширина и высота слайдов - по умолчанию берется из CSS файла
            //width: 'auto',
            //height: 'auto',

            // Кнопки навигации по слайдеру
            play: {
                active: false,
                // [boolean] Создание кнопок play и stop и запуск автоматичнской прокрутки слайдера
                // Вы не можете использовать свои кнопки Play Stop в случае если FALSE
                effect: "fade",
                interval: 5000,
                // [number] Время показа каждого слайда в миллисекундах.
                auto: true,
                // [boolean] Автоматический старт проигрывания слайд шоу после загрузки
                swap: false,
                // [boolean] Скрыть/Показать кнопки play stop
                pauseOnHover: true,
                // [boolean] Оставноить проигрывание при наведении указателя на слайд
                restartDelay: 5000
                        // [number] через сколько Перезапустить проигрывание, когда указатель убран
            },
            navigation: {
                active: true,
                // [boolean] Создание кнопок ВПЕРЕД НАЗАД
                // Вы можете установить в FALSE и использовать свои собственные кнопки.
                // Кнопки, определяемые пользователем должно быть следующее:
                // Кнопка НАЗАД: class="slidesjs-previous slidesjs-navigation"
                // Кнопка ВПЕРЕД: class="slidesjs-next slidesjs-navigation"
                effect: "fade"
            },
            pagination: {
                active: true,
                // [boolean] Генерация кнопок пагинации
                // Вы не можете использовать свои кнопки пагинации в случае если FALSE
                effect: "fade"
            },
            // Функции, выполянемые при загрузке старте и окончании анимации
            // callback: {
            // loaded: function() {
            // Do something awesome!
            // Passes start slide number
            // },
            // start: function() {
            // $('.caption').animate({
            // left: 420
            // },200);
            // },
            // complete: function() {
            // $('.caption').animate({
            // left: 10
            // },200);
            // }
            // }
        });
    });
// СЛАЙДЕР КОНЕЦ
    $(".block_kartochki .kartochka .more").click(function () {
        var className = $(this).parent(".kartochka").attr("id");
        $(".block_kartochki .kartochka .more").html("Подробнее")
        if ($(this).parent(".kartochka").hasClass('active')) {
            $(this).parent(".kartochka").removeClass("active").parent(".block_kartochki").children(".kartochka_body:visible").hide()
        }
        else
        {
            $(".block_kartochki .kartochka").removeClass("active");
            $(this).html("Скрыть описание").parent(".kartochka").addClass("active").parent(".block_kartochki").children(".kartochka_body." + className).show().siblings(".kartochka_body:visible").hide()
        }
    });

// Информер в шапке
    $('.msg-send').click(function () {
        $('.msg-send').hide();
    });

// Обновление имени загруженного файла в форму
    $('#file_1').change(function ()
    {

        $('#file_1').each(function () {
            var name = this.value;
            reWin = /.*\\(.*)/;
            var fileTitle = name.replace(reWin, "$1");
            reUnix = /.*\/(.*)/;
            fileTitle = fileTitle.replace(reUnix, "$1");
            var length_name = 20;
            if (fileTitle.length > length_name) {
                fileTitle = fileTitle.slice(0, length_name) + '...';
            }
            $('#upload_1').html(fileTitle);
        });

    });

    $('#file_2').change(function ()
    {

        $('#file_2').each(function () {
            var name = this.value;
            reWin = /.*\\(.*)/;
            var fileTitle = name.replace(reWin, "$1");
            reUnix = /.*\/(.*)/;
            fileTitle = fileTitle.replace(reUnix, "$1");
            var length_name = 20;
            if (fileTitle.length > length_name) {
                fileTitle = fileTitle.slice(0, length_name) + '...';
            }
            $('#upload_2').html(fileTitle);
        });

    });

    $('.zakaz_zvonok').click(function () {
        $('#popup-form, .overlay').fadeIn();
        $('#popup-form form').validate(validationParameter);
    });

    $('.zakaz_filtr').click(function () {
        $('#popup-form-filtr, .overlay').fadeIn();
    });

    $('.close, .overlay').click(function () {
        $('#popup-form, .overlay').fadeOut();
        $('#popup-form-filtr, .overlay').fadeOut();
    });

    $('.cupon-link').click(function () {

        var data = $('.cupon-link').data('show');
        var base = 'Химический анализ воды – Бесплатно';
        var next = 'Бесплатный анализ при установке системы очистки';
        var show = 'Подробнее...';
        var hide = '← Назад';

        if ('1' == data) {
            $('.cupon-link').data('show', '0');
            $('.cupon-text').animate({
                opacity: 0
            }, 100, function () {
                // Animation complete.
            });
            $('.cupon-text').animate({
                opacity: 1
            }, 700, function () {
                // Animation complete.
            });
            $('.cupon-text').text(next);
            $('.cupon-link').text(hide);
//            console.log(data);
        } else {
            $('.cupon-link').data('show', '1');
            $('.cupon-text').animate({
                opacity: 0
            }, 100, function () {
                // Animation complete.

//            $('.cupon-text').text(base);
                $('.cupon-text').animate({
                    opacity: 1
                }, 700, function () {
                    // Animation complete.
                });
            });
            $('.cupon-text').text(base);
            $('.cupon-link').text(show);
//            console.log(data);
        }

    });

});



