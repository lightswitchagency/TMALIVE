
//var remote_url = "http://cre8ivedge.net/totalshop/limuru-rd/?connector=mobileassistant&hash=test";
/******* DATES ****************/
function getTodaysDate()
{
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    return today = d.getFullYear() + '-' +    ((''+month).length<2 ? '0' : '') + month + '-' +    ((''+day).length<2 ? '0' : '') + day;
}
function getYesterdaysDate() {
    var d = new Date();
    d.setDate(d.getDate()-1);
    var month = d.getMonth()+1;
    var day = d.getDate();
    return today = d.getFullYear() + '-' +    ((''+month).length<2 ? '0' : '') + month + '-' +    ((''+day).length<2 ? '0' : '') + day;
}
function getOneWeekDate() {
    var d = new Date();
    d.setDate(d.getDate()-7);
    var month = d.getMonth()+1;
    var day = d.getDate();
    return today = d.getFullYear() + '-' +    ((''+month).length<2 ? '0' : '') + month + '-' +    ((''+day).length<2 ? '0' : '') + day;
}
function getOneMonthDate() {
    var d = new Date();
    d.setDate(d.getDate());
    var month = d.getMonth();
    var day = d.getDate();
    return today = d.getFullYear() + '-' +    ((''+month).length<2 ? '0' : '') + month + '-' +    ((''+day).length<2 ? '0' : '') + day;
}
function getOneYearDate() {
    var d = new Date();
    d.setDate(d.getDate());
    var month = d.getMonth()+1;
    var day = d.getDate();
    return today = d.getFullYear()-1 + '-' +    ((''+month).length<2 ? '0' : '') + month + '-' +    ((''+day).length<2 ? '0' : '') + day;
}
/******* PARAMETERS  ****************/
$.urlParam =
    function(shows)
    {
        var results = new RegExp('[\\?&]' + shows+ '=([^&#]*)').exec(window.location.href);
        if (!results)
        {
            return '';
        }
        return results[1] || '';
    }
$.fn.tabs = function() {
    var selector = this;
    this.each(function() {
        var obj = $(this);
        $(obj.attr('href')).hide();
        $(obj).click(function() {
            $(selector).removeClass('selected');
            $(selector).each(function(i, element) {
                $($(element).attr('href')).hide();
            });
            $(this).addClass('selected');
            $($(this).attr('href')).show();
            return false;
        });
    });
    $(this).show();
    $(this).first().click();
};

