$(function(){
  var $mainMenuItems = $("#main-menu ul").children("li"), // capter tous les li de main-menu
      totalMainMenuItems = $mainMenuItems.length, // nombre d'éléments dans main-menu
      openedIndex = 2,

      init = function(){
        bindEvents();
        if(validIndex(openedIndex)){
          animateItem($mainMenuItems.eq(openedIndex), true, 700)
        }
      },
      bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
          var newIndex = $(this).parent().index();
          checkAndAnimateItem(newIndex);
        });
        /* utiliser la class hovered de css */
        $(".button").hover(
          function(){
          $(this).addClass("hovered");
          },
          function(){
          $(this).removeClass("hovered");
          }
        );
        /* quand on clique sur chaque button */
        $(".button").click(function(){
          var newIndex = $(this).index();
          checkAndAnimateItem(newIndex);
        });
      },
      validIndex = function(indexToCheck) {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
      },
      animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width:"420px"}: {width:"140px"}, // ici on pose la question à toOpen si c'est vraie le width =420px sinon width=140px.
        colorImageParam = toOpen ? {left:"0px"}: {left:"140px"};
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam, speed);
      },
      checkAndAnimateItem = function(indexToCheckAndAnimate) {
        if (openedIndex === indexToCheckAndAnimate) {
          animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
          openedIndex = -1;
        }
        else {
          if (validIndex(indexToCheckAndAnimate)) {
            animateItem($mainMenuItems.eq(openedIndex), false, 250);
            openedIndex = indexToCheckAndAnimate ;
            animateItem($mainMenuItems.eq(openedIndex), true, 250);
          }
        }
      };

      init(); //pour lancer notre fonction
});
