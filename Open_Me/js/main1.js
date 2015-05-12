var flip = false;
var contentt = $('.content');
var sub1 = $('.sub-content1');
var sub2 = $('.sub-content2');
var sub3 = $('.sub-content3');
var sub4 = $('.sub-content4');

var booleans = [false, false, false,false, false, false,false, false, false, false, false, false,false,false,false,false,false,false,false];
var randomSize = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
var aka = $('.aka');
var astronaut = $('.astronaut');
var binary = $('.binary');
var blacknwhite = $('.blacknwhite');
var category = $('.category');
var digital = $('.digital');
var high5 = $('.high5');
var boyfriend = $('.boyfriend');
var email = $('.email');
var question = $('.question');

//portfolio elements
var works_aka = $('.works_aka');
var works_astronaut = $('.works_astronaut');
var works_binary = $('.works_binary');
var works_blacknwhite = $('.works_blacknwhite');
var works_boyfriend = $('.works_boyfriend');
var works_category = $('.works_category');
var works_digital = $('.works_digital');
var works_email = $('.works_email');
var works_high5= $('.works_high5');
var works_question = $('.works_question');

var randomnum = 0;

/////////----------↓ the example from JQUERY TERMINAL-------////////////////
/////////----------http://terminal.jcubic.pl/-------/////////////////////////////



String.prototype.strip = function(char) {
    return this.replace(new RegExp("^" + char + "*"), '').
        replace(new RegExp(char + "*$"), '');
}


$.extend_if_has = function(desc, source, array) {
    for (var i=array.length;i--;) {
        if (typeof source[array[i]] != 'undefined') {
            desc[array[i]] = source[array[i]];
        }
    }
    return desc;
};


(function($) {
    $.fn.tilda = function(eval, options) {
        if ($('body').data('tilda')) {
            return $('body').data('tilda').terminal;

        }
        this.addClass('tilda');
        options = options || {};
        eval = eval || function(command, term) {
            term.echo("you don't set eval for tilda");
        };
        var settings = {
            prompt: '> ',
            name: 'tilda',
            height: 100,
            enabled: false,
   greetings: "Welcome to Nico's world. \nType words to navigate.",

            //this function is activated when tilda is typed
            keypress: function(e) {
                booleans[0] = true;
                if (e.which == 96) {
                    return false;
                }
            }
            //this function is activated when tilda is typed
        };
        if (options) {
            $.extend(settings, options);
        }
        this.append('<div class="td">Hi</div>');
        var self = this;
        self.terminal = this.find('.td').terminal(eval, settings);
        var focus = false;
        $(document.documentElement).keypress(function(e) {
            if (e.which == 96) {
                self.slideToggle('fast');
                self.terminal.focus(focus = !focus);
                self.terminal.attr({
                    scrollTop: self.terminal.attr("scrollHeight")
                });
            }
        });
        $('body').data('tilda', this);
        this.hide();
        return self;
    };
})(jQuery);

/////////----------↑ example from JQUERY TERMINAL-------////////////////
/////////----------http://terminal.jcubic.pl/-------/////////////////////////////


//--------------------------------------------------------------------------

update();

fonts();
clicky();

function update(){
  myCode01();
requestAnimationFrame(update);
}

