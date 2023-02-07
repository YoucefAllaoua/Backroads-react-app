"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toursTable = exports.services = exports.socialLinks = exports.pageLinks = void 0;

var _tour = _interopRequireDefault(require("./images/tour-1.jpeg"));

var _tour2 = _interopRequireDefault(require("./images/tour-2.jpeg"));

var _tour3 = _interopRequireDefault(require("./images/tour-3.jpeg"));

var _tour4 = _interopRequireDefault(require("./images/tour-4.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pageLinks = [{
  id: 5,
  href: "#home",
  text: "home"
}, {
  id: 6,
  href: "#about",
  text: "about"
}, {
  id: 7,
  href: "#services",
  text: "services"
}, {
  id: 8,
  href: "#tours",
  text: "tours"
}];
exports.pageLinks = pageLinks;
var socialLinks = [{
  id: 1,
  href: "https://www.twitter.com",
  icon: "fab fa-facebook"
}, {
  id: 2,
  href: "https://www.twitter.com",
  icon: "fab fa-twitter"
}, {
  id: 3,
  href: "https://www.twitter.com",
  icon: "fab fa-squarespace"
}];
exports.socialLinks = socialLinks;
var services = [{
  id: 1,
  icon: "fas fa-wallet fa-fw",
  title: "saving money",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
}, {
  id: 2,
  icon: "fas fa-tree fa-fw",
  title: "endless hiking",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
}, {
  id: 3,
  icon: "fas fa-socks fa-fw",
  title: "amazing comfort",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
}];
exports.services = services;
var toursTable = [{
  id: 1,
  image: _tour["default"],
  date: "august 26th, 2020",
  title: "Tibet Adventure",
  info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  location: "china",
  duration: 6,
  cost: 2100
}, {
  id: 2,
  image: _tour2["default"],
  date: "october 1th, 2020",
  title: "best of java",
  info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  location: "indonesia",
  duration: 11,
  cost: 1400
}, {
  id: 3,
  image: _tour3["default"],
  date: "september 15th, 2020",
  title: "explore hong kong",
  info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  location: "hong kong",
  duration: 8,
  cost: 5000
}, {
  id: 4,
  image: _tour4["default"],
  date: "december 5th, 2019",
  title: "kenya highlights",
  info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  location: "kenya",
  duration: 20,
  cost: 3300
}];
exports.toursTable = toursTable;