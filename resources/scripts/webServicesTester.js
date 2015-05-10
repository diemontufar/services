
function readConfig(){
	
    var xmlUrl = 'resources/xml/config.xml';
    
    $.ajax({
    type: "GET",
    url: xmlUrl,
    dataType: "xml",
    success: function(xml) {
        ip = $(xml).find("ip").text();
		console.log(ip + " IP JAVA SCRIPT in");        
    }
                    
    }); 

    $("#select-cities" ).change(function() {
                console.log("Get Suburbs");
                populateListOfSuburbs($('#select-cities :selected').val());                
                });           	
}

function hideParameters(){
    $("#parametersSection").hide();
    $("#hideParamButton").hide();
    $("#unhideParamButton").show();
}

function unhideParameters(){
    $("#parametersSection").show();
    $("#hideParamButton").show();
    $("#unhideParamButton").hide();   
}

function getEndOfMonth(date){
	console.log(date);
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	var lastDay = ("0" + endDate.getDate()).slice(-2);

	var endDateFormat = date.getFullYear() + "-" + (month) + "-" + (lastDay);

	console.log(endDateFormat);
	return endDateFormat;
}

function getStartDate(date){
	var firstDay = "01"; 
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var startDateFormat = date.getFullYear()+"-"+(month)+"-"+(firstDay) ;
	
	return startDateFormat;
}

/* Populate suburbs list and other modules when selecting a city on the list box */



function populateListOfSuburbs (state){

  $('#select-suburbs').empty();

  $.getJSON("http://" + ip + "/culturesByState/"+ state).done(function(data) {

    if (data !== null && data!==undefined){

       var suburbs_options_html =  '<option value="all" disabled selected style="display:none;">Select a Suburb</option>';      

       $.each(data.features, function(fea, feature) {

          suburbs_options_html = suburbs_options_html + '<option value="' + feature.properties.feature_code + '">' + feature.properties.feature_name + '</option>';

       });
            
       // Append html string to suburb option list
      $('#select-suburbs').append(suburbs_options_html);

    }
  }).fail(function(){

    var city = $('#select-cities :selected').text();
    console.log('No suburbs found in: ' + city );
  });

}