/******* dashboard  ****************/
function fillDashboard(dashboard)
{
    loop = '<div class="row dashbox">'+
        '<div class="col-xs-12 col-sm-6"><div class="info-box">    ' +
        '   <span class="info-box-icon bg-aqua"> <i class="fa  fa-ticket"></i></span>' +
        '           <div class="info-box-content">  ' +
        '   <span class="info-box-text">  Sales' +
        '   </span>   ' +
        '   <span class="info-box-number">' +  dashboard.total_sales +
        '   </span>' +
        '           </div>' +
        ' </div>' +
        ' </div>' +

        '<div class="col-xs-12 col-sm-6"><div class="info-box">    ' +
        '   <span class="info-box-icon bg-red"> <i class="fa fa-shopping-cart"></i></span>' +
        '           <div class="info-box-content">  ' +
        '   <span class="info-box-text">  Orders' +
        '   </span>   ' +
        '   <span class="info-box-number">' +  dashboard.count_orders +
        '   </span>' +
        '           </div>' +
        ' </div>' +
        ' </div>' +

        '<div class="col-xs-12 col-sm-6 "><div class="info-box">    ' +
        '   <span class="info-box-icon bg-blue"> <i class="fa fa-users"></i></span>' +
        '           <div class="info-box-content">  ' +
        '   <span class="info-box-text">  Customers' +
        '   </span>   ' +
        '   <span class="info-box-number">' +  dashboard.count_customers +
        '   </span>' +
        '           </div>' +
        ' </div>' +
        ' </div>' +

        '<div class="col-xs-12 col-sm-6 "><div class="info-box">    ' +
        '   <span class="info-box-icon bg-aqua"> <i class="fa fa-pie-chart"></i></span>' +
        '           <div class="info-box-content">  ' +
        '   <span class="info-box-text"> Products' +
        '   </span>   ' +
        '   <span class="info-box-number">' +  dashboard.count_products +
        '   </span>' +
        '   </div>' +
        ' </div>' +
        ' </div>' +

        ' </div>';


    var order_stats_category = dashboard.order_status_stats;
    if(order_stats_category.length>0) {
        loop += '<div class="row"><div class="col-xs-12"><h3 class="small orderstatustitle"> Orders by Status</h3> </div> </div>';
    }
    loop+= '<div class="row">' ;

    for ( var i in order_stats_category)
    {


        loop +=    '<div class="col-xs-12 col-sm-6"><div class="info-box">     ' +
            ' <span class="info-box-icon  ' +  order_stats_category[i].code +'"> <i class="fa fa-ticket"></i></span>' +
        '           <div class="info-box-content">  ' +
            '         <small class="info-box-number">' + order_stats_category[i].count +  ' <small> Orders</small>  </span>' +
            '         <small >' + order_stats_category[i].total +  '  <small> /= </small> </small>' +
            '   <small class="info-box-text">'+ order_stats_category[i].name +
            '   </small>   ' +
            '       </div>' +

        ' </div>' +
        ' </div>' ;

    }
    loop+= ' </div>';


    return loop;
}


/************ICONS ******************/
var coffee_icon='<span class="fa-stack fa-2x pull-left m-r-sm"> ' +
    '<i class="fa fa-circle fa-stack-2x text-red"></i> ' +
    '<i class="fa fa-coffee fa-stack-1x text-white"></i>' +
    ' </span><small class="text-muted m-b block">ORDERS</small>';

var orders_icon ='<span class="fa-stack fa-2x pull-left m-r-sm"> ' +
    '<i class="fa fa-circle fa-stack-2x text-danger"></i>' +
    ' <i class="fa fa-suitcase fa-stack-1x text-white"></i>' +
    ' </span><small class="text-muted m-b block">ORDERS</small>';

var customer_icon ='<span class="fa-stack fa-2x pull-left m-r-sm"> ' +
    '<i class="fa fa-circle fa-stack-2x text-danger"></i>' +
    ' <i class="fa fa-users fa-stack-1x text-white"></i>' +
    ' </span><small class="text-muted m-b block">CUSTOMERS</small>';

var cart_icon ='<span class="fa-stack fa-2x pull-left m-r-sm"> ' +
    '<i class="fa fa-circle fa-stack-2x text-red"></i>' +
    ' <i class="fa fa-shopping-cart fa-stack-1x text-white"></i>' +
    ' </span><small class="text-muted m-b block">ORDERS</small>';

var sales_icon ='<span class="fa-stack fa-2x pull-left m-r-sm"> ' +
    '<i class="fa fa-circle fa-stack-2x text-red"></i>' +
    ' <i class="fa fa-money fa-stack-1x text-white"></i>' +
    ' </span><small class="text-muted m-b block">SALES</small>';

var product_icon ='<span class="fa-stack fa-2x pull-left m-r-sm"> ' +
    '<i class="fa fa-circle fa-stack-2x text-red"></i>' +
    ' <i class="fa fa-dropbox fa-stack-1x text-white"></i>' +
    ' </span><small class="text-muted m-b block">PRODUCTS</small>';

var loading_overlay ='<div class="overlay">    <i class="fa fa-refresh fa-spin"></i>    </div>';
//var loading_overlay ='<div id="loaderWrapper" class="overlay"><div id="page-loader"><div class="outter dark-border" style="">			<div class="mid dark-border" style=""></div>		</div></div></div>';
var row_start = "<div class='row'>"
var row_end = "</div>"
