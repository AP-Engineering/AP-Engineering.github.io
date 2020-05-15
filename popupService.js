function call()
        {
            popup = window.open('http://www.google.co.in');         
            setTimeout(wait, 8000);
        }   
function caller()
        {
            setInterval(call, 12000);
        }
function wait()
        {
            popup.close()
        }