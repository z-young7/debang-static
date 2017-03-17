var arr = [
	        ['石家庄', '北京', '上海', '天津', '重庆', '广州', '深圳', '东莞', '杭州', '成都', '沈阳', '大连', '南京', '苏州', '哈尔滨', '武汉', '长沙', '不限'],
			['巴音郭楞', '包头', '宝鸡', '北京', '博罗', '沧州', '常州', '长春', '长沙', '成都', '西双版纳', '重庆'],
			['大连', '大庆', '德宏', '东莞', '佛山', '福州', '广州', '桂林', '贵港', '贵阳'],
			['哈尔滨', '海安', '海口', '海门', '海宁', '杭州', '合肥', '河池', '贺州', '呼和浩特', '淮安', '惠州', '鸡西', '吉林', '济南', '佳木斯', '江门', '金华', '晋江'],
			['开封', '昆明', '临沧', '柳州', '洛阳', '南安', '南昌', '南京', '南宁', '南通', '南阳', '宁波'],
			['莆田', '普洱', '七台河', '齐齐哈尔', '启东', '黔东南', '钦州', '青岛', '泉州', '如皋', '三门峡', '三明', '汕头', '汕尾', '上海', '深圳', '沈阳', '石家庄', '石狮', '松原', '苏州', '宿迁', '台州', '太原', '天津'],
			['威海', '潍坊', '温州', '乌鲁木齐', '无锡', '梧州', '武汉', '西安', '厦门', '湘潭', '新沂', '信阳', '徐州', '许昌', '延边', '阳江', '伊春', '义务', '益阳', '玉溪', '岳阳', '云浮', '肇庆', '郑州', '中山', '周口', '珠海', '株洲', '驻马店', '淄博', '遵义']
		];
	
	var point = document.getElementsByClassName('detail-1');
	var point1 = $('.input1');
	var point2 = $('.adress ul');
	point1.on('mouseenter', function (){
		point2.eq(0).css({'display':'block', 'z-index':1000, 'background-color': '#fff'});
		point2.eq(1).css({'display':'block','z-index':1000, 'background-color':'#fff'});
	});
	point2.on('mouseleave',function (){
		point2.eq(1).css({'display':'none'});
		point2.eq(0).css({'display':'none'});
		point2.eq(2).css({'display':'none'});
		point2.eq(3).css({'display':'none'});
	});
function setPager(){
	var startP = 1,
		endP = 5;
	for(var i = 0; i < 10; i ++){
		$('.content').append('<ul class="inform-content"><li><a href="http://hrb.58.com/zpwuliucangchu/27251710256565x.shtml">德邦五常4千诚聘快递员</a></li><li id="only-sec">哈尔滨-五常</li><li>面议</li><li>工作经验：不限</li><li>学历要求：不限</li><li>2016-09-05</li></ul>');
	}
		$('.content').append('<div class="same"><p>附近城市相似工作:</p><ul><li>大庆</li><li>齐齐哈尔</li><li>绥化</li><li>牡丹江</li></ul></div>');
	    $('.page li').eq(1).on('click',function (){
		$('.content'). prepend('');
		$('.content').append('<ul class="inform-content"><li><a href="http://hrb.58.com/zpwuliucangchu/27251710256565x.shtml">德邦五常4千诚聘快递员</a></li><li id="only-sec">哈尔滨-五常</li><li>面议</li><li>工作经验：不限</li><li>学历要求：不限</li><li>2016-09-05</li></ul>');
	});
	
}
setPager();
var page = $('.page li');
	page.eq(0).on('click', function (){
		$('.content ul').detach();
		$('.content div').detach();
		$('<span/>',{html:'下一页','id':'page-last'}).appendTo('.page');
		for(var i = 0; i < page.length; i ++){
			page.eq(i).css({'background-color':'#fff','color':'#000'});
		}
		page.eq(0).css({'background-color':'#373C64', 'color':'#fff'});
		setPager();
});
	page.eq(1).on('click', function (){
		$('.content ul').detach();
		$('.content div').detach();
		$('<span/>',{html:'上一页','id':'page-start'}).prependTo('.page');
		for(var i = 0; i < page.length; i ++){
			page.eq(i).css({'background-color':'#fff','color':'#000'});
		}
		page.eq(1).css({'background-color':'#373C64', 'color':'#fff'});
		setPager();
});
	page.eq(2).on('click', function (){
		$('.content ul').detach();
		$('.content div').detach();
		for(var i = 0; i < page.length; i ++){
			page.eq(i).css({'background-color':'#fff','color':'#000'});
		}
		page.eq(2).css({'background-color':'#373C64', 'color':'#fff'});
		setPager();
});
	page.eq(3).on('click', function (){
		$('.content ul').detach();
		$('.content div').detach();
		for(var i = 0; i < page.length; i ++){
			page.eq(i).css({'background-color':'#fff','color':'#000'});
		}
		page.eq(3).css({'background-color':'#373C64', 'color':'#fff'});
		setPager();
});
	page.eq(4).on('click', function (){
			$('.content ul').detach();
			$('.content div').detach();
			$('.page #page-last').css({'display':'none'});
			for(var i = 0; i < page.length; i ++){
				page.eq(i).css({'background-color':'#fff','color':'#000'});
			}
			page.eq(4).css({'background-color':'#373C64', 'color':'#fff'});
			setPager();
	});


