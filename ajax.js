function suma() 
{    
  var num1 = $('#Numero1').val();
  var num2 = $('#Numero2').val();
  
  $.ajax({
    type: 'GET',
    url: 'suma.php',
    data: { Numero1: num1, Numero2: num2 },
    success: function(response) {
      $('#result').val(response);
    } 
  }); 
}

function resta() 
{    
 
  var num1 = $('#Numero1').val();
  var num2 = $('#Numero2').val();

  $.ajax({
    type: 'GET',
    url: 'resta.php',
    data: { Numero1: num1, Numero2: num2 },
    success: function(response) {
      $('#result').val(response);
    } 
  }); 
  
}

function multiplicacion() 
{    
 
  var num1 = $('#Numero1').val();
  var num2 = $('#Numero2').val();

  $.ajax({
    type: 'GET',
    url: 'multiplicacion.php',
    data: { Numero1: num1, Numero2: num2 },
    success: function(response) {
      $('#result').val(response);
    } 
  }); 

}

function division() 
{    
 
  var num1 = $('#Numero1').val();
  var num2 = $('#Numero2').val();

  $.ajax({
    type: 'GET',
    url: 'division.php',
    data: { Numero1: num1, Numero2: num2 },
    success: function(response) {
      $('#result').val(response);
    } 
  }); 

}
