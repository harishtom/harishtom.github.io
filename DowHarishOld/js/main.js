// configuration Settings for BYOS
var config = {
  baseURL: "https://api.getcloudcherry.com",
  SuveyToken: "DW-285849", //Pass survey token here created using Postman", //Pass survey token here created using Postman
  securityPassphrase: "Dowcxpoc2020", //Pass security Passphrase used during survey token creation
  groupQuestion: "Please rate your experience with :",
  throttling: true, // Should be in boolean, whether throttling is required or not.
  throttlingTime: 72, //should be in integer, denotes "Hour"
  throttlingSubmitButton: false, // Should be in boolean,
  throttlingMessage: "Thank you for using Webex Meetings.",

  responses: [
    {
      id: "text1",
      questionId: "5f99dc1fb306af17407d2c5e",
      questionText:
        "Overall, please rate your Webex Meeting Experience",
      questionType: "Number",
      valueid: "smile-ratings",
    },
    {
      id: "text2",
      questionId: "5f99dc3fb306af17407d2c61",
      questionText: "Hosting/Joining the meeting",
      questionType: "Number",
      valueid: "starRatingGroupOne",
    },
    {
      id: "text3",
      questionId: "5f99dc3fb306af17407d2c62",
      questionText: "Audio/Video Set up and Connection",
      questionType: "Number",
      valueid: "starRatingGroupTwo",
    },
    {
      id: "text4",
      questionId: "5f99dc61b306af17407d2c65",
      questionText: "Audio Quality",
      questionType: "Number",
      valueid: "starRatingGroupThree",
    },
    {
      id: "text5",
      questionId: "603ebba9e7044f034a20382c",
      questionText: "Video Quality",
      questionType: "Number",
      valueid: "starRatingGroupFour",
    },
    {
      id: "text6",
      questionId: "5f99dc61b306af17407d2c66",
      questionText: "Content sharing",
      questionType: "Number",
      valueid: "starRatingGroupFive",
    },
    {
      id: "text7",
      questionId: "5f99dc61b306af17407d2c67",
      questionText: "Is there anything else you would like to share with us about your experience with Webex Meeting?",
      questionType: "Text",
      valueid: "comments",
    },
    {
      id: "text8",
      questionId: "60369b36a16e754186a88f9d",
      questionText: "Please enter your email ID",
      questionType: "Text",
      valueid: "Email",
    },
  ],
};




// variable declaration
var hoverValue;
var oAuthToken;
var user;
var npsValue;
var smileRatingValue;
var starRatingGroupOneValue;
var starRatingGroupTwoValue;
var starRatingGroupThreeValue;
var starRatingGroupFourValue;
var starRatingGroupFiveValue;
var questiondisplayText = [];

var response = [];

var user;
prefills = [];


window.onload = function () {
  //All Prefills should go here
  // var prefill1 = {
  //   questionId: "5baa1126ff7ece0e9060de74",
  //   answer: "Kundan",
  // };
    //prefills.push(prefill1);
    document.getElementById("w3mission").value = '';
      //show the survey already submitted
  var user=getCookie("WXM_Token_cookie");
  if (user === config.SuveyToken) {
    document.getElementById("main-page").style.display = "none"


    document.getElementById("resubmited-survey").style.display = "block";
    document.getElementById("throttling-msg").innerHTML = config.throttlingMessage;
    if(!config.throttlingSubmitButton){
      document.getElementById("resubmit").style.display = "none";

    }

  }



  // else{

  // }


  // Passing the questiontext in the question


};
var value = config.responses;
var l = config.responses.length;
for (var i = 0; i < l; i++) {
  document.getElementById(value[i].id).innerHTML =
    // "<span>" + (i + 1).toString() + ".&nbsp;</span>" +
     value[i].questionText;
}
document.getElementById("text-group").innerHTML = config.groupQuestion;

//while clicking showing and hiding smile button

$(".smile-rating > div img").click(function (event) {

  smileRatingValue = event.target.alt;
  valueid = event.target.parentElement.parentElement.id;
  config.responses.filter(function(el) { return el.valueid === valueid})[0].value = smileRatingValue;

  for (var i = 0; i <= smileRatingValue; i++) {
    if ($(".smile-rating > div:nth-child("+ i +") > img:nth-child(2)").is(":visible")) {
      $(".smile-rating > div > img:nth-child(2)").hide();
      $(".smile-rating > div > img:nth-child(1)").show();
    }

    $(".smile-rating > div:nth-child("+ i +") > img:nth-child(1)").hide();
    $(".smile-rating > div:nth-child("+ i +") > img:nth-child(2)").show();
  }
});

