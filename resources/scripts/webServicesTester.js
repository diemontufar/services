
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

