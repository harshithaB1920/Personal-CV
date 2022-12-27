
var show;
function showMore()
{
    console.log("inside")
    show=document.getElementById('more');
    
    
}
var flag=null;
var _hidediv = null;
function showdiv() {
    if(_hidediv)
        _hidediv();
    var div = document.getElementById("more");
    div.style.display = 'block';
    _hidediv = function () { div.style.display = 'none'; };
}


function status()
{
    if(flag)    
    {
        document.getElementById('more').style.display='block';
    }
    else
    {
        document.getElementById('more').style.display='none';
    }
        

}


