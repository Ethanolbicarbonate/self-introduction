//para sa button kag notif

function copyToClipboard(elementId) {
    var element = document.getElementById(elementId);
    var text = element.innerText;

    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;

    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextarea);

    //gradually ma disapear ang button
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.style.opacity = '1';

    setTimeout(function() {
        var fadeOutInterval = setInterval(function() {
            if (notification.style.opacity > 0) {
                notification.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOutInterval);
                notification.style.display = 'none';
            }
        }, 200);
    }, 2000);
}