//while clicking showing and hiding the solid star images and outline star images group star 1

$(".starRatingGroup1 > div img").click(function (event) {
  starRatingGroupOneValue = event.target.alt;
  valueid = event.target.parentElement.parentElement.id;
  config.responses.filter(function(el) { return el.valueid === valueid})[0].value = starRatingGroupOneValue;
  for (var i = 0; i <= starRatingGroupOneValue; i++) {
    if ($(".starRatingGroup1 > div:nth-child("+ i +") > img:nth-child(2)").is(":visible")) {
      $(".starRatingGroup1 > div > img:nth-child(2)").hide();
      $(".starRatingGroup1 > div > img:nth-child(1)").show();
    }

    $(".starRatingGroup1 > div:nth-child("+ i +") > img:nth-child(1)").hide();
    $(".starRatingGroup1 > div:nth-child("+ i + ") > img:nth-child(2)").show();
  }
});

//while clicking showing and hiding the solid star images and outline star images group star 2

$(".starRatingGroup2 > div img").click(function (event) {
  starRatingGroupTwoValue = event.target.alt;
  valueid = event.target.parentElement.parentElement.id;
  config.responses.filter(function(el) { return el.valueid === valueid})[0].value = starRatingGroupTwoValue;
  for (var i = 0; i <= starRatingGroupTwoValue; i++) {
    if ($(".starRatingGroup2 > div:nth-child("+ i + ") > img:nth-child(2)").is(":visible")) {
      $(".starRatingGroup2 > div > img:nth-child(2)").hide();
      $(".starRatingGroup2 > div > img:nth-child(1)").show();
    }

    $(".starRatingGroup2 > div:nth-child("+ i +") > img:nth-child(1)").hide();
    $(".starRatingGroup2 > div:nth-child("+ i +") > img:nth-child(2)").show();
  }
});

//while clicking showing and hiding the solid star images and outline star images group star 3

$(".starRatingGroup3 > div img").click(function (event) {
  starRatingGroupThreeValue = event.target.alt;
  valueid = event.target.parentElement.parentElement.id;
  config.responses.filter(function(el) {  return el.valueid === valueid})[0].value = starRatingGroupThreeValue;
  for (var i = 0; i <= starRatingGroupThreeValue; i++) {
    if ($(".starRatingGroup3 > div:nth-child("+ i +") > img:nth-child(2)").is(":visible")) {
      $(".starRatingGroup3 > div > img:nth-child(2)").hide();
      $(".starRatingGroup3 > div > img:nth-child(1)").show();
    }

    $(".starRatingGroup3 > div:nth-child("+ i +") > img:nth-child(1)").hide();
    $(".starRatingGroup3 > div:nth-child("+ i +") > img:nth-child(2)").show();
  }
});

//while clicking showing and hiding the solid star images and outline star images group star 4

$(".starRatingGroup4 > div img").click(function (event) {
  starRatingGroupFourValue = event.target.alt;
  valueid = event.target.parentElement.parentElement.id;
  config.responses.filter(function(el) {  return el.valueid === valueid})[0].value = starRatingGroupFourValue;
  for (var i = 0; i <= starRatingGroupFourValue; i++) {
    if ($(".starRatingGroup4 > div:nth-child("+ i +") > img:nth-child(2)").is(":visible")) {
      $(".starRatingGroup4 > div > img:nth-child(2)").hide();
      $(".starRatingGroup4 > div > img:nth-child(1)").show();
    }

    $(".starRatingGroup4 > div:nth-child("+ i +") > img:nth-child(1)").hide();
    $(".starRatingGroup4 > div:nth-child("+ i +") > img:nth-child(2)").show();
  }
});

//while clicking showing and hiding the solid star images and outline star images group star 5

$(".starRatingGroup5 > div img").click(function (event) {
  starRatingGroupFiveValue = event.target.alt;
  valueid = event.target.parentElement.parentElement.id;
  config.responses.filter(function(el) {  return el.valueid === valueid})[0].value = starRatingGroupFiveValue;
  for (var i = 0; i <= starRatingGroupFiveValue; i++) {
    if ($(".starRatingGroup5 > div:nth-child("+ i +") > img:nth-child(2)").is(":visible")) {
      $(".starRatingGroup5 > div > img:nth-child(2)").hide();
      $(".starRatingGroup5 > div > img:nth-child(1)").show();
    }

    $(".starRatingGroup5 > div:nth-child("+ i +") > img:nth-child(1)").hide();
    $(".starRatingGroup5 > div:nth-child("+ i +") > img:nth-child(2)").show();
  }
});

