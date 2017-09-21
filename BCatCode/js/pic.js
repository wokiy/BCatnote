window.onload=function()
{
    var oBox=document.getElementById("box");
    var aImg=oBox.getElementsByTagName("ul")[0].getElementsByTagName("img");
    var aLi=oBox.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var oShow=document.getElementById("show");
    var oPrev=document.getElementById("prev");
    var oNext=document.getElementById("next");
    var iLength=oShow.offsetWidth/50;
    oShow.iNow=0;
    oShow.aUrl=[];
    oShow.off=false;
    for(var i=0;i<iLength;i++)
    {
        var oDiv=document.createElement("div");
        oDiv.className="div2";
        oDiv.style.zIndex=i>iLength/2?iLength-i:i;
        oDiv.innerHTML="<a href='show.html' class='img1' style='background-position:-"+i*50+"px 0px'></a><a href='#' class='img2' style='background-position:-"+i*50+"px 0px'></a><span class='span1'></span><span class='span2'></span>";
        oDiv.time=null;
        oShow.appendChild(oDiv);
    }
    for(var i=0;i<aImg.length;i++)
    {
        oShow.aUrl.push(aImg[i].getAttribute('src'));
    }
    oNext.onmousedown=function()
    {
        if(oShow.off)
        {
            return false;
        }
        oShow.off=true;
        var iNext=oShow.iNow+1;
        if(iNext>=oShow.aUrl.length)
        {
            iNext=0;
        }
        tab(iNext);
        setTimeout(
            function()
            {
                oShow.off=false;
            },iLength*50+100+800
        )
    };
    oPrev.onmousedown=function()
    {
        if(oShow.off)
        {
            return false;
        }
        oShow.off=true;
        var iNext=oShow.iNow-1;
        if(iNext<0)
        {
            iNext=oShow.aUrl.length-1;
        }
        tab(iNext);
        setTimeout(
            function()
            {
                oShow.off=false;
            },iLength*50+100+800
        )
    };
};
function tab(iNext)
{
    var oShow=document.getElementById("show");
    var aImg2=oShow.getElementsByClassName("img2");
    var aDiv=oShow.getElementsByTagName("div");
    for(var i=0;i<aImg2.length;i++)
    {
        aImg2[i].style.backgroundImage="url("+oShow.aUrl[iNext]+")";
    }
    for(var i=0;i<aDiv.length;i++)
    {
        var iTime=i*50;
        starmove(aDiv[i],iTime);
    }
    oShow.iNow=iNext;
}
function starmove(obj,iTime)
{
    var aImg1=obj.getElementsByClassName("img1")[0];
    var aImg2=obj.getElementsByClassName("img2")[0];
    var aSpan1=obj.getElementsByClassName("span1")[0];
    var aSpan2=obj.getElementsByClassName("span2")[0];
    obj.style.WebkitTransition="0.8s -webkit-transform ease";
    aSpan1.style.WebkitTransition=aSpan2.style.WebkitTransition=aImg1.style.WebkitTransition=aImg2.style.WebkitTransition="0.1s -webkit-transform ease";
    setTimeout(
        function()
        {
            aImg1.style.WebkitTransform="translateZ(180px)";
            aImg2.style.WebkitTransform="translateZ(-180px) rotateX(90deg)";
            aSpan2.style.WebkitTransform=aSpan1.style.WebkitTransform="translateZ(180px) rotateY(90deg)";
            setTimeout(
                function()
                {
                    obj.style.WebkitTransform="translateZ(-180px) rotateX(-90deg)";
                    setTimeout(
                        function()
                        {

                            aSpan1.style.WebkitTransition=aSpan2.style.WebkitTransition=obj.style.WebkitTransition=aImg1.style.WebkitTransition=aImg2.style.WebkitTransition="none";
                            aImg1.style.backgroundImage=aImg2.style.backgroundImage;
                            obj.style.WebkitTransform="rotateX(0deg)";
                            aSpan1.style.WebkitTransform="rotateY(90deg)";
                            aSpan2.style.WebkitTransform="rotateY(90deg)";
                            aImg1.style.WebkitTransform="translateZ(0px)";
                            aImg2.style.WebkitTransform="translateZ(0px) rotateX(-90deg)";
                        },800
                    );
                },100);
        },iTime
    );
}
$(function () {


    $("#next").hover(function () {
        $(".text").hide();
    },function () {
        $(".text").show();
    })

    $("#btn1").click(function () {
        window.location.href="show.html";
    });
    $("#prev").hover(function () {
        $(".text").hide();
    },function () {
        $(".text").show();
    })

})