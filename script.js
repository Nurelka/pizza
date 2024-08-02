// OWL SLIDER
$(function(){
    const nexticon = '<i class="fa-solid fa-chevron-right"></i>'
    const previcon = '<i class="fa-solid fa-chevron-left"></i>'
    $('.home-slider-1').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        navText:[previcon,nexticon],
        dots:false,
        items:4,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:2,
                nav:true,
                loop:true,
               
            },
            600:{
                items:3,
                nav:true,
                loop:true,
            },
            1000:{
                items:4,
                nav:true,
                loop:true,
            }
        }
    });
    
    
    });
    
    
    
    
    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        responsiveClass:true,
        nav:false,
      autoplay:true,
      autoplayTimeout:3000,
    })
    
    // preloader
    $(window).on('load',function(){
        $('.preloader').delay(2000).fadeOut(500);
    });
    
    
    
    
    
    // MENU PRODUCTS
    $('.btnProduct').click(function(){
        $('.btnProduct').removeClass('active');
        $(this).addClass('active');
    })
    
    $('.all').click(function(){
        $('.iki').removeClass('app');
        $('.bir').removeClass('app');
        $('.uc').removeClass('app');
        $('.dord').removeClass('app');
        $('.bes').removeClass('app');
        $('.alti').removeClass('app');
        $('.yeddi').removeClass('app');
        $('.sekkiz').removeClass('app');
    })
    
    $('.drink').click(function(){
        $('.bir').addClass('app');
        $('.uc').addClass('app');
        $('.dord').addClass('app');
        $('.bes').addClass('app');
        $('.alti').addClass('app');
        $('.yeddi').addClass('app');
        $('.sekkiz').addClass('app');
        $('.iki').removeClass('app');
    
    })
    
    $('.salad').click(function(){
        $('.bir').addClass('app');
        $('.iki').addClass('app');
        $('.dord').addClass('app');
        $('.bes').addClass('app');
        $('.alti').addClass('app');
        $('.yeddi').addClass('app');
        $('.uc').removeClass('app');
        $('.sekkiz').addClass('app');
    })
    
    $('.pasta').click(function(){
        $('.bir').addClass('app');
        $('.iki').addClass('app');
        $('.uc').addClass('app');
        $('.dord').removeClass('app');
        $('.bes').addClass('app');
        $('.alti').addClass('app');
        $('.yeddi').addClass('app');
        $('.sekkiz').addClass('app');
    })
    
    $('.burger').click(function(){
        $('.bir').addClass('app');
        $('.iki').addClass('app');
        $('.dord').removeClass('app');
        $('.bes').addClass('app');
        $('.alti').addClass('app');
        $('.yeddi').removeClass('app');
        $('.uc').removeClass('app');
        $('.sekkiz').removeClass('app');
    })
    
    $('.desert').click(function(){
        $('.iki').removeClass('app');
        $('.bir').addClass('app');
        $('.uc').addClass('app');
        $('.dord').addClass('app');
        $('.bes').removeClass('app');
        $('.alti').addClass('app');
        $('.yeddi').addClass('app');
        $('.sekkiz').addClass('app');
    })
    
    $('.pizza').click(function(){
        $('.iki').removeClass('app');
        $('.bir').removeClass('app');
        $('.uc').addClass('app');
        $('.dord').removeClass('app');
        $('.bes').addClass('app');
        $('.alti').addClass('app');
        $('.yeddi').addClass('app');
        $('.sekkiz').addClass('app');
        
    })
    
    // SWIPER SLIDER
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:true,
      autoplayTimeout:2000,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
      });
    
    
      TweenMax.from(".img1",.5, {
        // opacity: 0,
        y: -420,
        ease: Power3.ease,
        delay:.5,
      }, 0.02
      )
    
      TweenMax.from(".img2",1, {
        // opacity: 0,
        y: -620,
        ease: Power3.ease,
        delay:.3,
      }, 0.04
      )
    
      TweenMax.from(".img3",1, {
        // opacity: 0,
        y: -620,
        ease: Power3.ease,
        delay:.4,
      }, 0.03
      )
      TweenMax.from(".img4",.4, {
        // opacity: 0,
        y: -620,
        ease: Power3.ease,
        delay:.4,
      }, 0.03
      )
    
      TweenMax.from(".two",1, {
        opacity: 0,
        x: 320,
        ease: Power3.ease,
        delay:.6,
      }, 0.03
      )
    // 

    
    class Contact {
      constructor(first, last, phone, email, address) {
        this.firstName = first;
        this.lastName = last;
        this.phoneNumber = phone;
        this.emailAddress = email;
        this.address = address;
      }
    
      fullName() {
        return this.firstName + " " + this.lastName;
      }
    }
    
    class Pizza {
      constructor(size, quantity, crust, orderType) {
        this.size = size;
        this.quantity = quantity;
        this.crust = crust;
        this.orderType = orderType;
      }
    
      total(price) {
        return price * this.quantity;
      }
    }
    
    var img = "./IMAGES/barbecuechicken.png";
    
    var pizzas = [
      { name: "Barbecue chicken", id: "barbeque", img: img, price: 700 },
      { name: "Hawaiian", id: "hawaiian", img: img, price: 750 },
      { name: "Veggie pizza", id: "veggie", img: img, price: 650 },
      { name: "Meat deluxe", id: "deluxe", img: img, price: 800 },
      { name: "Periperi chicken", id: "periperi", img: img, price: 700 },
      { name: "Pepporoni", id: "pepporoni", img: img, price: 750 },
    ];
    
    var pizzaPrice;
    var pizzaName;
    
    // Loops over each pizza and adds image to modal
    pizzas.forEach(function (pizza) {
      $("#" + pizza.id + "-btn").click(function () {
        $("#pizza-img").prepend("<img src=" + pizza.img + " id=" + pizza.id + ">");
    
        $("#pizza-name").prepend("<h2 id=pepporoni-title>" + pizza.name + "</h2>");
    
        $("#initial-price-pre-text").append(
          '<h2 id="initial-price-text"> Ksh. ' + pizza.price + "</h2>"
        );
    
        pizzaPrice = pizza.price;
        pizzaName = pizza.name;
      });
      $("#exampleModal").on("hidden.bs.modal", function () {
        $("#" + pizza.id).remove();
    
        $("#" + pizza.id + "-title").remove();
    
        $("#initial-price-text").remove();
      });
    });
    
    $("#calculate").click(function(){
        $(".title").show();
    });
    
    $("form").submit(function(event){
        event.preventDefault();
    
        var size = $("input:radio[name=size]:checked").val();
        var crust = $("#select-crust").val();
        var quantity = $("#quantity").val();
        var orderType = $("#order-type").val();
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var emailAddress = $("#email-address").val();
        var phoneNumber = $("#phone").val();
        var county = $("#county").val();
        var address = $("#address").val();
    
        var newName = new Contact(firstName, lastName, phoneNumber, emailAddress, address);
    
        var newPizza = new Pizza(size, quantity, crust, orderType);
    
        var deliveryFee = 250;
    
        // var newAddress = new Address(county, address);
    
        // newName.address.push(newAddress);
    
        // alert(newPizza.orderType);
    
        // ### LARGE ###
        // dine
        if (newPizza.size === "large" && newPizza.crust === "cryspy" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300));
        }else if (newPizza.size === "large" && newPizza.crust === "stuffed" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 100));
        }else if (newPizza.size === "large" && newPizza.crust === "gluten-free" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 200));
        }
    
        // delivery
        if (newPizza.size === "large" && newPizza.crust === "cryspy" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + deliveryFee));
        }else if (newPizza.size === "large" && newPizza.crust === "stuffed" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 100 + deliveryFee));
        }else if (newPizza.size === "large" && newPizza.crust === "gluten-free" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 200 + deliveryFee));
        }
    
    
        // ### MEDIUM ###
        // dine
        if (newPizza.size === "medium" && newPizza.crust === "cryspy" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150));
        }else if (newPizza.size === "medium" && newPizza.crust === "stuffed" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 100));
        }else if (newPizza.size === "medium" && newPizza.crust === "gluten-free" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 150));
        }
    
        // delivery
        if (newPizza.size === "medium" && newPizza.crust === "cryspy" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + deliveryFee));
        }else if (newPizza.size === "medium" && newPizza.crust === "stuffed" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 100 + deliveryFee));
        }else if (newPizza.size === "medium" && newPizza.crust === "gluten-free" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 150 + deliveryFee));
        }
        // ### SMALL ###
        // dine
        else if (newPizza.size === "small" && newPizza.crust === "cryspy" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice));
        }else if (newPizza.size === "small" && newPizza.crust === "stuffed" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 50));
        }else if (newPizza.size === "small" && newPizza.crust === "gluten-free" && newPizza.orderType === "dine"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 100));
        }
    
        // delivery
        else if (newPizza.size === "small" && newPizza.crust === "cryspy" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + deliveryFee));
        }else if (newPizza.size === "small" && newPizza.crust === "stuffed" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 50 + deliveryFee));
        }else if (newPizza.size === "small" && newPizza.crust === "gluten-free" && newPizza.orderType === "delivery"){
            $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 100 + deliveryFee));
        }
    
        
    
        $("#checkout").click(function(){
            $("#submission").css("display", "block");
            prompt('where should we send your pizza?')
        });
    
        if (orderType === "dine"){
            deliveryFee = 0; 
        }else if (orderType === "delivery"){
            deliveryFee = 250
        }
    
        $("#order-summary").text("Order Summary");
        $("#name-summary").text(newName.fullName());
        $("#email-summary").text(newName.emailAddress);
        $("#phone-summary").text(newName.phoneNumber);
        $("#address-summary").text(newName.address);
        $("#pizza-name-summary").text(pizzaName + ", " + newPizza.crust);
        $("#quantity-summary").text(newPizza.quantity + ", " + newPizza.size + ",  Delivery Charges: " + deliveryFee);
    });
  
  
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    
    // header container
    ScrollReveal().reveal(".header__container h1", scrollRevealOption);
    
    ScrollReveal().reveal(".header__container h4", {
      ...scrollRevealOption,
      delay: 500,
    });
    
    ScrollReveal().reveal(".header__container .btn", {
      ...scrollRevealOption,
      delay: 1000,
    });
    
    // about container
    ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
    ScrollReveal().reveal(".about__container .section__subheader", {
      ...scrollRevealOption,
      delay: 500,
    });
    
    ScrollReveal().reveal(".about__container .about__flex", {
      ...scrollRevealOption,
      delay: 1000,
    });
    
    ScrollReveal().reveal(".about__container .btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
    
    // discover container
    ScrollReveal().reveal(".discover__card", {
      ...scrollRevealOption,
      interval: 500,
    });
    
    ScrollReveal().reveal(".discover__card__content", {
      ...scrollRevealOption,
      interval: 500,
      delay: 200,
    });
    
    // blogs container
    ScrollReveal().reveal(".blogs__card", {
      duration: 1000,
      interval: 400,
    });
    
    // journals container
    ScrollReveal().reveal(".journals__card", {
      ...scrollRevealOption,
      interval: 400,
    });

    
  
   
  