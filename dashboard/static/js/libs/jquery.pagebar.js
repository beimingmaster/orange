(function(a){a.extend(a.fn,{jpagebar:function(c){var b=a.extend({renderTo:a(document.body),totalpage:0,totalcount:0,currentPage:0,pagebarCssName:"pagination",pageNumberCssName:"",pageNameCssName:"",currentPageNameCssName:"disabled",currentPageNumberCssName:"active",totalpageNumberCssName:"totalpage_number",onClickPage:function(d){}},c);b.resetPagebar=function(){var j=this;j.renderTo=(typeof j.renderTo=="string"?a(j.renderTo):j.renderTo);var d=j.renderTo;d.attr("class",j.pagebarCssName);d.empty();if(totalpage=0){return}d.append('<div style="float:right;"></div>');d=d.find("div");a("<div>总&nbsp;"+j.totalpage+"页&nbsp;,&nbsp;"+j.totalcount+"&nbsp;条记录</div>").appendTo(d);var f=a("<ul></ul>");f.appendTo(d);if(j.totalcount==0){d.hide()}var g=parseInt(j.currentPage)-2;var h=parseInt(j.currentPage)+2;if(g<1){h=h-g+1}if(h>j.totalpage){g=g-(h-j.totalpage)}if(j.totalpage==1){a('<li><a href="javascript:void(0);">1</a></li>').attr("class",j.currentPageNumberCssName).bind("click",function(){j.onClickPage(1)}).appendTo(j.renderTo.find("ul"))}else{if(j.totalpage<7){for(var e=1;e<=j.totalpage;e++){if(j.currentPage==e){a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName+" "+j.currentPageNumberCssName).appendTo(f)}else{a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f)}}}else{if(j.currentPage<5){for(var e=1;e<=5;e++){if(j.currentPage==e){a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName+" "+j.currentPageNumberCssName).appendTo(f)}else{a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f)}}a('<li><a class="page-ellipsis" href="javascript:void(0);">...</a></li>').attr("class",j.pageNumberCssName).appendTo(f);a('<li><a href="javascript:void(0);">'+j.totalpage+"</a></li>").attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f)}else{if((j.totalpage-j.currentPage)<5){a('<li><a href="javascript:void(0);">1</a></li>').attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f);a('<li><a class="page-ellipsis" href="javascript:void(0);">...</a></li>').attr("class",j.pageNumberCssName).appendTo(f);for(var e=j.totalpage-4;e<=j.totalpage;e++){if(j.currentPage==e){a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName+" "+j.currentPageNumberCssName).appendTo(f)}else{a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f)}}}else{var g=parseInt(j.currentPage)-2;var h=parseInt(j.currentPage)+2;if(g<1){h=h-g+1}if(h>j.totalpage){g=g-(h-j.totalpage)}a('<li><a href="javascript:void(0);">1</a></li>').attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f);a('<li><a class="page-ellipsis" href="javascript:void(0);">...</a></li>').attr("class",j.pageNumberCssName).appendTo(f);for(var e=g;e<=h;e++){if(j.currentPage==e){a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName+" "+j.currentPageNumberCssName).appendTo(f)}else{a('<li><a href="javascript:void(0);">'+e+"</a></li>").attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f)}}a('<li><a class="page-ellipsis" href="javascript:void(0);">...</a></li>').attr("class",j.pageNumberCssName).appendTo(f);a('<li><a href="javascript:void(0);">'+j.totalpage+"</a></li>").attr("class",j.pageNumberCssName).bind("click",function(){j.onClickPage(a(this).find("a").text())}).appendTo(f)}}}}if(j.currentPage==1){a('<li><a href="javascript:void(0);">← </a></li>').attr("class",j.pageNameCssName+" "+j.currentPageNameCssName).prependTo(f)}else{a('<li><a href="javascript:void(0);">← </a></li>').attr("class",j.pageNameCssName).bind("click",function(){j.onClickPage(j.currentPage-1)}).prependTo(f)}if(j.currentPage==j.totalpage){a('<li><a href="javascript:void(0);"> →</a></li>').attr("class",j.pageNameCssName+" "+j.currentPageNameCssName).appendTo(f)}else{a('<li><a href="javascript:void(0);"> →</a></li>').attr("class",j.pageNameCssName).bind("click",function(){j.onClickPage(parseInt(j.currentPage)+1)}).appendTo(f)}a("#go_pg_num").unbind("input").unbind("propertychange");a("#go_pg_num").bind("input propertychange",function(){var i=a(this).val();if(i==""){return}i=parseInt(i);if(isNaN(i)||i<1||(j.totalpage&&j.totalpage<i)){a(this).val(1)}});a("#go_pg_num").bind("keydown",function(l){var k=window.event||l;if(k.keyCode==13){var i=parseInt(a("#go_pg_num").val());if(isNaN(i)||i<1||(j.totalpage&&j.totalpage<i)){i=1}j.onClickPage(i)}});a(".page-btn").click(function(){var i=parseInt(a("#go_pg_num").val());if(isNaN(i)||i<1||(j.totalpage&&j.totalpage<i)){i=1}j.onClickPage(i)})};b.resetPagebar()},setCurrentPage:function(c,b){if(isNaN(b)||b<0||(c.totalpage&&c.totalpage<b)){b=c.totalpage}c.currentPage=b;c.resetPagebar(c);a("#go_pg_num").text(b)},setTotalPage:function(c,b){c.totalpage=b;c.resetPagebar(c)}})})(jQuery);