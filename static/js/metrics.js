var getblogged = {
    metrics: (key, ip, trackUserVisits = false) => {
        var url = "https://app.getblogged.net/";
        //url = "https://app.staging.getblogged.net/";
        //url = "https://app.staging.getblogged.net/";
        //url = "http://localhost.com/";
        var refresh = new Date().getTime();
        if(key.length < 1){
            return;
        }
        // Prepare the POST data
        /*
        var seen = [];
        var windowData = JSON.stringify(window, function(key, val) {
            if (val != null && typeof val == "object") {
                if (seen.indexOf(val) >= 0) {
                    return;
                }
                seen.push(val);
            }
            return val;
        });
         */

        var postData = "key=" + encodeURIComponent(key) +
            "&url=" + encodeURIComponent(window.location.href) +
            //"&window=" + encodeURIComponent(windowData) +
            "&hostname=" + encodeURIComponent(window.location.hostname) +
            "&user=" + encodeURIComponent(ip+"|"+navigator.userAgent+"|"+navigator.language) +
            "&trackUserVisits=" + encodeURIComponent(trackUserVisits);

        // Send the POST request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url + "api/1/public/plugin/metrics?refresh=" + refresh, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(postData);
    }
}
