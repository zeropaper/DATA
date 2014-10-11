(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var DATA = {};

(function() {
  this.DATA = DATA;
}());

var keys = {};
if (location.hostname === 'localhost') {
  keys.facebook = '450068195134004'; 
  keys.google = '235177559275-5vrjt1el0oua5lr1ib911n8nrc682mbk.apps.googleusercontent.com'; 
}
else {
  // keys.facebook = ''; 
  // keys.google = ''; 
}

hello.init(keys, { redirect_uri: 'redirect.html' });

// var Handlebars = require('handlebars/runtime').default;
// require('./helpers').register(Handlebars);
// var templates = DATA.templates = require('./templates')(Handlebars);


// var GitHubAPIURL = 'https://api.github.com';
// var DATAissuesPath = 'repos/zeropaper/DATA/issues';

// function GitHub() {

// }

// GitHub.prototype.issues = function(done) {
//   jQuery.ajax({
//     url: GitHubAPIURL +'/'+ DATAissuesPath,
//     error: done,
//     success: function(response) { done(null, response); }
//   });
// };

// var gh = new GitHub();
// gh.issues(function(err, issues) {
//   console.info('issues', err, issues);
//   var html = [];
//   issues.forEach(function(issue) {
//     html.push('<div>' +'</div>');
//   });
// });


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS92YWxlL3JlcG9zL0RBVEFzaXRlL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBEQVRBID0ge307XG5cbihmdW5jdGlvbigpIHtcbiAgdGhpcy5EQVRBID0gREFUQTtcbn0oKSk7XG5cbnZhciBrZXlzID0ge307XG5pZiAobG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnKSB7XG4gIGtleXMuZmFjZWJvb2sgPSAnNDUwMDY4MTk1MTM0MDA0JzsgXG4gIGtleXMuZ29vZ2xlID0gJzIzNTE3NzU1OTI3NS01dnJqdDFlbDBvdWE1bHIxaWI5MTFuOG5yYzY4Mm1iay5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSc7IFxufVxuZWxzZSB7XG4gIC8vIGtleXMuZmFjZWJvb2sgPSAnJzsgXG4gIC8vIGtleXMuZ29vZ2xlID0gJyc7IFxufVxuXG5oZWxsby5pbml0KGtleXMsIHsgcmVkaXJlY3RfdXJpOiAncmVkaXJlY3QuaHRtbCcgfSk7XG5cbi8vIHZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGFuZGxlYmFycy9ydW50aW1lJykuZGVmYXVsdDtcbi8vIHJlcXVpcmUoJy4vaGVscGVycycpLnJlZ2lzdGVyKEhhbmRsZWJhcnMpO1xuLy8gdmFyIHRlbXBsYXRlcyA9IERBVEEudGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKShIYW5kbGViYXJzKTtcblxuXG4vLyB2YXIgR2l0SHViQVBJVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nO1xuLy8gdmFyIERBVEFpc3N1ZXNQYXRoID0gJ3JlcG9zL3plcm9wYXBlci9EQVRBL2lzc3Vlcyc7XG5cbi8vIGZ1bmN0aW9uIEdpdEh1YigpIHtcblxuLy8gfVxuXG4vLyBHaXRIdWIucHJvdG90eXBlLmlzc3VlcyA9IGZ1bmN0aW9uKGRvbmUpIHtcbi8vICAgalF1ZXJ5LmFqYXgoe1xuLy8gICAgIHVybDogR2l0SHViQVBJVVJMICsnLycrIERBVEFpc3N1ZXNQYXRoLFxuLy8gICAgIGVycm9yOiBkb25lLFxuLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IGRvbmUobnVsbCwgcmVzcG9uc2UpOyB9XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gdmFyIGdoID0gbmV3IEdpdEh1YigpO1xuLy8gZ2guaXNzdWVzKGZ1bmN0aW9uKGVyciwgaXNzdWVzKSB7XG4vLyAgIGNvbnNvbGUuaW5mbygnaXNzdWVzJywgZXJyLCBpc3N1ZXMpO1xuLy8gICB2YXIgaHRtbCA9IFtdO1xuLy8gICBpc3N1ZXMuZm9yRWFjaChmdW5jdGlvbihpc3N1ZSkge1xuLy8gICAgIGh0bWwucHVzaCgnPGRpdj4nICsnPC9kaXY+Jyk7XG4vLyAgIH0pO1xuLy8gfSk7XG5cbiJdfQ==
