function validateCredentials(){
    var apiurl = "https://readitlaterlist.com/v2/auth";
    var params = getPrefix()+"&apikey=eb7dmX46Taf23C2c57A2e87t0lg0Q529";
    var request = new XMLHttpRequest();
    request.open("POST", apiurl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function(){
        if (request.readyState==4 &&  request.status==200){
            retrieve();
        } else {
        var notification = webkitNotifications.createNotification(
                'link_add.png',  // icon url - can be relative
                'Authentication Error',  // notification title
                'Your username or password is not correct.'  // notification body text
                );
            notification.show();
        }
    }
    request.send(params);
}

function retrieve() {
    var apiurl = "https://readitlaterlist.com/v2/get";
    var params = getPrefix()+"&apikey=eb7dmX46Taf23C2c57A2e87t0lg0Q529";
    var request = new XMLHttpRequest();
    request.open("POST", apiurl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function(){
        var target = document.getElementById('unread-posts').firstChild;        
        target.nodeValue = request.responseText;
    }
    request.send(params);
}

validateCredentials();