// 轮播图
function turnPage(){
	var oLi = $('.box .wrap');
	var index = 0;
	function init(){
		oLi.css({'left':'0', 'top':'0', 'width':'0', 'height':'0', 'z-index':1});
		oLi.eq(index % 7).css({'left':'-200px','top':'30%', 'width':'400px', 'height':'150px','opacity':'0.4','z-index':1 });  
		oLi.eq((index + 1) % 7).css({'top':'25%', 'left':'-150px','margin-top':'0px', 'height':"200px",'width':'400px','opacity':'0.6','z-index':'3'});
		oLi.eq((index + 2) % 7).css({'left':'-100px', 'top':'20%', 'width':'400px', 'height':'250px', 'opacity':'0.8', 'z-index':5});	
		oLi.eq((index + 3) % 7).css({'left':'-50px', 'top':'10%', 'width':'600px', 'height':'300px', 'opacity':'1', 'z-index':7});	
		oLi.eq((index + 4) % 7).css({'top':'20%', 'left':'200px','margin-top':'0px', 'height':"250px",'width':'400px','opacity':'0.8','z-index':'5'});
		oLi.eq((index + 5) % 7).css({'left':'250px', 'top':'25%', 'width':'400px', 'height':'200px', 'opacity':'0.6', 'z-index':3});	
		oLi.eq((index + 6) % 7).css({'left':'300px', 'top':'30%', 'width':'400px', 'height':'150px', 'opacity':'0.4', 'z-index':1});	
	}
	init();
	function rightMove (){
			oLi.css({'z-index':1});
			oLi.eq(index % 7).css({'left':'0', 'top':'0', 'width':'0', 'height':'0', 'opacity':0, 'z-inde':1});
			oLi.eq(index % 7).animate({'left':'300px', 'top':'30%', 'margin-top':'0px', 'width':'400px', 'height':'150px', 'opacity':'0.4'});
			oLi.eq((index + 1) % 7).animate({'left':'-200px', 'top':'30%', 'width':'400px', 'height':'150px', 'opacity':'0.4', 'z-index':1});
			oLi.eq((index + 2) % 7).animate({'top':'25%', 'left':'-150px','margin-top':'0px', 'height':"200px",'width':'400px','opacity':'0.6','z-index':'3'});
			oLi.eq((index + 3) % 7).animate({'left':'-100px', 'top':'20%', 'width':'400px', 'height':'250px', 'opacity':'0.8', 'z-index':5});
			oLi.eq((index + 4) % 7).animate({'left':'-50px', 'top':'10%', 'width':'600px', 'height':'300px', 'opacity':'1', 'z-index':7});	
			oLi.eq((index + 5) % 7).animate({'top':'20%', 'left':'200px','margin-top':'0px', 'height':"250px",'width':'400px','opacity':'0.8','z-index':'5'});
			oLi.eq((index + 6) % 7).animate({'left':'250px', 'top':'25%', 'width':'400px', 'height':'200px', 'opacity':'0.6', 'z-index':3});	
			index ++;	
	}	
	function leftMove(){
			oLi.eq((index - 1) % 7).animate({'left':'-200px','top':'30%', 'width':'400px', 'height':'150px','opacity':'0.4','z-index':1 });  
		    oLi.eq(index % 7).animate({'top':'25%', 'left':'-150px','margin-top':'0px', 'height':"200px",'width':'400px','opacity':'0.6','z-index':'3'});
		    oLi.eq((index + 1) % 7).animate({'left':'-100px', 'top':'20%', 'width':'400px', 'height':'250px', 'opacity':'0.8', 'z-index':5});	
			oLi.eq((index + 2) % 7).animate({'left':'-50px', 'top':'10%', 'width':'600px', 'height':'300px', 'opacity':'1', 'z-index':7});	
			oLi.eq((index + 3) % 7).animate({'top':'20%', 'left':'200px','margin-top':'0px', 'height':"250px",'width':'400px','opacity':'0.8','z-index':'5'});
			oLi.eq((index + 4) % 7).animate({'left':'250px', 'top':'25%', 'width':'400px', 'height':'200px', 'opacity':'0.6', 'z-index':3});	
			oLi.eq((index + 5) % 7).animate({'left':'300px', 'top':'30%', 'width':'400px', 'height':'150px', 'opacity':'0.4', 'z-index':1});	
			index --;
	}
	$('.btnR').on('mouseenter',function (){
		$(this).css({'cursor':'pointer', 'background':'url(../css/img/04.png) no-repeat -36px -107px'});
	});	
	$('.btnR').on('mouseleave',function (){
		$(this).css({'background':'url(../css/img/04.png) no-repeat -36px 0'});
	});	
	$('.btnR').on('click',function (){
		rightMove(index);
	});
	$('.btnL').on('mouseenter', function (){
		$(this).css({'cursor':'pointer', 'background':'url(../css/img/04.png) no-repeat 0 -107px'});
	});
	$('.btnL').on('mouseleave', function (){
		$(this).css({'background':'url(../css/img/04.png) no-repeat 0 0'});
	});
	$('.btnL').on('click', function (){
		leftMove(index);
	});
}
	turnPage();

