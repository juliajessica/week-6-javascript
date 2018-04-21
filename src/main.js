import { galacticAge } from './galactic-age.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function(){
  $('#galactic-calc-form').submit(function(event) {
    event.preventDefault();

   let age = $("#ageInput").val();
   let testAge = new galacticAge(age);
   let calculate = testAge.getSeconds(testAge.age);
   $(".output").text("You are" + calculate + "seconds old!");

  });
});
