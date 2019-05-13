var lis = document.getElementsByClassName("list");
for (var i=0; i<lis.length; i++){    
    var dds = lis[i].getElementsByTagName("dd");
    for (var j=0; j<dds.length; j++){
        dds[j].row = i;
        dds[j].col = j;
        dds[j].onclick = response;      
    }
}

var one=two=three=null;
var spans;

function response(){
    this.className = "selected";
    //console.log(this);  
    //console.log(this.row);
    //console.log(this.col);             
    var ddsr = lis[this.row].getElementsByTagName("dd");
    var thisLater;
    for (var c=0; c<ddsr.length; c++){      
        if (this.col != c){
            ddsr[c].className = "";
        }
        else{
            thisLater = ddsr[c].cloneNode(true);
            thisLater.innerHTML = thisLater.textContent + '<span id="' + this.row + '">x</span>';
            //console.log(thisLater);
        }        
    }   
    switch (this.row){
        case 0:
            if (one){
                one.remove();
            }
            if (this.col != 0){
                one = $(thisLater).clone();
                $('.result dl').append(one);            
            }                               
            break;
        case 1:
            if (two){
                two.remove();
            } 
            if (this.col != 0){
                two = $(thisLater).clone();
                $('.result dl').append(two); 
            }                               
            break;
        case 2:
            if (three){
                three.remove();
            } 
            if (this.col != 0){
                three = $(thisLater).clone();
                $('.result dl').append(three); 
            }                               
            break;
    }
    //console.log(this.col);
    /*if (this.col != 0){
        drop();
    }
    else{
        appear();
    }*/

    spans = document.getElementsByClassName("result")[0].getElementsByTagName("span");
    for (var d=0; d<spans.length; d++){
        spans[d].onclick = function(){           
            this.parentNode.parentNode.removeChild(this.parentNode);
            console.log(this.id);
            switch (this.id){
                case "0":
                var sdd = document.getElementsByClassName("select1")[0].getElementsByTagName("dd");
                for(var z=0; z<sdd.length; z++){
                    if (z==0){
                        sdd[z].className = "selected";
                    }
                    else{
                        sdd[z].className = "";
                    }
                }
                break;
                case "1":
                var sdd = document.getElementsByClassName("select2")[0].getElementsByTagName("dd");
                for(var z=0; z<sdd.length; z++){
                    if (z==0){
                        sdd[z].className = "selected";
                    }
                    else{
                        sdd[z].className = "";
                    }
                }
                break;
                case "2":
                var sdd = document.getElementsByClassName("select3")[0].getElementsByTagName("dd");
                for(var z=0; z<sdd.length; z++){
                    if (z==0){
                        sdd[z].className = "selected";
                    }
                    else{
                        sdd[z].className = "";
                    }
                }
                break; 
            } 
            control();                    
        }        
    }
    control();
}



function control(){
    var le = document.getElementsByClassName("result")[0].getElementsByClassName("selected");
    //console.log(le.length);
    if (le.length > 0){
        document.getElementsByClassName("selected-no")[0].style.display = "none";   
    }
    else{
        document.getElementsByClassName("selected-no")[0].style.display = "inline-block"; 
    }       
}

