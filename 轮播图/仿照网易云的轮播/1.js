let arr=[" left"," middle"," right"];
let i=0;

window.onload=function(){
    
    let boxBanners=document.getElementsByClassName("div_banner");
    init(boxBanners);
    console.log("initok");
    let timer=setInterval(function(){
        resetClassName_all(boxBanners);
   
        showThreePic(boxBanners,i);
        i++;
        i%=boxBanners.length;
        
    },2000)
}
function resetClassName_all(obj)
    {
        for(let i=0;i<obj.length;i++)
        {
            resetClassName(obj[i]);
        }
    }
function resetClassName(obj)
    {
        obj.className="div_banner";
    }
function addClassName(obj,str)
    {
        let regex=new RegExp("."+str+".")
        if(regex.test(obj.className))
        {
            return
        }
        else{
            obj.className=obj.className+str;
        }
    }
function showThreePic(obj,i)
    {
        let i_temp=i;
        let point=0;
        let timer=setInterval(() => {
            console.log(i_temp+"   "+point);
            addClassName(obj[i_temp%obj.length],arr[point++]);
            i_temp++;
            if(point==3)
            {
                clearInterval(timer);
            }
        }, 3);
        // addClassName(obj[i],arr[point])
    }
    function init(obj)
    {
        showThreePic(obj,0);
        i=1;
    }
