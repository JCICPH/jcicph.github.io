function getParam2 ( sname )
{
  var params = location.search.substr(location.search.indexOf("?")+1);
  var sval = "";
  params = params.split("&");
    // split param and value into individual pieces
    for (var i=0; i<params.length; i++)
       {
         temp = params[i].split("=");
         if ( [temp[0]] == sname ) { sval = temp[1]; }
       }
  return sval;
}

function getParamAsObject(){
  var params = location.search.substr(location.search.indexOf("?")+1);
  return JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

function getParam ( key )
{
  var obj = getParamAsObject();
  return eval('obj.'+key);
}
