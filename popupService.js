function call()
        {
            popup = window.open(apeng.ca);         
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