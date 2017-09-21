window.onload = function () {

            var topDiv = document.getElementById("top");
            var height = topDiv.offsetHeight;
            
            var mainBody = document.getElementById("mainbody");

            window.onscroll = function () {
                //判断被卷去的大小
                if(scroll().top >height){
                    //满足条件
                    topDiv.className = "fixed";
                    mainBody.style.paddingTop = topDiv.offsetHeight +"px";
                }else{
                    navDiv.className = "";
                    //清零
                    main.style.paddingTop = 0;
                }
            }


        }