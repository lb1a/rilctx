
function retrieve() {
    if(!validate()){
        alert("Please set your credentials in the options of the extension!");
        return;
    }
    var apiurl = "https://readitlaterlist.com/v2/get";
    var params = getPrefix()+"&apikey=eb7dmX46Taf23C2c57A2e87t0lg0Q529&state=unread&";
    var request = new XMLHttpRequest();
    request.open("POST", apiurl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function(){
        var target = document.getElementById('unread-posts').firstChild;        
        target.nodeValue = request.responseText;
    }
    request.send(params);
}

retrieve();
