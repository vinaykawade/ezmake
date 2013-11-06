
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Go Figure - Do it yourself' });
};
