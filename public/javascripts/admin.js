$(document).ready(function(){
    $("#adduser").click(function () {
        var adduser={};
        adduser['Id']=$("#scode").val();
        adduser['Name']=$("#sname").val();
        adduser['Email']=$("#email").val();
        adduser['Role']=$("#role").val();   
        adduser['Country']=$(".country").val();    
        adduser['State']=$(".region").val();    
        adduser['District']=$(".city").val();  
        adduser['Mandal']=$("#mandal").val();            
        
        if(adduser['Id']==''||adduser['Name']==''||adduser['Email']==''||adduser['Mandal']==''||adduser['Role']==''||adduser['Country']==''||adduser['State']==''||adduser['District']=='')
        {
          if(adduser['Id']==''){
            $('#sp1').text('Enter Staff code').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp1').text('');
          }
          if(adduser['Name']==''){
            $('#sp2').text('Enter Staff name').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp2').text('');
          }
          if(adduser['Email']==''){
            $('#sp3').text('Select Email').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp3').text('');
          }
          if(adduser['Role']==''){
            $('#sp4').text('Select Role').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp4').text('');
          }
          if(adduser['Country']==''){
            $('#sp5').text('Select Country').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp5').text('');
          }
          if(adduser['State']==''){
            $('#sp6').text('Select State').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp6').text('');
          }
          if(adduser['District']==''){
            $('#sp7').text('Select District').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp7').text('');
          }
          if(adduser['Mandal']==''){
            $('#sp8').text('Select Mandal').css({"color": "red", "font-size": "100%"});
          }
          else{
          $('#sp8').text('');
          }
        }
        
        else{
         //alert(JSON.stringify(adduser));
          $('#sp1').text('');
          $('#sp2').text('');
          $('#sp3').text('');
          $('#sp4').text('');
          $('#sp5').text('');
          $('#sp6').text('');
          $('#sp7').text('');
          $('#sp8').text('');
          
          $.post("/addnewuser",adduser).done(function(data, textStatus, jqXHR) 
       {
        alert("new user added successfully");
          $("#scode").val('');
          $("#sname").val('');
          $("#email").val('');
          $("#role").val(''); 
          $(".country").val('');
          $(".region").val('');
          $(".city").val(''); 
          $(".mandal").val(''); 

          
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'New user added successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });
}
   });
  });


