safari.self.addEventListener("message", switchSearchEngine, false);

function switchSearchEngine (Event) {

    var keyword = ""
    var hostname = location.hostname

    if (hostname.indexOf("baidu") < 0){
        keyword = document.getElementsByName("q")[0].value
        location.href = "http://www.baidu.com/s?s2bd=t&tn=84053098_dg&ie=utf-8&wd=" + keyword
    } else if (hostname.indexOf("google") < 0){
        keyword = document.getElementsByName("wd")[0].value
        location.href = "https://www.google.com/search?client=safari&rls=en&ie=UTF-8&oe=UTF-8&q=" + keyword
    }
}


function hotkey()
{
    var a=window.event.keyCode;
    if((a==83)&&(event.altKey) || (a==115)&&(event.altKey) )
    {
//        alert("你按了alt+s键吧");
        switchSearchEngine(1);
    }
}// end hotkey

document.onkeydown = hotkey; //当onkeydown 事件发生时调用hotkey函数
