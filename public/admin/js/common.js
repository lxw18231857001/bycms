//dom加载完成后执行的js
$(function(){
	//全选的实现
	$(".check-all").click(function(){
		$(".ids").prop("checked", this.checked);
	});
	$(".ids").click(function(){
		var option = $(".ids");
		option.each(function(i){
			if(!this.checked){
				$(".check-all").prop("checked", false);
				return false;
			}else{
				$(".check-all").prop("checked", true);
			}
		});
	});
 }); 
 $("tr:even").addClass("evens");
 $("tr:odd").addClass("odd");
//监控滚动条
 $(window).scroll(function(event){
      var height= $(document).scrollTop();
	  if(height>25){
		  $(".tips_msg").css("top","0px");
	  }
	  else{
		  $(".tips_msg").css("top","76px");
	  }
  });
//确定按钮提交数据
$(".confirm_btn").click(function(){
	  //防止editor同步失败
	  var obj=$('textarea[name="content"]').attr("id");
	   if(obj){
			editor_content.sync();
	   }
      var self = $(".group-form");
	  var height= $(document).scrollTop();
	  if(height>25){
		  $(".tips_msg").css("top","0px");
	  }
	  else{
		  $(".tips_msg").css("top","76px");
	  }
	  
      $.post(self.attr("action"),self.serialize(),function(data){
          if(data.code){
			  sucess(data);
		  }else{
		     error(data);
		  }
      });
});
//表格行内按钮删除数据
$(".del_btn").click(function(){
      var self =  $(this);
	  if(!confirm('确认要执行该操作吗?')){
                return false;
       }
	 var target = $(this).attr('data-url');
      $.post(target,function(data){
          if(data.code){
			 sucess(data);
		  }else{
		     error(data);
		  }
      });
});
//顶部按钮删除数据
$(".delete").click(function(){
      var self =  $(this);
	  if(!confirm('确认要执行该操作吗?')){
                return false;
       }
	 var target = $(this).attr('data-url');
	  var ids=getIds();
      $.post(target,{id:ids},function(data){
          if(data.code){
			 sucess(data);
		  }else{
		     error(data);
		  }
      });
});
//增，改，删执行正确的json处理函数
//0-default,1-easyDialog
function sucess(data) {  
      if(dialog_style=="0"){   
		     if($(".tips_msg").hasClass("error")){
				  $(".tips_msg").removeClass("error");
			 }
		     $(".tips_msg").show(); 
			 $(".tips").html(data.msg+ ' 页面即将自动跳转~'); 	
			  setTimeout(function(){
                        if (data.url) {
                            location.href=data.url;
                        }
             },1500);
	  }	
	  if(dialog_style=="1"){   
		$('body').dialog({type:'success',title:'提示!.',discription:data.msg});
	     setTimeout(function(){
                        if (data.url) {
                            location.href=data.url;
                        }
             },1500);
			
	  }	
	   if(dialog_style=="2"){   
		   //your code 
	  }	
	  
}

//增，改，删执行错误的json处理函数
//0-default,1-easyDialog
function error(data) {     
	 if(dialog_style=="0"){ 	
		 $(".tips").html(data.msg); 
         $(".tips_msg").addClass("error"); 		   
		 $(".tips_msg").show();	
  
    }	
    if(dialog_style=="1"){   
		   
			 $('body').dialog({type:'danger',title:'提示!.',discription:data.msg});
		
			 
	  }	
     if(dialog_style=="2"){   
		 //your code 
	  }		  
}


//点击返回按钮
$(".cancel_btn").click(function(){
     history.go(-1);	
});
//获取选中id列表
function getIds() {     
		   //全选遍历
		    var result=new Array();
			var option = $(".ids");
		    option.each(function(i){
		 	if(this.checked){
				result.push($(this).val());
			}
		  });
			
		 return result.join(",");		
}