// changing the background color for the NPS button while hovering
// $(".scale-buttons > div").click(function (event) {
//   // setting the default color for NPS Background
//   $(".scale-buttons > .dec").css("background-color", "rgb(238, 83, 65)");
//   $(".scale-buttons > .passive").css("background-color", "rgb(255, 188, 0)");
//   $(".scale-buttons > .promoter").css("background-color", "rgb(126, 183, 127)");
//   npsValue = event.target.innerText;
//   valueid = event.target.parentElement.id;
//   config.responses.filter((el) => el.valueid == valueid).value = npsValue;
//   // NPS dectactor
//   if (
//     npsValue == 0 ||
//     npsValue == 1 ||
//     npsValue == 2 ||
//     npsValue == 3 ||
//     npsValue == 4 ||
//     npsValue == 5 ||
//     npsValue == 6
//   ) {
//     $(this).css("background-color", "rgb(196, 68, 65)");
//   } else if (npsValue == 7 || npsValue == 8) {
//     $(this).css("background-color", "rgb(230, 171, 17)");
//   } else {
//     $(this).css("background-color", "rgb(104, 153, 107)");
//   }
// });

// posting the submitted response to the WXM Product
function postSurvey() {
  document.getElementById('submit-survey').disabled = true;

  var responseDateTimeValue = new Date();
var answerId;

// Hashing answerId field
var sign = config.securityPassphrase;
var surveyToken = config.SuveyToken;
if (sign !== undefined) {
  var ticks = responseDateTimeValue.getTime() * 10000 + 621355968000000000;
  var hash = CryptoJS.HmacSHA256(ticks + ";" + surveyToken, sign);
  answerId = hash.toString(CryptoJS.enc.Base64);
}
  config.responses.filter(function(el) { return el.valueid == "comments"})[0].value = document.getElementById("w3mission").value;
  textbox = document.getElementById("w3mission").value;
  config.responses.filter(function(el) { return el.valueid == "Email"})[0].value = document.getElementById("w3mission2").value;
  textbox = document.getElementById("w3mission2").value;
  if (smileRatingValue == undefined && starRatingGroupOneValue == undefined  && starRatingGroupTwoValue == undefined && starRatingGroupThreeValue == undefined && starRatingGroupFourValue == undefined && starRatingGroupFiveValue == undefined && textbox == "") {
    alert("Please complete your survey");
    document.getElementById('submit-survey').disabled = false;
  } else {
    // Collecting the date format;
    // creating responses Json for the post survey
    var responses1 = [];
    for (var i = 0; i < config.responses.length; i++) {
      if(config.responses[i].value != null && config.responses[i].value != "" ){
        var res = {
          questionId: config.responses[i].questionId,
          questionText: config.responses[i].questionText,
          textInput:
            config.responses[i].questionType == "Text"
              ? config.responses[i].value
              : null,
          numberInput:
            config.responses[i].questionType == "Number"
              ? parseInt(config.responses[i].value)
              : 0,
        };

        responses1.push(res);
        console.log(responses1);
      }


    }

    for (var i = 0; i < prefills.length; i++) {
      var res = {
        questionId: prefills[i].questionId,
        textInput: prefills[i].answer,
      };
      responses1.push(res);
    }

    // adding the responses to post survey API
    var object = {
      Id: answerId,
      responseDateTime: responseDateTimeValue,
      responses: responses1,
    };
    var settings = {
      // post the required field to the SurveyBytoken API
      async: true,
      crossDomain: true,
      url: config.baseURL + "/api/SurveyByToken/" + config.SuveyToken,
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(object),
      error: function (xhr, error) {
        alert("We are unable to submit your response. Please try again."); // error message alter
      },
    };
    $.ajax(settings).done(function (response) {
      createCookies();
      if (response != null) {
        removePreviousValue();
      }
      else
      {
        alert("We are unable to submit your response. Please try again."); // error message alter
        document.getElementById('submit-survey').disabled = false;
      }
    });
    // function call to hide the single survey page
  }
}
function removePreviousValue() {
  // showing the thank you after submitting the feedback
  $("#main-page").hide();
  $("#thank-you").show();
}

// create previous cookie
function createCookies(){
  if(config.throttling){
   var hour = config.throttlingTime;
  var now = new Date();
  now.setTime(now.getTime() + (hour * 3600 * 1000));
  document.cookie="WXM_Token_cookie=" + config.SuveyToken + ";" + "expires=" + now.toUTCString() + "; path=/";
  }
}

// get previous cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function showSurvey(){
  document.getElementById("resubmited-survey").style.display = "none";
  document.getElementById("main-page").style.display = "block";
}
