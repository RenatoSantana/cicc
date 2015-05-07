SimpleSchema.messages({
  required: "[label] é obrigatório",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] não pode execeder [max] caractéres",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] não pode exceder [max]",
  minDate: "[label] must be on or after [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
    {msg: "[label] failed regular expression validation"},
    {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
    {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
    {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
    {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
    {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
    {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
    {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});



getServerTime = function(){
    var serverTime;
    if(!TimeSync.isSynced()){
        TimeSync.resync();
    }else{
        serverTime = Deps.nonreactive(function(){
            return TimeSync.serverTime();
        })
    }
    return serverTime;
}


//Diferença de anos
 diferencaAnos = function(date1, date2) {
  var dateParts1 = date1.split('-')
    , dateParts2 = date2.split('-')
    , d1 = new Date(dateParts1[0], dateParts1[1]-1, dateParts1[2])
    , d2 = new Date(dateParts2[0], dateParts2[1]-1, dateParts2[2])

  return new Date(d2 - d1).getYear() - new Date(0).getYear() + 1;
}

//Diferença de meses
 diferencaMeses = function(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

//Diferença dias
 diferencaDias = function(date1, date2) {

    var ONE_DAY = 1000 * 60 * 60 * 24

    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    var difference_ms = Math.abs(date1_ms - date2_ms)

    return Math.round(difference_ms/ONE_DAY)

}

//Diferença anos, meses e dias
 /*diferencaAnoMesDia = function(date1, date2) {
    return "Anos: " + diferencaAnos(date1,date2)+" Meses: " + diferencaMeses(date1,date2)" + Dias: " + diferencaDias(date1,date2);
}*/