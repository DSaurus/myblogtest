require=function t(i,e,o){function n(c,r){if(!e[c]){if(!i[c]){var a="function"==typeof require&&require;if(!r&&a)return a(c,!0);if(s)return s(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var f=e[c]={exports:{}};i[c][0].call(f.exports,function(t){var e=i[c][1][t];return n(e||t)},f,f.exports,t,i,e,o)}return e[c].exports}for(var s="function"==typeof require&&require,c=0;c<o.length;c++)n(o[c]);return n}({game:[function(t,i,e){"use strict";cc._RF.push(i,"bfdffBro/pIHJ7Pr/f2bV5W","game"),cc.Class({extends:cc.Component,properties:{startButton:cc.Button,likeButton:cc.Button,foodButton:cc.Button,teacherButton:cc.Button,friendButton:cc.Button,like:cc.Label,food:cc.Label,name:"",friend:cc.Label,teacher:cc.Label,likei:cc.EditBox,foodi:cc.EditBox,friendi:cc.EditBox,teacheri:cc.EditBox,namei:cc.EditBox,form:cc.Node,footer:cc.Node,title:cc.Label,list:cc.Node,backButton:cc.Button,likepage:cc.Node,friendpage:cc.Node,teacherpage:cc.Node,foodpage:cc.Node,footer2:cc.Node,liketalk:cc.Label,foodtalk:cc.Label,teachertalk:cc.Label,friendtalk:cc.Label},startGame:function(){console.log("Start!"),this.name=this.namei.string,this.like.string=this.likei.string?this.likei.string:"Saurus",this.teacher.string=this.teacheri.string?this.teacheri.string:"Saurus",this.food.string=this.foodi.string?this.foodi.string:"Saurus",this.friend.string=this.friendi.string?this.friendi.string:"Saurus",console.log(this.like.string),console.log(this.likei.string),setTimeout(function(){this.form.destroy()}.bind(this),1e3),this.footer.opacity=255},likeChange:function(){this.title.string=this.like.string,this.list.y=1e4,this.likepage.opacity=255,this.footer2.opacity=255,this.footer.opacity=0;var t=Math.random();this.liketalk.string=t<.2?"跟你在一起的时光都很耀眼\n因为天气好, 因为天气不好 \n因为天气刚刚好, 每一天，都很美好~":t<.4?"自从认识你之后，\n我就再没有看过星星。 \n看星星做什么。看你的眼睛就够了~":t<.6?"不要再召唤我了 \n没有必要 \n因为我会一直在你身边~":t<.8?"如果你想听，\n我也可以说，\n我爱你！":"我不知道你是什么人，\n但你是被爱的存在，\n祝你幸福~"},friendChange:function(){this.title.string=this.friend.string,this.list.y=1e4,this.friendpage.opacity=255,this.footer2.opacity=255,this.footer.opacity=0,this.friendtalk.string="我记得好像还欠你一顿饭呢？\n就今天了，我请你吃一顿好的，多少钱都我付\n你想吃什么啊？"},teacherChange:function(){this.title.string=this.teacher.string,this.list.y=1e4,this.teacherpage.opacity=255,this.footer2.opacity=255,this.footer.opacity=0,this.teachertalk.string="同学，有一个不好的消息要告诉你\n因为不可抗力，这次清明假期取消了\n所以我们就加一节课吧~"},foodChange:function(){this.title.string=this.food.string,this.list.y=1e4,this.foodpage.opacity=255,this.footer2.opacity=255,this.footer.opacity=0,this.foodtalk.string="您订购的100kg的"+this.food.string+"已经到了\n请来学校快递收发室领取！\n联系电话:1311789278"},backChange:function(){this.title.string="微信",this.list.y=480,this.likepage.opacity=this.friendpage.opacity=this.teacherpage.opacity=this.foodpage.opacity=0,this.footer2.opacity=0,this.footer.opacity=255},onLoad:function(){this.startButton.node.on("click",this.startGame,this),this.likeButton.node.on("click",this.likeChange,this),this.friendButton.node.on("click",this.friendChange,this),this.teacherButton.node.on("click",this.teacherChange,this),this.foodButton.node.on("click",this.foodChange,this),this.backButton.node.on("click",this.backChange,this),this.like.string="Saurus",this.teacher.string="Saurus",this.food.string="Saurus",this.friend.string="Saurus",this.footer.opacity=0,this.likepage.opacity=0,this.teacherpage.opacity=0,this.foodpage.opacity=0,this.friendpage.opacity=0,this.list.y=480,this.footer2.opacity=0},start:function(){}}),cc._RF.pop()},{}]},{},["game"]);