function initMap() {
    var center = {lat: 59.912411, lng: 30.324043};
    
    var map = new google.maps.Map(
    document.getElementById('map'), {
        zoom: 12,
        center: center,
            disableDefaultUI: true,
        styles: [
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
        
    });
    
    var marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: {
            url: '../img/icons/mapmarker.png',
            size: new google.maps.Size(54,62),
        }
    })
}

//маски телефонов



$(document).ready(function() {

    // //tel mask
    // if($('section').hasClass('.application')) {
    //     var cleave1 = new Cleave('.tel1', {
    //         phone: true,
    //         phoneRegionCode: 'RU'
    //     });
    // };

    //sliders 

    $('.block1-slider').slick({
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.block7-slider').slick({
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '100px',

    });

    //only mobile sliders

    if (window.matchMedia("(max-width: 440px)").matches) {
        $('.teams-divisions').slick({
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: '100px',
            focusOnSelect: true,
        });

        $('.filter-bottom').slick({
            arrows: false,
            dots: false,
            centerMode: true,
            //infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            focusOnSelect: true,
        });


        $('.team-players_list').slick({
            arrows: false,
            dots: true,

        })

        $('.results-filter').slick({
            arrows: false,
            dots: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '100px',
            focusOnSelect: true,
        });

        $('.stat-slider-nav').slick({
            arrows: false,
            dots: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '130px',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 330,
                    settings: {
                        centerPadding: '90px',
                    }
                }
            ]
        });

        $('.stat-team-block1').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        $('.stat-team-block3').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        $('.captain-list').slick({
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '90px',
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '60px',
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    // $('.info-slider').slick({
    //    arrows: false,
    //    dots: true,
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    // });

    $('.info-slider').slick({
        arrows: false,
        dots: true,
    });

    //scrollbar

    $('.filter-top').mCustomScrollbar({
        axis: 'x',
    });

    $('.block2').mCustomScrollbar({
        axis: 'x',
        mouseWheel: false,
    });

    $('.block3-left_bottom').mCustomScrollbar({
        axis: 'x',
        mouseWheel: false,
    });

    $('.block6-slider_wrap').mCustomScrollbar({
        axis: 'x',
        mouseWheel: false,
    });

    $('.block7-results').mCustomScrollbar({
        axis: 'x',
        mouseWheel: false,
    });

    $('.block8-slider').mCustomScrollbar({
        axis: 'x',
        mouseWheel: false,
    });

    $('.block6-desc-slider').mCustomScrollbar({
        axis: 'x',
        mouseWheel: false,
    });

    $('.block7-first_right_slider').mCustomScrollbar({
        axis: 'y',
    });

    $('.up-table-slider').mCustomScrollbar({
       axis: 'x',
    });

    $('.block7-table-slider').mCustomScrollbar({
        axis: 'x',
    });

    $('.time-desc-slider').mCustomScrollbar({
        axis: 'x',
    });

    //desctop

    //index open select's on click on wrap

    //man-women form


    //страница статистики выбор секций

    $('.selector-item-p').click(function () {
        $('.selector-item-p').removeClass('this-item-p');
        $(this).addClass('this-item-p');

        //lider

        if($(this).hasClass('libero-lider')) {
            $('.index-stats-lider').removeClass('selected-stats-lider');
            $('.libero').addClass('selected-stats-lider');
        } else if($(this).hasClass('doigr-lider')) {
            $('.index-stats-lider').removeClass('selected-stats-lider');
            $('.doigr').addClass('selected-stats-lider');
        } else if($(this).hasClass('svyaz-lider')) {
            $('.index-stats-lider').removeClass('selected-stats-lider');
            $('.svyaz').addClass('selected-stats-lider');
        } else if($(this).hasClass('diag-lider')) {
            $('.index-stats-lider').removeClass('selected-stats-lider');
            $('.diag').addClass('selected-stats-lider');
        } else if($(this).hasClass('centr-lider')) {
            $('.index-stats-lider').removeClass('selected-stats-lider');
            $('.centr').addClass('selected-stats-lider');
        };

        //all lider

        if($(this).hasClass('libero-all-select')) {
            $('.index-stats-all').removeClass('selected-stats-all');
            $('.libero-all').addClass('selected-stats-all');
        } else if($(this).hasClass('doigr-all-select')) {
            $('.index-stats-all').removeClass('selected-stats-all');
            $('.doigr-all').addClass('selected-stats-all');
        } else if($(this).hasClass('svyaz-all-select')) {
            $('.index-stats-all').removeClass('selected-stats-all');
            $('.svyaz-all').addClass('selected-stats-all');
        } else if($(this).hasClass('diag-all-select')) {
            $('.index-stats-all').removeClass('selected-stats-all');
            $('.diag-all').addClass('selected-stats-all');
        } else if($(this).hasClass('centr-all-select')) {
            $('.index-stats-all').removeClass('selected-stats-all');
            $('.centr-all').addClass('selected-stats-all');
        }

    });

    $('.block7-desc-showmore').click(function() {
        var table = $(this).parent().parent().parent().next();
        if(table.hasClass('block7-second-show')) {
            table.removeClass('block7-second-show');
            $(this).removeClass('block7-showmore-open');
        } else {
            table.addClass('block7-second-show');
            $(this).addClass('block7-showmore-open');
        }
    });

    $('.block7-desc-showmore_player').click(function() {
       if($(this).hasClass('block7-desc-showmore_player_open')) {
           $(this).removeClass('block7-desc-showmore_player_open');
           $('.block7').removeClass('block7_player_show');
       } else {
           $(this).addClass('block7-desc-showmore_player_open');
           $('.block7').addClass('block7_player_show');
       }
    });

    //высота столбоц в статистике

    var graphs = $('.graph');
    var divs = $('.graph .size');
    var array = [];

    for(var i = 0; i < graphs.length; i++) {
        var height = graphs[i];
        attr = height.getAttribute('data-height');
        graphs[i].style.height = attr*2 + 'px';
        divs[i].innerHTML = attr;
    };

    //страница статистики подсветка столбцов
    //ооо дааа, больше говнокода, меньше времени на разработку

    $('.cell-1').mouseenter(function() {
       $('.cell-1').addClass('hovered');
    });

    $('.cell-1').mouseleave(function() {
       $('.cell-1').removeClass('hovered');
    });

    $('.cell-2').mouseenter(function() {
        $('.cell-2').addClass('hovered');
    });

    $('.cell-2').mouseleave(function() {
        $('.cell-2').removeClass('hovered');
    });

    $('.cell-3').mouseenter(function() {
        $('.cell-3').addClass('hovered');
    });

    $('.cell-3').mouseleave(function() {
        $('.cell-3').removeClass('hovered');
    });

    $('.cell-4').mouseenter(function() {
        $('.cell-4').addClass('hovered');
    });

    $('.cell-4').mouseleave(function() {
        $('.cell-4').removeClass('hovered');
    });

    $('.cell-5').mouseenter(function() {
        $('.cell-5').addClass('hovered');
    });

    $('.cell-5').mouseleave(function() {
        $('.cell-5').removeClass('hovered');
    });

    $('.cell-6').mouseenter(function() {
        $('.cell-6').addClass('hovered');
    });

    $('.cell-6').mouseleave(function() {
        $('.cell-6').removeClass('hovered');
    });

    $('.cell-7').mouseenter(function() {
        $('.cell-7').addClass('hovered');
    });

    $('.cell-7').mouseleave(function() {
        $('.cell-7').removeClass('hovered');
    });

    $('.cell-8').mouseenter(function() {
        $('.cell-8').addClass('hovered');
    });

    $('.cell-8').mouseleave(function() {
        $('.cell-8').removeClass('hovered');
    });

    $('.cell-9').mouseenter(function() {
        $('.cell-9').addClass('hovered');
    });

    $('.cell-9').mouseleave(function() {
        $('.cell-9').removeClass('hovered');
    });

    //mobile
    
    //info in statistics page

    $('.statistics .stat-team-block1 .block1-first .info-button').click(function() {
       $('.info-window').addClass('info-window_show');
       $('.overlay-blue').css('display','block');
       $('html, body').css('overflow','hidden');
    });

    $('.statistics .info-window .close-info').click(function() {
        $('.info-window').removeClass('info-window_show');
        $('.overlay-blue').css('display','none');
        $('html, body').css('overflow','auto');
    });

    $('.overlay-blue').click(function() {
        $('.info-window').removeClass('info-window_show');
        $('.overlay-blue').css('display','none');
        $('html, body').css('overflow','auto');
    });

    $('.statistics .info-window button').click(function() {
        $('.statistics .info-window button').removeClass('selected');
        $(this).addClass('selected');

        function a() {
            if($('.statistics .slick-active  button:first-child').hasClass('selected')) {
                $('.statistics .slick-active .info-cont').removeClass('info-cont_show');
                $('.statistics .slick-active .info-cont:first-child').addClass('info-cont_show');
            }

            if($('.statistics .slick-active  button:nth-child(2)').hasClass('selected')) {
                $('.statistics .slick-active .info-cont').removeClass('info-cont_show');
                $('.statistics .slick-active .info-cont:nth-child(2)').addClass('info-cont_show');
            }

            if($('.statistics .slick-active button:nth-child(3)').hasClass('selected')) {
                $('.statistics .slick-active .info-cont').removeClass('info-cont_show');
                $('.statistics .slick-active .info-cont:nth-child(3)').addClass('info-cont_show');
            }

            if($('.statistics .slick-active  button:nth-child(4)').hasClass('selected')) {
                $('.statistics .slick-active .info-cont').removeClass('info-cont_show');
                $('.statistics .slick-active .info-cont:nth-child(4)').addClass('info-cont_show');
            }

            if($('.statistics .slick-active  button:nth-child(5)').hasClass('selected')) {
                $('.statistics .slick-active .info-cont').removeClass('info-cont_show');
                $('.statistics .slick-active .info-cont:nth-child(5)').addClass('info-cont_show');
            }
        }

        a();
    });

    //statistic desctop

    $('.statistics .stat-slider-nav .slider-nav_item').click(function() {
        $('.statistics .stat-slider-nav .slider-nav_item').removeClass('this-slider-nav_item');
        $(this).addClass('this-slider-nav_item');

        if($(this).hasClass('stat-select')) {
            $('.stat-video').removeClass('statistics-desc-show');
            $('.stat-top3-desc').removeClass('statistics-desc-show');
            $('.stat-dinamic-desc').removeClass('statistics-desc-show');

            $('.stat-match-desc').addClass('statistics-desc-show');

            if (window.matchMedia("(max-width: 1024px)").matches) {
                $('.stat-top3').removeClass('statistics-block-show');
                $('.stat-dinamic').removeClass('statistics-block-show');
                $('.stat-video').removeClass('statistics-block-show');

                $('.stat-match').addClass('statistics-block-show');
            }

        } else if($(this).hasClass('video-select')) {
            $('.stat-match-desc').removeClass('statistics-desc-show');
            $('.stat-top3-desc').removeClass('statistics-desc-show');
            $('.stat-dinamic-desc').removeClass('statistics-desc-show');

            $('.stat-video').addClass('statistics-desc-show');

            if (window.matchMedia("(max-width: 1024px)").matches) {


                $('.stat-top3').removeClass('statistics-block-show');
                $('.stat-match').removeClass('statistics-block-show');
                $('.stat-dinamic').removeClass('statistics-block-show');

                $('.stat-video').addClass('statistics-block-show');
            }
        } else if($(this).hasClass('top-select')) {
            $('.stat-match-desc').removeClass('statistics-desc-show');
            $('.stat-video').removeClass('statistics-desc-show');
            $('.stat-dinamic-desc').removeClass('statistics-desc-show');

            $('.stat-top3-desc').addClass('statistics-desc-show');

            if (window.matchMedia("(max-width: 1024px)").matches) {


                $('.stat-match').removeClass('statistics-block-show');
                $('.stat-dinamic').removeClass('statistics-block-show');
                $('.stat-video').removeClass('statistics-block-show');

                $('.stat-top3').addClass('statistics-block-show');
            }
        } else if ($(this).hasClass('dinamic-select')) {
            $('.stat-match-desc').removeClass('statistics-desc-show');
            $('.stat-top3-desc').removeClass('statistics-desc-show');
            $('.stat-video').removeClass('statistics-desc-show');

            $('.stat-dinamic-desc').addClass('statistics-desc-show');

            if (window.matchMedia("(max-width: 1024px)").matches) {
                $('.stat-top3').removeClass('statistics-block-show');
                $('.stat-match').removeClass('statistics-block-show');
                $('.stat-video').removeClass('statistics-block-show');

                $('.stat-dinamic').addClass('statistics-block-show');

            }
        }
    });

    //статистика выбор секций

    $('.stat-slider-nav').on('afterChange', function(event, slick, currentSlide) {
        //statisctic
        if(currentSlide == 0) {
            $('.stat-top3').removeClass('statistics-block-show');
            $('.stat-dinamic').removeClass('statistics-block-show');
            $('.stat-video').removeClass('statistics-block-show');

            $('.stat-match').addClass('statistics-block-show');
        }

        //top3
        if(currentSlide == 1) {
            $('.stat-match').removeClass('statistics-block-show');
            $('.stat-dinamic').removeClass('statistics-block-show');
            $('.stat-video').removeClass('statistics-block-show');

            $('.stat-top3').addClass('statistics-block-show');
        }

        //dinamic

        if(currentSlide == 2) {
            $('.stat-top3').removeClass('statistics-block-show');
            $('.stat-match').removeClass('statistics-block-show');
            $('.stat-video').removeClass('statistics-block-show');

            $('.stat-dinamic').addClass('statistics-block-show');
        }

        //video

        if(currentSlide == 3) {
            $('.stat-top3').removeClass('statistics-block-show');
            $('.stat-match').removeClass('statistics-block-show');
            $('.stat-dinamic').removeClass('statistics-block-show');

            $('.stat-video').addClass('statistics-block-show');
        }
    });
    
    //index селекторы моб показать
    
    $('.block3-selector').click(function() {
        
        if($(this).hasClass('showed')) {
            $(this).removeClass('showed');
            $('.block3-form').css('left','-100%');
            $('.stats-form').css('left','-100%');
            $('.team-page-form').css('left','-100%');
            $('.timetable-form-month').css('left','-100%');
        } else {
            $(this).addClass('showed');
            $('.block3-form').css('left','2%');
            $('.stats-form').css('left','2%');
            $('.team-page-form').css('left','2%');
            $('.timetable-form-month').css('left','2%');
        }

        var a = $('.block3-form');

        a.change(function() {
            $('.block3-selector').removeClass('showed');
            $('.block3-form').css('left','-100%');
        });

        var b = $('.stats-form');

        b.change(function() {
           $('.block3-selector').removeClass('showed');
           $('.stats-form').css('left','-100%');
        });

        var c = $('.team-page-form');

        c.change(function() {
            $('.block3-selector').removeClass('showed');
            $('.team-page-form').css('left','-100%');

            var text = $('.team-page-form option:selected').text();
            var change = $('.team-page .upcoming-mathces .block3 .small').text(text);
        });

        var d = $('.timetable-form-month');

        d.change(function() {
           $('.block3-selector').removeClass('showed');
           $('.timetable-form-month').css('left','-100%');

           var text = $('.timetable-form-month option:selected').text();
           var change = $('.timetable .block3 .small').text(text);

        });
    });
    
    $('.block6-selector').click(function() {
       if($(this).hasClass('showed')) {
           $(this).removeClass('showed');
           $('.block6-form1').css('left','-100vw');
           $('.block6-form2').css('left','-100vw');
       } else {
           $(this).addClass('showed');
           $('.block6-form1').css('left','5%');
       }

       var a = $('.block6-form1');
       a.change(function() {
           $('.block6-form1').css('left','-100vw');
           $('.block6-form2').css('left','5%');
       });

       var b = $('.block6-form2');

       b.change(function() {
           $('.block6-selector').removeClass('showed');
           $('.block6-form1').css('left','-100vw');
           $('.block6-form2').css('left','-100vw');
       });
    });

    $('.block7-selector').click(function() {
       if($(this).hasClass('showed')) {
           $(this).removeClass('showed');
           $('.block7-form1').css('left','-100vw');
           $('.block7-form2').css('left','-100vw');
       } else {
           $(this).addClass('showed');
           $('.block7-form1').css('left','5%');
       }

       var a = $('.block7-form1');
       a.change(function() {
           $('.block7-form1').css('left','-100vw');
           $('.block7-form2').css('left','5%');
       });

       var b = $('.block7-form2');

       b.change(function() {
           $('.block7-selector').removeClass('showed');
           $('.block7-form1').css('left','-100vw');
           $('.block7-form2').css('left','-100vw');
       })
    });

    $('.stat-team1-show').click(function() {

        var a = $(this).next();

        if($(this).hasClass('stat-team1-show_show')) {
            $(this).removeClass('stat-team1-show_show');
            a.removeClass('stat-team-block3_show');
        } else {
            $(this).addClass('stat-team1-show_show');
            a.addClass('stat-team-block3_show');
        }
    });

    //team-page выбор секций

    //desctop

    $('.filter-bottom_item').click(function() {
        //подсветка
       $('.filter-bottom_item ').removeClass('filter-bottom_selected');
       $(this).addClass('filter-bottom_selected');

       if($(this).hasClass('team-players-select')) {
           $('.upcoming-mathces').removeClass('upcoming-mathces_show');
           $('.ended-matches').removeClass('ended-matches_show');

           $('.team-players').addClass('team-players_show');
       } else if($(this).hasClass('upcoming-select')) {
           $('.team-players').removeClass('team-players_show');
           $('.ended-matches').removeClass('ended-matches_show')

           $('.upcoming-mathces').addClass('upcoming-mathces_show');
       } else if($(this).hasClass('ended-matches-select')) {
           $('.team-players').removeClass('team-players_show');
           $('.upcoming-mathces').removeClass('upcoming-mathces_show');

           $('.ended-matches').addClass('ended-matches_show');
       }
    });

    //mob

    $('.team-page .filter-bottom').on('afterChange', function(event, slick, currentSlide) {
       //участники
       if(currentSlide == 0) {
           $('.upcoming-mathces').removeClass('upcoming-mathces_show');
           $('.ended-matches').removeClass('ended-matches_show');

           $('.team-players').addClass('team-players_show');
       };

       //предстоящие матчи
       if(currentSlide == 1) {
            $('.team-players').removeClass('team-players_show');
            $('.ended-matches').removeClass('ended-matches_show')

            $('.upcoming-mathces').addClass('upcoming-mathces_show');
       };

       //сыгранные матчи
       if(currentSlide == 2) {
           $('.team-players').removeClass('team-players_show');
           $('.upcoming-mathces').removeClass('upcoming-mathces_show');

           $('.ended-matches').addClass('ended-matches_show');
       };
    });

    //teams page выбор секций

    //desctop

    $('.team-divisons_item').click(function() {
        $('.team-divisons_item').removeClass('team-divisons_item-selected');
        $(this).addClass('team-divisons_item-selected');

        if($(this).hasClass('super-select')) {
            $('.teams-1div').removeClass('teams-show-block');
            $('.teams-2div').removeClass('teams-show-block');
            $('.teams-3div').removeClass('teams-show-block');

            $('.teams-super').addClass('teams-show-block');
        } else if($(this).hasClass('1div-select')) {
            $('.teams-super').removeClass('teams-show-block');
            $('.teams-2div').removeClass('teams-show-block');
            $('.teams-3div').removeClass('teams-show-block');

            $('.teams-1div').addClass('teams-show-block');
        } else if($(this).hasClass('2div-select')) {
            $('.teams-super').removeClass('teams-show-block');
            $('.teams-1div').removeClass('teams-show-block');
            $('.teams-3div').removeClass('teams-show-block');

            $('.teams-2div').addClass('teams-show-block');
        } else if($(this).hasClass('3div-select')) {
            $('.teams-1div').removeClass('teams-show-block');
            $('.teams-2div').removeClass('teams-show-block');
            $('.teams-super').removeClass('teams-show-block');

            $('.teams-3div').addClass('teams-show-block');
        }
    });

    //mobile

    $('.teams-divisions').on('afterChange', function(event, slick, currentSlide) {
        //суперлига
        if(currentSlide == 0) {
            $('.teams-1div').removeClass('teams-show-block');
            $('.teams-2div').removeClass('teams-show-block');
            $('.teams-3div').removeClass('teams-show-block');

            $('.teams-super').addClass('teams-show-block');
        };

        //1div
        if(currentSlide == 1) {
            $('.teams-super').removeClass('teams-show-block');
            $('.teams-2div').removeClass('teams-show-block');
            $('.teams-3div').removeClass('teams-show-block');

            $('.teams-1div').addClass('teams-show-block');
        };

        //2div
        if(currentSlide == 2) {
            $('.teams-super').removeClass('teams-show-block');
            $('.teams-1div').removeClass('teams-show-block');
            $('.teams-3div').removeClass('teams-show-block');

            $('.teams-2div').addClass('teams-show-block');
        };

        //3idv
        if(currentSlide == 3) {
            $('.teams-1div').removeClass('teams-show-block');
            $('.teams-2div').removeClass('teams-show-block');
            $('.teams-super').removeClass('teams-show-block');

            $('.teams-3div').addClass('teams-show-block');
        }
    });

    //game-results выбор секций

    //desctop

    $('.results-item').click(function () {
        $('.results-item').removeClass('results-item_selected');
        $(this).addClass('results-item_selected');

        if($(this).hasClass('result-super-select')) {
            $('.1div-table').removeClass('results-table-desc_show');
            $('.2div-table').removeClass('results-table-desc_show');
            $('.3div-table').removeClass('results-table-desc_show');
            $('.all-table').removeClass('results-table-desc_show');

            $('.super-table').addClass('results-table-desc_show');
        } else if($(this).hasClass('result-1div-select')) {
            $('.super-table').removeClass('results-table-desc_show');
            $('.2div-table').removeClass('results-table-desc_show');
            $('.3div-table').removeClass('results-table-desc_show');
            $('.all-table').removeClass('results-table-desc_show');

            $('.1div-table').addClass('results-table-desc_show');
        } else if($(this).hasClass('result-2div-select')) {
            $('.1div-table').removeClass('results-table-desc_show');
            $('.super-table').removeClass('results-table-desc_show');
            $('.3div-table').removeClass('results-table-desc_show');
            $('.all-table').removeClass('results-table-desc_show');

            $('.2div-table').addClass('results-table-desc_show');
        } else if($(this).hasClass('result-3div-select')) {
            $('.1div-table').removeClass('results-table-desc_show');
            $('.super-table').removeClass('results-table-desc_show');
            $('.2div-table').removeClass('results-table-desc_show');
            $('.all-table').removeClass('results-table-desc_show');

            $('.3div-table').addClass('results-table-desc_show');
        } else if($(this).hasClass('result-all-select')) {
            $('.1div-table').removeClass('results-table-desc_show');
            $('.super-table').removeClass('results-table-desc_show');
            $('.2div-table').removeClass('results-table-desc_show');
            $('.3div-table').removeClass('results-table-desc_show');

            $('.all-table').addClass('results-table-desc_show');
        }
    })

    //mobile

    $('.game-results .results-filter').on('afterChange', function(event,slick,currentSlide) {
       //super
       if(currentSlide == 0) {
           $('.results-1div').removeClass('results-div-show');
           $('.results-2div').removeClass('results-div-show');
           $('.results-3div').removeClass('results-div-show');

           $('.results-super').addClass('results-div-show');
       };

       //1div
        if(currentSlide == 1) {
            $('.results-super').removeClass('results-div-show');
            $('.results-2div').removeClass('results-div-show');
            $('.results-3div').removeClass('results-div-show');

            $('.results-1div').addClass('results-div-show');
        };

        //2div
        if(currentSlide == 2) {
            $('.results-1div').removeClass('results-div-show');
            $('.results-2div').addClass('results-div-show');
            $('.results-3div').removeClass('results-div-show');
            $('.results-super').removeClass('results-div-show');
        };

        //3div
        if(currentSlide == 3) {
            $('.results-1div').removeClass('results-div-show');
            $('.results-2div').removeClass('results-div-show');
            $('.results-3div').addClass('results-div-show');
            $('.results-super').removeClass('results-div-show');
        };

        //all

        if(currentSlide == 4) {
            $('.results-1div').addClass('results-div-show');
            $('.results-2div').addClass('results-div-show');
            $('.results-3div').addClass('results-div-show');
            $('.results-super').addClass('results-div-show');
        }
    });




    //mobile menu 
    
    //open
    
    $('.burger-menu').click(function() {
        $('.overlay-blue').css('display', 'block');
        $('.mobile-menu_list').addClass('mobile-menu_list_show ');
        $('body, html').css('overflow','hidden');
        $(this).css('display','none');
        $('.mobile-header_mail').css('display','block');
    });
    
    $('.info-table').click(function() {
        $('.overlay-blue').css('display','block');
        $('.tournament-table_info').css('display','block');
        $('body,html').css('overflow','hidden');
    });
    
    //close
    
    $('.close-menu_button').click(function() {
        $('.overlay-blue').css('display', 'none');
        $('.mobile-menu_list').removeClass('mobile-menu_list_show');
        $('body,html').css('overflow','auto');
        $('.mobile-header_mail').css('display','none');
        $('.burger-menu').css('display','block');
    });
    
    $('.close-table_info').click(function() {
        $('.tournament-table_info').css('display','none');
        $('.overlay-blue').css('display','none');
        $('body,html').css('overflow','auto');
    });
    
    $('.overlay-blue').click(function() {
        $('.tournament-table_info').css('display','none');
        $('.overlay-blue').css('display','none');
        $('.mobile-menu_list').removeClass('mobile-menu_list_show');
        $('body,html').css('overflow','auto');
        $('.mobile-header_mail').css('display','none');
        $('.burger-menu').css('display','block');
    });
    
    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();
            $('.tournament-table_info').css('display','none');
            $('.overlay-blue').css('display','none');
            $('.mobile-menu').css('display','none');
            $('body,html').css('overflow','auto');
        }
     });

    //открытие блоков

    $('.player-block5 .player-showmore').click(function() {
        if($(this).hasClass('player-showmore_show')) {
            $(this).removeClass('player-showmore_show');
            $('.player-table_mobile').removeClass('player-table_mobile_show');
            $('.player-block6').removeClass('player-block6_show');
            $('.block2').removeClass('block2_show');
        } else {
            $(this).addClass('player-showmore_show');
            $('.player-table_mobile').addClass('player-table_mobile_show');
            $('.player-block6').addClass('player-block6_show');
            $('.block2').addClass('block2_show');
        }
    });

    $('.game-results .results-table_mobile .results-showmore').click(function() {
       $('.game-results .results-table_mobile .results-showmore').addClass('results-showmore_show');
    });


    //страница форм

    //стаж генерация дат
    
    for (i = 1900; i < 2019; i++) {
        $('#staz1').append($('<option>',
        {
            value: i + 'year',
            text: i,
        }));
    };

    //день рождения дни

    for(i = 10; i <= 31; i++) {
        $('#desc-day-1').append($('<option>',{
            value: i + 'day',
            text: i,
        }));
    };

    //день рождения месяцы

    for(var i = 10; i <= 12; i++) {
        $('#desc-month-1').append($('<option>', {
            value: i + 'month',
            text: i,
        }));
    };

    //день рождения годы

    for(var i = 1900; i < 2019; i++) {
        $('#desc-year-1').append($('<option>', {
            value: i + 'year',
            text: i,
        }));
    }

    //кнопка отправить в форме
    
    $('.accept').click(function() {
        if($('#accept').attr('checked')) {
            $('#accept').removeAttr('checked');
            $('.submit-big-form').attr('disabled','tue');
        } else {
            $('#accept').attr('checked','true');
            $('.submit-big-form').removeAttr('disabled');
        }
    });
    
    //state page директории
    
    $('.state-list_item p').click(function() {

        var parent = $(this).parent('.state-list_item');
        var inner = parent.find('.state-list_inner');
        var attr = $(this).attr('id');

        if (window.matchMedia("(max-width: 1024px)").matches) {
            $('.state-list_item').removeClass('state-show');
            $('.state-list_inner').removeClass('state-list_inner_show');
        }

        // $('.state-list_item').removeClass('state-show');
        // $('.state-list_inner').removeClass('state-list_inner_show');
        
        if(parent.hasClass('state-show')) {
            parent.removeClass('state-show');
            inner.removeClass('state-list_inner_show');



        } else {
            parent.addClass('state-show');
            inner.addClass('state-list_inner_show');

            if (window.matchMedia("(max-width: 1024px)").matches) {
                function timeOutMobile() {
                    var top = $('#'+attr).offset().top;
                    console.log(top);
                    $('body, html').scrollTop(top);
                };
                setTimeout(timeOutMobile, 500);
            }
        };
    });


    //сбрасывем поля капитана и зама

    $('.application .form-wrap button').click(function() {
        var a = $(this).next();
        console.log('lkolo');
        a.val('');
    });

    //открываем поле для др и меняем значение label

    $('.application-form').change(function() {

        function tel() {
            if ($('.name-input').val()) {
                $('.tel1-input').css('display', 'block');
                $('.tel1-input').addClass('animate-input');
            }
        };

        function birth() {
            if($('.tel-input').val()) {
                $('.birth-input').css('display','block');
                $('.birth-input').addClass('animate-input');

            }
        };

        function height() {
            var label = $('.birth-cont').find('label');
            var birthInput = $('.input-birth');

            birthInput.change(function() {
                var a = birthInput.val()
                label.text(a);
            });

            if($('.input-birth').val()) {
                $('.height-input, .number-input').css('display','block');
                $('.height-input, .number-input').addClass('animate-input');
            }
        };

        function number() {
            if($('.input-height').val() && $('.input-number').val()) {
               $('.amplua-input').css('display','block');
               $('.amplua-input').addClass('animate-input');
            };
        };

        function amplua() {
            $('.input-amplua').change(function() {
                $('.master-input').css('display','block');
                $('.master-input').addClass('animate-input');
            });
        };

        function master() {
            $('.input-master').change(function() {
                $('.staz-input').css('display','block');
                $('.staz-input').addClass('animate-input');
            });
        };

        function staz() {
            $('.input-staz').change(function() {
                $('.input-photo').css('display','block');
                $('.input-photo').addClass('animate-input');
            })
        }

        tel();
        birth();
        height();
        number();
        amplua();
        master();
        staz();
    });

    //календари

    //index page

    //init
    //main
    $('.calendar-main').datepicker($.datepicker.regional[ "ru" ] );
    //teams-page
    $('.calendar-team-page_mob').datepicker($.datepicker.regional[ "ru" ] );
    $('.calendar-team-page_desc').datepicker($.datepicker.regional["ru"]);
    //timetable
    $('.timetable-calendar-desc').datepicker($.datepicker.regional[ "ru" ]);
    $('.timetable-calendar-mob').datepicker($.datepicker.regional["ru"]);


    //toogle month

    $('.datepicker-list .date-item').click(function() {
        $('.datepicker-list .date-item').removeClass('date-item-select');
        $(this).addClass('date-item-select');

        if($(this).hasClass('first-month')) {
            $('.calendar-main').datepicker('setDate', '10/12/2012');
        } else if($(this).hasClass('second-month')) {
            $('.calendar-main').datepicker('setDate', '01/12/2017');
        } else if($(this).hasClass('third-month')) {
            $('.calendar-main').datepicker('setDate', '01/01/2018');
        }
    });


    //выделение дат в календаре

    //объвления. передаём нужное свойство в нужное условие. для теста пока одно

    var alerts = {
        blue1: '1/2 финала / Зенит-Казань',
        red1: 'Финал / Зенит-Казань',
    }

    //main page

    if($('section').hasClass('block3')) {

        var datesMain = $('.block3 .ui-datepicker-calendar').find('td a');

        //синее объявление
        var blueSelect = datesMain[4];
        blueSelect.classList.add('custom-blue');


        //красное объявление
        var redSelect = datesMain[20];
        redSelect.classList.add('custom-red');

        $('.custom-blue').append('<div class="blue-alert">' + alerts.blue1 + '</div>');
        $('.custom-red').append('<div class="red-alert">' + alerts.red1 + '</div>');
    };
    //teams-page

    if($('section').hasClass('team-page')) {


        var datesTeam = $('.upcoming-inner .calendar-team-page_desc').find('td a');
        var datesTeamMob = $(' .calendar-team-page_mob').find('td a');

        var blueSelectTeam = datesTeam[6];
        blueSelectTeam.classList.add('custom-blue');

        var blueSelectTeamMob = datesTeamMob[6];
        blueSelectTeamMob.classList.add('custom-blue');

        var redSelectTeam = datesTeam[1];
        redSelectTeam.classList.add('custom-red');

        var redSelectTeamMob = datesTeamMob[1];
        redSelectTeamMob.classList.add('custom-red');

        $('.custom-blue').append('<div class="blue-alert">' + alerts.blue1 + '</div>');
        $('.custom-red').append('<div class="red-alert">' + alerts.red1 + '</div>');
    };

    //timetable page

    if($('section').hasClass('timetable')) {
        console.log('lolo')

        var datesTime = $('.timetable-desctop .timetable-calendar-desc').find('td a');
        var datesTimeMob = $('.timetable .timetable-calendar-mob').find('td a');

        var blueSelectTime = datesTime[17];
        blueSelectTime.classList.add('custom-blue');

        var blueSelectTimeMob = datesTimeMob[17];
        blueSelectTimeMob.classList.add('custom-blue');

        var redSelectTime = datesTime[9];
        redSelectTime.classList.add('custom-red');

        var redSelectTimeMob = datesTimeMob[9];
        redSelectTimeMob.classList.add('custom-red');

        $('.custom-blue').append('<div class="blue-alert">' + alerts.blue1 + '</div>');
        $('.custom-red').append('<div class="red-alert">' + alerts.red1 + '</div>');
    };




    //wheels
    //количество скриптов/пременных на слайчай большого количества колёс на сайте
    
    var duration1 = 1/Number($('.yellow1').text())*200000;
    var duration2 = 1/Number($('.green1').text())*200000;
    var duration3 = 1/Number($('.red1').text())*200000;
    var duration4 = 1/Number($('.blue1').text())*200000;

    
    $('.wheel1').css('animation-duration',duration1 + 'ms');
    
    $('.wheel2').css('animation-duration',duration2 + 'ms');
    
    $('.wheel3').css('animation-duration',duration3 + 'ms');
    
    $('.wheel4').css('animation-duration',duration4 + 'ms');

    var duration12 = 1/Number($('.yellow12').text())*200000;
    var duration22 = 1/Number($('.green12').text())*200000;
    var duration32 = 1/Number($('.red12').text())*200000;
    var duration42 = 1/Number($('.blue12').text())*200000;


    $('.wheel12').css('animation-duration',duration12 + 'ms');

    $('.wheel22').css('animation-duration',duration22 + 'ms');

    $('.wheel32').css('animation-duration',duration32 + 'ms');

    $('.wheel42').css('animation-duration',duration42 + 'ms');

    var duration5 = 1/Number($('.yellow2').text())*200000;
    var duration6 = 1/Number($('.green2').text())*200000;
    var duration7 = 1/Number($('.red2').text())*200000;
    var duration8 = 1/Number($('.blue2').text())*200000;


    $('.wheel5').css('animation-duration',duration1 + 'ms');

    $('.wheel6').css('animation-duration',duration2 + 'ms');

    $('.wheel7').css('animation-duration',duration3 + 'ms');

    $('.wheel8').css('animation-duration',duration4 + 'ms');

    var duration13 = 1/Number($('.yellow13').text())*200000;
    var duration23 = 1/Number($('.green13').text())*200000;
    var duration33 = 1/Number($('.red13').text())*200000;
    var duration43 = 1/Number($('.blue13').text())*200000;


    $('.wheel13').css('animation-duration',duration13 + 'ms');

    $('.wheel23').css('animation-duration',duration23 + 'ms');

    $('.wheel33').css('animation-duration',duration33 + 'ms');

    $('.wheel43').css('animation-duration',duration43 + 'ms');

    var duration14 = 1/Number($('.yellow14').text())*200000;
    var duration24 = 1/Number($('.green14').text())*200000;
    var duration34 = 1/Number($('.red14').text())*200000;
    var duration44 = 1/Number($('.blue14').text())*200000;


    $('.wheel14').css('animation-duration',duration14 + 'ms');

    $('.wheel24').css('animation-duration',duration24 + 'ms');

    $('.wheel34').css('animation-duration',duration34 + 'ms');

    $('.wheel44').css('animation-duration',duration44 + 'ms');

    var duration15 = 1/Number($('.yellow15').text())*200000;
    var duration25 = 1/Number($('.green15').text())*200000;
    var duration35 = 1/Number($('.red15').text())*200000;
    var duration45 = 1/Number($('.blue15').text())*200000;


    $('.wheel15').css('animation-duration',duration15 + 'ms');

    $('.wheel25').css('animation-duration',duration25 + 'ms');

    $('.wheel35').css('animation-duration',duration35 + 'ms');

    $('.wheel45').css('animation-duration',duration45 + 'ms');


});





//console.log(firstColor);