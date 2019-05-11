var express = require('express');
var router = express.Router();
var monk = require('monk');
var multer  = require('multer');
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
var randomstring=require('randomstring');
var nodemailer = require('nodemailer');
var email   = require('emailjs/email');
var db = monk('localhost:27017/sih');
var col = db.get('School');
var admin = db.get('admin');
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');
var contact = db.get('contact');
var complaints = db.get('complaints');
var feedback = db.get('feedback');

//loader
router.get('/', function(req, res) {
  res.render('index');
});
//help
router.get('/help', function(req, res) {
  res.render('help');
});
//login & signup get
router.get('/login', function(req, res) {
  res.render('login');
});
//Admin login & signup get
router.get('/admin', function(req, res) {
  res.render('admin');
});
//District Admin dashboard
router.get('/dashboard', function(req, res) {
  if (req.session && req.session.user) {
  res.locals.user = req.session.user;
  console.log(req.session.user.username);
  var date = moment().format('DD-MM-YYYY');
  col.find({}, function(err,docs){
  complaints.find({},function(err,Total){
  complaints.find({"Date":date},function(err,Today){
  //states
  complaints.find({"State":"AndhraPradesh"},function(err,AndhraPradesh){
  complaints.find({"State":"ArunachalPradesh"},function(err,ArunachalPradesh){
  complaints.find({"State":"Assam"},function(err,Assam){
  complaints.find({"State":"Bihar"},function(err,Bihar){
  complaints.find({"State":"Chhattisgarh"},function(err,Chhattisgarh){
  complaints.find({"State":"Goa"},function(err,Goa){
  complaints.find({"State":"Gujarat"},function(err,Gujarat){
  complaints.find({"State":"Haryana"},function(err,Haryana){
  complaints.find({"State":"HimachalPradesh"},function(err,HimachalPradesh){
  complaints.find({"State":"JammuKashmir"},function(err,JammuKashmir){
  complaints.find({"State":"Jharkhand"},function(err,Jharkhand){
  complaints.find({"State":"Karnataka"},function(err,Karnataka){
  complaints.find({"State":"Kerala"},function(err,Kerala){
  complaints.find({"State":"MadhyaPradesh"},function(err,MadhyaPradesh){
  complaints.find({"State":"Maharashtra"},function(err,Maharashtra){
  complaints.find({"State":"Manipur"},function(err,Manipur){
  complaints.find({"State":"Meghalaya Godavari"},function(err,Meghalaya){
  complaints.find({"State":"Mizoram"},function(err,Mizoram){
  complaints.find({"State":"Nagaland"},function(err,Nagaland){
  complaints.find({"State":"Odisha"},function(err,Odisha){
  complaints.find({"State":"Punjab"},function(err,Punjab){
  complaints.find({"State":"Rajasthan"},function(err,Rajasthan){
  complaints.find({"State":"Sikkim"},function(err,Sikkim){
  complaints.find({"State":"TamilNadu"},function(err,TamilNadu){
  complaints.find({"State":"Telangana"},function(err,Telangana){
  complaints.find({"State":"Tripura"},function(err,Tripura){
  complaints.find({"State":"Uttarakhand"},function(err,Uttarakhand){
  complaints.find({"State":"UttarPradesh"},function(err,UttarPradesh){
  complaints.find({"State":"WestBengal"},function(err,WestBengal){
  feedback.find({},function(err,feedback){
  res.locals.edit = docs;
  res.locals.Total = Total.length;
  res.locals.Today = Today.length;
  //states
  res.locals.AndhraPradesh = AndhraPradesh.length;
  res.locals.ArunachalPradesh = ArunachalPradesh.length;
  res.locals.Assam = Assam.length;
  res.locals.Bihar = Bihar.length;
  res.locals.Chhattisgarh = Chhattisgarh.length;
  res.locals.Goa = Goa.length;
  res.locals.Gujarat = Gujarat.length;
  res.locals.Haryana = Haryana.length;
  res.locals.HimachalPradesh = HimachalPradesh.length;
  res.locals.JammuKashmir = JammuKashmir.length;
  res.locals.Jharkhand = Jharkhand.length;
  res.locals.Karnataka = Karnataka.length;
  res.locals.Kerala = Kerala.length;
  res.locals.MadhyaPradesh = MadhyaPradesh.length;
  res.locals.Maharashtra = Maharashtra.length;
  res.locals.Manipur = Manipur.length;
  res.locals.Meghalaya = Meghalaya.length;
  res.locals.Mizoram = Mizoram.length;
  res.locals.Nagaland = Nagaland.length;
  res.locals.Odisha = Odisha.length;
  res.locals.Punjab = Punjab.length;
  res.locals.Rajasthan = Rajasthan.length;
  res.locals.Sikkim = Sikkim.length;
  res.locals.TamilNadu = TamilNadu.length;
  res.locals.Telangana = Telangana.length;
  res.locals.Tripura = Tripura.length;
  res.locals.Uttarakhand = Uttarakhand.length;
  res.locals.UttarPradesh = UttarPradesh.length;
  res.locals.WestBengal = WestBengal.length;
  res.locals.feedback = feedback;
  res.render('dashboard');
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
}
else{
  res.send("Session Expired. Login Again");
}
});
router.get('/andhra', function(req, res) {
  complaints.find({"State":"AndhraPradesh"},function(err,andhra){
  res.locals.andhra = andhra;
  res.render('andhra');
});
});
router.get('/arunachal', function(req, res) {
  complaints.find({"State":"ArunachalPradesh"},function(err,arunachal){
  res.locals.arunachal = arunachal;
  res.render('arunachal');
});
});
router.get('/assam', function(req, res) {
  complaints.find({"State":"Assam"},function(err,assam){
  res.locals.assam = assam;
  res.render('assam');
});
});
router.get('/bihar', function(req, res) {
  complaints.find({"State":"Bihar"},function(err,bihar){
  res.locals.bihar = bihar;
  res.render('bihar');
});
});
router.get('/chattisgarh', function(req, res) {
  complaints.find({"State":"Chhattisgarh"},function(err,chattisgarh){
  res.locals.chattisgarh = chattisgarh;
  res.render('chattisgarh');
});
});
router.get('/goa', function(req, res) {
  complaints.find({"State":"Goa"},function(err,goa){
  res.locals.goa = goa;
  res.render('goa');
});
});
router.get('/gujarat', function(req, res) {
  complaints.find({"State":"Gujarat"},function(err,gujarat){
  res.locals.gujarat = gujarat;
  res.render('gujarat');
});
});
router.get('/haryana', function(req, res) {
  complaints.find({"State":"Haryana"},function(err,haryana){
  res.locals.haryana = haryana;
  res.render('haryana');
});
});
router.get('/himachal', function(req, res) {
  complaints.find({"State":"HimachalPradesh"},function(err,himachal){
  res.locals.himachal = himachal;
  res.render('himachal');
});
});
router.get('/jammu', function(req, res) {
  complaints.find({"State":"JammuKashmir"},function(err,jammu){
  res.locals.jammu = jammu;
  res.render('jammu');
});
});
router.get('/jharkhand', function(req, res) {
  complaints.find({"State":"Jharkhand"},function(err,jharkhand){
  res.locals.jharkhand = jharkhand;
  res.render('jharkhand');
});
});
router.get('/karnataka', function(req, res) {
  complaints.find({"State":"Karnataka"},function(err,karnataka){
  res.locals.karnataka = karnataka;
  res.render('karnataka');
});
});
router.get('/kerala', function(req, res) {
  complaints.find({"State":"Kerala"},function(err,kerala){
  res.locals.kerala = kerala;
  res.render('kerala');
});
});
router.get('/madhya', function(req, res) {
  complaints.find({"State":"MadhyaPradesh"},function(err,madhya){
  res.locals.madhya = madhya;
  res.render('madhya');
});
});
router.get('/maharashtra', function(req, res) {
  complaints.find({"State":"Maharashtra"},function(err,maharashtra){
  res.locals.maharashtra = maharashtra;
  res.render('maharashtra');
});
});
router.get('/manipur', function(req, res) {
  complaints.find({"State":"Manipur"},function(err,manipur){
  res.locals.manipur = manipur;
  res.render('manipur');
});
});
router.get('/meghalaya', function(req, res) {
  complaints.find({"State":"Meghalaya"},function(err,meghalaya){
  res.locals.meghalaya = meghalaya;
  res.render('meghalaya');
});
});
router.get('/mizoram', function(req, res) {
  complaints.find({"State":"Mizoram"},function(err,mizoram){
  res.locals.mizoram = mizoram;
  res.render('mizoram');
});
});
router.get('/nagaland', function(req, res) {
  complaints.find({"State":"Nagaland"},function(err,nagaland){
  res.locals.nagaland = nagaland;
  res.render('nagaland');
});
});
router.get('/odisha', function(req, res) {
  complaints.find({"State":"Odisha"},function(err,odisha){
  res.locals.odisha = odisha;
  res.render('odisha');
});
});
router.get('/punjab', function(req, res) {
  complaints.find({"State":"Punjab"},function(err,punjab){
  res.locals.punjab = punjab;
  res.render('punjab');
});
});
router.get('/rajasthan', function(req, res) {
  complaints.find({"State":"Rajasthan"},function(err,rajasthan){
  res.locals.rajasthan = rajasthan;
  res.render('rajasthan');
});
});
router.get('/sikkim', function(req, res) {
  complaints.find({"State":"Sikkim"},function(err,sikkim){
  res.locals.sikkim = sikkim;
  res.render('sikkim');
});
});
router.get('/tamilNadu', function(req, res) {
  complaints.find({"State":"TamilNadu"},function(err,tamilNadu){
  res.locals.tamilNadu = tamilNadu;
  res.render('tamilNadu');
});
});
router.get('/telangana', function(req, res) {
  complaints.find({"State":"Telangana"},function(err,telangana){
  res.locals.telangana = telangana;
  res.render('telangana');
});
});
router.get('/tripura', function(req, res) {
  complaints.find({"State":"Tripura"},function(err,tripura){
  res.locals.tripura = tripura;
  res.render('tripura');
});
});
router.get('/uttarakhand', function(req, res) {
  complaints.find({"State":"Uttarakhand"},function(err,uttarakhand){
  res.locals.uttarakhand = uttarakhand;
  res.render('uttarakhand');
});
});
router.get('/uttarpradesh', function(req, res) {
  complaints.find({"State":"UttarPradesh"},function(err,uttarpradesh){
  res.locals.uttarpradesh = uttarpradesh;
  res.render('uttarpradesh');
});
});
router.get('/westbengal', function(req, res) {
  complaints.find({"State":"WestBengal"},function(err,westbengal){
  res.locals.westbengal = westbengal;
  res.render('westbengal');
});
});
router.get('/changepassword',function(req,res){
 if(req.session && req.session.user){
    res.locals.user = req.session.user;
    res.render('changepassword');
  }
  else{
    req.session.reset();
    res.render('login');
  }
});
router.get('/forgotpassword', function(req, res) {
  res.render('forgotpassword');
});
//login post
router.post('/login', function(req, res) {
  var empid = req.body.empid;
  var pass = req.body.Password;
  //console.log(pass);
  col.findOne({Id:empid}, function(err, data){
    var oldpwd = data.Password;
    //console.log(oldpwd);
    var newpwd = cryptr.decrypt(data.Password);
    //console.log(newpwd);
    if(newpwd==pass){
      col.findOne({Id:empid, Password:oldpwd}, function(err, docs){
      console.log(docs);
      if(!docs){
        res.render('login', { error: 'Invalid username or password.' });
      }
      else{
        delete docs.Password;
          req.session.user = docs;
        res.redirect('/home');
      }
      });
    }
    else{
      //console.log(err);
      res.render('login', { error: 'Invalid username or password.'});
    }
  });
});
//Admin login post
router.post('/admin',function(req,res){
  var uname = req.body.username;
  var pwd = req.body.password;
      admin.findOne({username:uname, password:pwd}, function(err, docs){
      console.log(docs);
      if(!docs){
        res.render('admin', { error: 'Invalid username or password.' });
      }
      else{
        delete docs.password;
          req.session.user = docs;
        res.redirect('/dashboard');
      }
  });
});
//forgot password
router.post('/checkMail', function(req, res) {
    console.log(req.body.Email);
    col.find({"Email":req.body.Email},function(err,datas){
    if(datas.length!=0){
    var Data=datas;
    for(i=0;i<Data.length;i++){
    if(Data[i].Email==req.body.Email){
     res.send("success");
  }
  else{
    console.log("not found");
    res.send("Email not Found");
  }
}
}else
{
  console.log("not found");
    res.send("Email not Found");
}
});
});
//forgot password
router.post('/sendEmail',function(req,res){
    console.log(req.body.Email);
    col.find({"Email":req.body.Email},function(err,datas){
    if(datas.length!=0){
    var Data=datas;
    for(i=0;i<Data.length;i++){
    if(Data[i].Email==req.body.Email){
     console.log("success");
     var name=Data[i].Name;
  }
    else{
    console.log("not found");
    res.send("Email not Found");
    }
    }
    }else
    {
    console.log("not found");
    res.send("Email not Found");
    }
    var newpassword =randomstring.generate(5);
    var pass = cryptr.encrypt(newpassword);
    col.update({"Email":req.body.Email},{$set:{"Password":pass}},function(err,user){
    if(!user){
      console.log('error');
    }
    else{
    var server  = email.server.connect({
	user:    "pachigollarachana1998@gmail.com",
	password:"rachana445",
	host:    "smtp.gmail.com",
	ssl:     true
	});
	var msg="";
	msg += "<html><body class=\"\" style=\"\/* background-color: #7acbee; *\/font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"body\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color: #7acbee;width:100%;\"><tbody><tr><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\">&nbsp;<\/td><td class=\"container\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;\"><div class=\"content\" style=\"box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;\"><!-- START CENTERED WHITE CONTAINER --><span class=\"preheader\" style=\"color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;\"><\/span><table class=\"main\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;\"><tbody><tr><td class=\"wrapper\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;\"><tbody><tr><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\"><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;margin-left: 210px;\"><img src='http:\/\/www.isteonline.in\/icons\/logo.png' width=\"80px\"><\/p><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;\">Hi "+name+", <br><br>Your new password is <b>"+newpassword+"<\/b><\/p><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"btn btn-primary\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;\"><tbody><tr><td align=\"left\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\"><center><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;\"><tbody><tr><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;\"><\/td><\/tr><\/tbody><\/table><\/center><\/td><\/tr><\/tbody><\/table><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;\"><\/p><center><b><\/b><\/center><p><\/p><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;\">Thanks &amp; Regards,<br>Indian Society for Technical Education.<\/p><\/td><\/tr><\/tbody><\/table><\/td><\/tr><\/tbody><\/table><!-- START FOOTER --><div class=\"footer\" style=\"clear:both;padding-top:10px;text-align:center;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;\"><tbody><tr><td class=\"content-block\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;color: #000000;font-size:12px;text-align:center;\"><span class=\"apple-link\" style=\"color: #000000;font-size:12px;text-align:center;\">Indian Society for Technical Education,<br>Shaheed Jeet Singh Marg,<br>Near Katwaria Sarai<br>Opp. Sanskrit Vidyapeeth,<br>New Delhi - 110 016<br>Phone : 011-26513542, 26963431<br>Email : istedhq@vsnl.net<\/span><br>This email is system generated, please do not respond to this email.<\/td><\/tr><tr><td class=\"content-block powered-by\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;color: black;font-size:12px;text-align:center;\"><a href='http:\/\/www.isteonline.in' target=\"_blank\" style=\"color:white;\" >www.isteonline.in<\/a><\/td><\/tr><\/tbody><\/table><\/div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --><\/div><\/td><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\">&nbsp;<\/td><\/tr><\/tbody><\/table><\/body><\/html>";
	var message = {
	text:    msg,
	from:    "Rachana<pachigollarachana1998@gmail.com>",
	to:      req.body.Email,  // change mail for faculty
	cc:      "",
	subject: "New password",
	attachment:
	[
	{data:msg, alternative:true},
	]
	};
	// send the message and get a callback with an error or details of the message that was sent
	  server.send(message, function(err, message) {
	  console.log(err || message);
	  });
}
});
});
});
//home page
router.get('/home', function(req, res) {
  if (req.session && req.session.user) {
  res.locals.user = req.session.user;
  col.find({"Name":req.session.user.Name},function(err,docs){
  complaints.find({"Name":req.session.user.Name,"Status":"Processing"},function(err,data){
  complaints.find({"Level":"Primary","Status":"Processing","Mandal":req.session.user.Mandal},function(err,pmdata){
  complaints.find({"Level":"Primary","Status":"Completed","Mandal":req.session.user.Mandal},function(err,cpmdata){
  complaints.find({"Level":"Upper primary","Status":"Processing","Mandal":req.session.user.Mandal},function(err,mupdata){
  complaints.find({"Level":"Upper primary","Status":"Completed","Mandal":req.session.user.Mandal},function(err,cupmdata){
  complaints.find({"Level":"Primary","Status":"Processing","District":req.session.user.District},function(err,ppdata){
  complaints.find({"Level":"Primary","Status":"Completed","District":req.session.user.District},function(err,pcdata){
  complaints.find({"Level":"Upper primary","Status":"Processing","District":req.session.user.District},function(err,updata){
  complaints.find({"Level":"Upper primary","Status":"Completed","District":req.session.user.District},function(err,ucdata){
  complaints.find({"Level":"High school","Status":"Processing","District":req.session.user.District},function(err,hpdata){
  complaints.find({"Level":"High school","Status":"Completed","District":req.session.user.District},function(err,hcdata){
  res.locals.status=data;
  res.locals.pupmeo=pmdata;
  console.log(pmdata);
  res.locals.cupmeo=cpmdata;
  console.log(cpmdata);
  res.locals.ppmeo=mupdata;
  console.log(mupdata);
  res.locals.pcmeo=cupmdata;
  console.log(cupmdata);
  res.locals.ppending=ppdata;
  res.locals.pcompleted=pcdata;
  res.locals.upending=updata;
  res.locals.ucompleted=ucdata;
  res.locals.hpending=hpdata;
  res.locals.hcompleted=hcdata;
  res.locals.user=docs[0];
  res.render('home');
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  } 
  else{
    res.redirect('/login');
}
});
//logout
router.get('/logout', function(req, res){
  if(req.session && req.session.user){
  req.session.reset();
  res.redirect('/login');
}
});
//admin logout
router.get('/adminlogout', function(req, res){
  if(req.session && req.session.user){
  req.session.reset();
  res.redirect('/admin');
}
});
//complaint form
var storage = multer.diskStorage({ //multers disk storage settings
	destination: function (req, file, uploadFn) {
        uploadFn(null, path.join(__dirname, '../public/uploads/'));
    },
	filename: function (req, file, cb) {
      //var datetimestamp = Date.now();
      cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage })
router.post('/complaintform', upload.single('image'), function(req, res) {
	if (req.session && req.session.user) {
	var Date = moment().format("DD-MM-YYYY");
	console.log(Date);
	var Time = moment().format("hh:mm:ss:a");
	console.log(Time);
	var data = {
		Name:req.session.user.Name,
		Role:req.session.user.Role,
		Country:req.body.country,
		State:req.body.state,
		District:req.body.district,
		Mandal:req.body.mandal,
		Village:req.body.village,
		School:req.body.school,
    Category:req.body.Category,
    Subcategory:req.body.subCategory,
		Complaint:req.body.complaint,
    Level:req.body.level,
		Time:Time,
		Date:Date,
		Image:req.file.originalname,
		Status:"Processing"
	}
    complaints.insert(data, function(err,docs){
    console.log(docs);
	console.log(req.file);
  res.redirect('/home');
});
};
});
router.post('/contact', function(req, res) {
  var data = {
  Name : req.body.name,
  Email : req.body.email,
  Mobile : req.body.mobile,
  Comment : req.body.comment
  }
  contact.insert(data, function(err,data){
  console.log(data);
  res.redirect('/home');
});
});
//change password
router.post('/changepassword',function(req,res){
  console.log(JSON.stringify(req.body));
  var data={
    Name:req.session.user.Name,
    id:req.session.user._id,
    npwd:req.body.npwd,
    cpwd:req.body.cpwd,
  };
  var pwd1 = data.id;
  console.log(pwd1);
  var pwd = cryptr.encrypt(data.cpwd);
  console.log(pwd);
    if (data.npwd==data.cpwd) {
      col.update({ $and: [ {"Name":data.Name}, {"_id":pwd1} ] },{$set:{"Password":pwd}},function(err,docs){
      if(err) 
      console.log(err);
      else
      console.log(docs);
      });
    }
  res.redirect('/home');
});
// Admin adding new user
router.post('/addnewuser',function(req,res){
  //console.log(JSON.stringify(req.body));
  var pass = cryptr.encrypt("123");
  var newuser={
    Id:req.body.stcode,
    Name:req.body.sname,
    Email:req.body.semail,
    Role:req.body.role,
    Country:req.body.country,
    State:req.body.state,
    District:req.body.district,
    Mandal:req.body.mandal,
    Password:pass
  };
  col.insert(newuser,function(err,docs){
    if(err) return err;
    else
      res.redirect('/dashboard');
  });
});
//admin upload
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            //var datetimestamp = Date.now();
            cb(null, file.originalname)
        }
});
var upload = multer({ //multer settings
                    storage: storage,
                    fileFilter : function(req, file, callback) { //file filter
                        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                            return callback(new Error('Wrong extension type'));
                        }
                        callback(null, true);
                    }
}).single('file');
    /** API path that will upload the files */
  router.post('/uploadadmin', function(req, res) {
        var exceltojson;
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            /** Multer gives us file info in req.file object */
            if(!req.file){
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            /** Check the extension of the incoming file and 
             *  use the appropriate module
             */
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            }
            //console.log(req.file.path);
            try {
                exceltojson({
                    input: req.file.path,
                    output: "out.json", //since we don't need output.json
                    lowerCaseHeaders:false
                }, function(err,result){
                    if(err) {
                        return res.send('error in importing data');
                    } 
                    //console.log(result);
                    saveData(result);
                    res.redirect("/dashboard");
            });
            } catch (e){
                res.send("Corupted excel file");
            } 
       });
});

function saveData(data) {
 //console.log(data);
for(var i=0;i<data.length;i++){
col.update({"Id":data[i].Id},{$set:{"Id":data[i].Id,"Name":data[i].Name,"Password":"a9eae4ce70ba9e9cde7a66bff8fcf394351646","Email":data[i].Email,"Role":data[i].Role,"Mandal":data[i].Mandal,"State":data[i].State,"District":data[i].District}},{upsert: true },  function(err, data ) { 
    //console.log(data);
    if(err)
    console.log(err);
});
}
}
//remove user
router.post('/remove', function(req, res) {
  var Id = req.body.id;
  col.remove({"Id":Id}, function(err,docs){
  res.send(docs);
});
});
//edit user
router.post('/edit', function(req, res) {
  var Id = req.body.id;
  col.find({"Id":Id}, function(err,docs){
  res.send(docs);
});
});
//update in admin panel
router.post('/update', function(req, res) {
  var data = {
    Id:req.body.id,
    Name:req.body.name,
    Role:req.body.role,
    Country:req.body.country,
    State:req.body.state,
    District:req.body.district,
    Mandal:req.body.mandal,
    Village:req.body.village,
    Level:req.body.level,
    School:req.body.school,
  }
  col.update({"Id":req.body.id},{$set:data},function(err,docs){
    res.redirect('/dashboard');
  });
});
//status change
router.post('/changestatus', function(req, res) {
  var id = req.body.id;
  complaints.update({"_id":id},{$set:{"Status":"Completed"}},function(err,docs){
  res.send(docs);
});
});
//feedback
router.post('/feedback', function(req, res){
  var data = {
    experience : req.body.experience,
    comment : req.body.comments,
    name : req.body.name,
    email : req.body.email
  }
  feedback.insert(data, function(err,docs){
    console.log(docs);
  res.redirect('/home');
});
});
module.exports = router;
