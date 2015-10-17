"use strict";angular.module("angularClient",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","modNavbar"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",navitem:!0,controller:!1,name:"home"}).otherwise({redirectTo:"/home"})}]),angular.module("angularClient").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularClient").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("modNavbar",[]).directive("navbar",function(){return{restrict:"AE",templateUrl:"views/navbar.html"}}),angular.module("angularClient").run(["$templateCache",function(a){a.put("views/features.html",'<section class="feature generic" id="menu-video"> <div class="container"> <div class="row"> <div class="col-md-8"> <div class="video"> <div class="fluid-width-video-wrapper" style="padding-top: 56.6667%"> <iframe src="http://player.vimeo.com/video/4240369?title=0&amp;byline=0&amp;portrait=0" allowfullscreen id="fitvid695897"></iframe> </div> </div> </div> <div class="col-md-4"> <h1>School Building Video Tour</h1> <p>Nulla ornare tortor quis rhoncus vulputate. Vivamus a enim vel erat accumsan hendrerit. Nulla ornare tortor quis rhoncus vulputate. Vivamus a enim vel erat accumsan hendrerit.</p> <ul> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Nulla ornare tortor quis rhoncus vulputate.</a> </li> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Vivamus a enim vel erat accumsan hendrerit. </a> </li> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Nulla ornare tortor quis rhoncus vulputate.</a> </li> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Retina Display for Mobile HD Devices.</a> </li> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Vivamus asan 12,000 happy costumers.</a> </li> </ul> </div> </div> </div> </section>'),a.put("views/home.html",'<section id="menu-home" class="animated fadeInUp delay2"> <div class="jumbotron"> <div class="container"> <div class="row text-center"> <h1>The future of the language exchange </h1> <h1>is waiting for you</h1> <h2>Language exchange whenever you want about whatever you want.</h2> <button class="btn btn-danger btn-lg"> <i class="icon-gplus"></i>&nbsp Sign in with Google</button> </div> </div> </div> <div class="home-container home container"> <div class="row"> <div class="col-md-4 text-center item"> <i class="icon-group"></i> <h3> Software Engineering</h3> <p> Nulla ornare tortor quis rhoncus vulputate. Vivamus a enim vel erat. </p> </div> <div class="col-md-4 text-center item"> <i class="icon-laptop"></i> <h3>Analytical Chemistry</h3> <p> Nulla ornare tortor quis rhoncus vulputate. Vivamus a enim vel erat. </p> </div> <div class="col-md-4 text-center item"> <i class="icon-emo-thumbsup"></i> <h3>Graphic Designer</h3> <p> Nulla ornare tortor quis rhoncus vulputate. Vivamus a enim vel erat. </p> </div> </div> </div> </section> <section id="menu-feature" class="feature generic"> <div class="container"> <div class="row"> <div class="col-md-5"> <h1>Features of Linguita</h1> <p>Nulla ornare tortor quis rhoncus vulputate. Vivamus a enim vel erat accumsan hendrerit. Nulla ornare tortor quis rhoncus vulputate.</p> <ul> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Nulla ornare tortor quis rhoncus vulputate.</a> </li> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Vivamus a enim vel erat accumsan hendrerit. </a> </li> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Nulla ornare tortor quis rhoncus vulputate.</a> </li> <li> <a href="#"> <i class="glyphicon glyphicon-ok"></i>Retina Display for Mobile HD Devices.</a> </li> </ul> </div> <div class="col-md-7"> <div class="video"> <iframe width="480" height="311" src="http://www.powtoon.com/embed/fjcHTPIUuOh/" frameborder="0"></iframe> </div> </div> </div> </div> </section>'),a.put("views/more.html","more"),a.put("views/navbar.html",'<header class="navbar-fixed-top animated fadeInDown delay1"> <div class="container"> <div class="row"> <div class="navbar navbar-default"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a id="logo" class="navbar-brand" href="./"><img src="./images/icon-linguita.f3f8f895.png" height="60px" width="80" alt="Linguita"></a> </div> <div class="navbar-collapse collapse navbar-right"> <ul class="nav navbar-nav"> <li><a href="#menu-home">Home</a></li> <li><a href="#menu-feature">Features</a></li> <li><a href="#menu-more">More</a></li> </ul> </div> </div> </div> </div> </header>')}]);