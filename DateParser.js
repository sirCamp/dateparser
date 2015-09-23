DateParser = function(){

}
DateParserValidator = function(){
}

DateParser.VERSION = 0.01;

DateParserValidator.isValid = function(regex,stringToValidate){
	

	var regex = regex;
	return regex.test(stringToValidate);
}

DateParser.createFromFormat = function(format,date){
	

	switch(format){
		
		case 'yyyy':
			if(DateParserValidator.isValid(/^\d{4}$/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyy-dd':
			if(DateParserValidator.isValid(/^\d{4}-\d{2}$/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyy-dd-mm':
			if(DateParserValidator.isValid(/^\d{4}-\d{2}-\d{2}$/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyy-dd-mm hh':
			if(DateParserValidator.isValid(/^\d{4}-\d{2}-\d{2}\s{1}\d{2}/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;


		case 'yyyy-dd-mm hh:MM':
			if(DateParserValidator.isValid(/^\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyy-dd-mm hh:MM:ss':
			if(DateParserValidator.isValid(/^\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyy-dd-mm hh:MM:ss am':
			if(DateParserValidator.isValid(/^\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}\s{1}am/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyy-dd-mm hh:MM:ss pm':
			if(DateParserValidator.isValid(/^\d{4}-\d{2}-\d{2}\s{1}\d{2}:\d{2}:\d{2}\s{1}pm/,date)){
				return new Date(date)
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;
		
		case 'dd-mm-yyyy hh:MM':
			if(DateParserValidator.isValid(/^\d{2}-\d{2}-\d{4}\s{1}\d{2}:\d{2}/,date)){
				return new Date(date.slice(6,10)+"-"+date.slice(3,5)+"-"+date.slice(0,2)+" "+date.slice(11,date.leght)))
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyyddmm':
			if(DateParserValidator.isValid(/^\d{8}.*/,date)){ 
				return new Date(date.slice(0,4)+"-"+date.slice(4,6)+"-"+date.slice(6,8))
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;
		
		case 'yyyyddmmhh':
			if(DateParserValidator.isValid(/^\d{10}.*/,date)){ 
				return new Date(date.slice(0,4)+"-"+date.slice(4,6)+"-"+date.slice(6,8)+" "+date.slice(8,10))
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyyddmmhhMM':
			if(DateParserValidator.isValid(/^\d{12}.*/,date)){ 
				return new Date(date.slice(0,4)+"-"+date.slice(4,6)+"-"+date.slice(6,8)+" "+date.slice(8,10)+":"+date.slice(10,12))
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		case 'yyyyddmmhhMMss':
			if(DateParserValidator.isValid(/^\d{14}.*/,date)){ 
				return new Date(date.slice(0,4)+"-"+date.slice(4,6)+"-"+date.slice(6,8)+" "+date.slice(8,10)+":"+date.slice(10,12)+":"+date.slice(12,14))
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

				case 'yyyyddmmhhMMss':
			if(DateParserValidator.isValid(/^\d{14}.*/,date)){ 
				return new Date(date.slice(0,4)+"-"+date.slice(4,6)+"-"+date.slice(6,8)+" "+date.slice(8,10)+":"+date.slice(10,12)+":"+date.slice(12,14))
			}
			else{
				throw Error("Given date is not compatible with the given type");
			}
		break;

		default:
			throw Error("Provenient format is not allowed");
		break;
	}
}
