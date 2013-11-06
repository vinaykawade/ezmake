
/*
 * GET home page.
 */

exports.show= function(req, res){
  res.render('video', { title: 'Go Figure - Video' });
};

exports.upload= function(req, res){
  res.render('upload', { title: 'Go Figure - Select Video' });
};