//--------------------------------------------------------------------------
jQuery(document).ready(function($) {
    $('#tilda').tilda(function(command, term) {
      booleans[17]=true;
    if(command == 'aka'){
      booleans[1]=true;
                    randomness_aka();
      term.push(function(command, term){

              if(command =='back'){
                booleans[1]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});
    }else if (command =='astronaut'){

              booleans[2]=true;
                            randomness_astro();
      term.push(function(command, term){
              if(command =='back'){
                booleans[2]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }
    else if (command == 'binary'){


              booleans[3]=true;
                            randomness_binary();
      term.push(function(command, term){
              if(command =='back'){
                booleans[3]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if(command == 'blacknwhite'){

              booleans[4]=true;
                              randomness_blacknwhite();
      term.push(function(command, term){
              if(command =='back'){
                booleans[4]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'boyfriend'){

              booleans[5]=true;
              randomness_boyfriend();
      term.push(function(command, term){
              if(command =='back'){
                booleans[5]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'category'){

              booleans[6]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[6]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'digital'){
              randomness_digital();
              booleans[7]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[7]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'email' || command == 'email!'){

              booleans[8]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[8]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'high5'){

              booleans[11]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[11]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'fortunecookie'){

              booleans[13]=true;
      term.push(function(command, term){

              if(command =='back'){
                booleans[14]=false;
                booleans[13]=false;
                booleans[17]=false;
                $('.question_description').html('Type any words.');
                term.pop();
              }else if (command != 'back'){
                booleans[14]=true;
  if(randomnum === 1){
  term.echo('I love you.');
}else if(randomnum === 2){
  term.echo("Plants need water!");
}else if(randomnum === 3){
  term.echo("Lets kidnap all the skinny people and have a fat day.");
}else if(randomnum === 4){
  term.echo("It is rediculous that we have to study to be functional to the society.");
}else if(randomnum === 5){
  term.echo("Flowers die when summer is over.");
}else if(randomnum === 6){
  term.echo("If only you wear a pair of purple jeans.");
}else if(randomnum === 7){
  term.echo("Fun Fact: fortune cookie is made in a fortune cookie factory.");
}else if(randomnum === 0){
  term.echo("Wait till one day Americanization takes over the world, my Chinese heart will die.");
}else if(randomnum === 8){
  term.echo("If you love someone you should set them on fire.");
}else if(randomnum === 9){
  term.echo("Horrible things in the world compare to the remedy of it is like Fat legs compare to a pair of skinny jeans.");
}else if(randomnum === 10){
  term.echo("As you go through life make this your goal: watch the donut not the hole.");
}else if(randomnum === 11){
  term.echo("The word 'factory' indicates that people need to be bored.");
}else if(randomnum === 12){
  term.echo("I'm glad you love my website [heart].");
}
      console.log(randomnum);
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }
   //if users type something that you don't understand
    else
    {
      booleans[17]=false;
      term.echo("Sorry, I don't understand  '" + command + "'");
    }
  });
});

//--------------------------------------------------------------------------



//simulating the DRAW function in processing
function myCode01(){
  //booleans[0] indicates if terminal is opened or not

  //all portfolio elements are supposed to hide at first
  works_aka.hide();
  works_astronaut.hide();
  works_binary.hide();
  works_blacknwhite.hide();
  works_boyfriend.hide();
  works_category.hide();
  works_digital.hide();
  works_email.hide();
  works_high5.hide();
  works_question.hide();

    //when terminal is opened
if (booleans[0]===true){
   sub1.hide();
   sub4.hide();
   sub2.show();
   sub3.show();

      //when sub directory is entered
      if (booleans[17]===true){
            sub2.hide();
            sub3.hide();
            sub4.show();
      }
      //when gets out of sub directory
      else{
        sub1.hide();
        sub4.hide();
        sub2.show();
        sub3.show();
      }


              //class-------Aka
              //0 and 1 are true
              if (booleans[1]===true){
                  works_aka.toggle();
              }else{
              }
              //class-------astronaut
              //0 and 2 are true
              if (booleans[2]===true){
                   works_astronaut.toggle();
              }else{
              }

              if (booleans[3]===true){
                   works_binary.toggle();
              }else{
              }

              if (booleans[4]===true){
                   works_blacknwhite.toggle();
              }else{
              }

              if (booleans[5]===true){
                    works_boyfriend.toggle();
              }else{
              }

              if (booleans[6]===true){
                   works_category.toggle();
              }else{
              }

              if (booleans[7]===true){
                   works_digital.toggle();
              }else{
              }
              if (booleans[8]===true){
                   works_email.toggle();
              }else{
              }

              if (booleans[11]===true){
                   works_high5.toggle();
              }else{
              }

              if (booleans[13]===true){
                works_question.toggle();
              }

              if(booleans[14]===true){
                randomnum = getRandomInt(0, 12);
              }

//when terminal is closed
    }else if (booleans[0]===false){
        sub1.show();
        sub2.hide();
        sub3.hide();
        sub4.hide();
    }
}

function clicky(){
  $('.aka_imgs').click(function() {
  window.open("https://www.youtube.com/watch?v=WQi7eaPdt20");
});


  $('.geometryclass').click(function(){
    $('.geometry_description').toggleClass('is-hidden');
  });

  $('.galaxyclass').click(function(){
    $('.galaxy_description').toggleClass('is-hidden');
  });

  $('.high5_1').click(function(){
    $('.high5_2').toggleClass('is-hidden');
    $('.high5_3').toggleClass('is-hidden');
  })

  $('.high5_2').click(function(){
    $('.high5_schematic').toggleClass('is-hidden');
  })

  $('.high5_3').click(function(){
    $('.high5_workinprocess').toggleClass('is-hidden');
  })

}

function randomness_aka(){
    for (var i = randomSize.length - 1; i >= 0; i--) {
        randomSize[i] = getRandomInt(30, 100);
    };
    $('.aka1').css("padding-left",randomSize[0]);
    $('.aka1').css("padding-top", randomSize[4]);
    $('.aka2').css("padding-left",randomSize[1]);
    $('.aka2').css("padding-top", randomSize[5]);
    $('.aka3').css("padding-left",randomSize[2]);
    $('.aka3').css("padding-top", randomSize[6]);
    $('.aka4').css("padding-left",randomSize[3]);
    $('.aka4').css("padding-top", randomSize[7]);
}

function randomness_astro(){
for (var i = randomSize.length - 1; i >= 0; i--) {
    randomSize[i] = getRandomInt(10, 40);
};
$('.astronaut1').css("padding-left", randomSize[0]);
$('.astronaut2').css("padding-left", randomSize[1]);
$('.astronaut3').css("padding-left", randomSize[2]);
$('.astronaut4').css("padding-left", randomSize[3]);
$('.astronaut5').css("padding-left", randomSize[4]);
$('.astronaut6').css("padding-left", randomSize[5]);
$('.astronaut7').css("padding-left", randomSize[6]);
$('.astronaut1').css("padding-top", randomSize[7]);
$('.astronaut2').css("padding-top", randomSize[8]);
$('.astronaut3').css("padding-top", randomSize[9]);
$('.astronaut4').css("padding-top", randomSize[10]);
$('.astronaut5').css("padding-top", randomSize[11]);
$('.astronaut6').css("padding-top", randomSize[12]);
$('.astronaut7').css("padding-top", randomSize[13]);
}

function randomness_binary(){
    for (var i = randomSize.length - 1; i >= 0; i--) {
        randomSize[i] = getRandomInt(13, 60);
    };
$('.binarySketches1').css("margin-left", randomSize[0]);
$('.binarySketches2').css("margin-left", randomSize[1]);
$('.geometryy').css("margin-left", randomSize[2]);
$('.video1').css("margin-left", randomSize[3]);
$('.video2').css("margin-left", randomSize[4]);
$('.binarySketches1').css("margin-top", randomSize[5]);
$('.binarySketches2').css("margin-top", randomSize[6]);
$('.geometryy').css("margin-top", randomSize[7]);
$('.video1').css("margin-top", randomSize[8]);
$('.video2').css("margin-top", randomSize[9]);
$('.clockk').css("margin-left", randomSize[10]);
$('.clockk').css("margin-left", randomSize[11]);
}

function randomness_blacknwhite(){
    for (var i = randomSize.length - 1; i >= 0; i--) {
        randomSize[i] = getRandomInt(30, 80);
$('.blacknwhite1').css("padding-left", randomSize[0]);
$('.blacknwhite1').css("padding-top", randomSize[1]);
$('.blacknwhite2').css("padding-left", randomSize[2]);
$('.blacknwhite2').css("padding-top", randomSize[3]);
$('.blacknwhite3').css("padding-left", randomSize[4]);
$('.blacknwhite3').css("padding-top", randomSize[5]);
$('.blacknwhite4').css("padding-left", randomSize[6]);
$('.blacknwhite4').css("padding-top", randomSize[7]);
    };
}

function randomness_boyfriend(){
  var rbf = getRandomInt(0, 2);
  if(rbf === 0){
    $('.boyfriend1').show();
    $('.boyfriend2').hide();
    $('.boyfriend3').hide();
  }else if (rbf === 1){
    $('.boyfriend1').hide();
    $('.boyfriend2').show();
    $('.boyfriend3').hide();
  }else if (rbf === 2){
    $('.boyfriend1').hide();
    $('.boyfriend2').hide();
    $('.boyfriend3').show();
  }
  console.log(rbf);
}

function randomness_digital(){
    for (var i = randomSize.length - 1; i >= 0; i--) {
        randomSize[i] = getRandomInt(30, 80);
$('.digital1').css("padding-left", randomSize[0]);
$('.digital1').css("padding-top", randomSize[1]);
$('.digital2').css("padding-left", randomSize[2]);
$('.digital2').css("padding-top", randomSize[3]);
$('.digital3').css("padding-left", randomSize[4]);
$('.digital3').css("padding-top", randomSize[5]);
$('.digital4').css("padding-left", randomSize[6]);
$('.digital4').css("padding-top", randomSize[7]);
$('.digital5').css("padding-left", randomSize[8]);
$('.digital5').css("padding-top", randomSize[9]);
    };
}

function fonts(){
    for (var i = randomSize.length - 1; i >= 0; i--) {
      randomSize[i] = getRandomInt(10, 30);
      console.log(randomSize[i]);
    };
   aka.css("font-size",randomSize[0]);
   astronaut.css("font-size",randomSize[1]);
   binary.css("font-size",randomSize[2]);
   blacknwhite.css("font-size",randomSize[3]);
   category.css("font-size",randomSize[4]);
   digital.css("font-size",randomSize[5]);
   high5.css("font-size",randomSize[8]);
   question.css("font-size",randomSize[9]);
}

//great function found on stackoverflow
function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}