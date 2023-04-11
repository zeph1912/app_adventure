"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[927],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>h,toc:()=>w});var a=n(5318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"chapter_six",title:"Chapter 6 - UFO Game",description:"This chapter will cover the final project for the course."},m=void 0,h={unversionedId:"chapter_six",id:"chapter_six",title:"Chapter 6 - UFO Game",description:"This chapter will cover the final project for the course.",source:"@site/../docs/chp6.md",sourceDirName:".",slug:"/chapter_six",permalink:"/app_adventure/docs/chapter_six",draft:!1,tags:[],version:"current",lastUpdatedAt:1681183291,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"chapter_six",title:"Chapter 6 - UFO Game",description:"This chapter will cover the final project for the course."},sidebar:"defaultSidebar",previous:{title:"Chapter 5 - Events",permalink:"/app_adventure/docs/chapter_five"}},f={},w=[{value:"Random",id:"random",level:2},{value:"State",id:"state",level:2},{value:"Handle UFO Click",id:"handle-ufo-click",level:2},{value:"Game Over Effect",id:"game-over-effect",level:2},{value:"View and styles",id:"view-and-styles",level:2},{value:"UFO Game with Timer",id:"ufo-game-with-timer",level:2}],C={toc:w};function k(e){var t,o=e,{components:p}=o,u=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(o,["components"]);return(0,a.kt)("wrapper",(t=d(d({},C),u),r(t,i({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("div",{className:"content-banner"},(0,a.kt)("p",null,"This chapter will cover the final project for the course. The project will be a UFO game where the user will try to catch as many UFOs as possible. You will be provided with a sample code that doesn't complete the requirements of the game. You will need to complete the code to make the game work."),(0,a.kt)("img",{className:"content-banner-img",src:"/docs/assets/p_android-ios-devices.svg",alt:" "})),(0,a.kt)("p",null,"We will need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),". We can import these components from the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-tsx"}),"import React, {useState, useEffect} from 'react';\nimport {View, Text, TouchableOpacity} from 'react-native';\n")),(0,a.kt)("h2",d({},{id:"random"}),"Random"),(0,a.kt)("p",null,"The first thing we need to do is to generate a random location for the UFO."),(0,a.kt)("p",null,"Randomness is an important concept in programming and can be used in many ways. It can be used to generate numbers (e.g., roll a dice), shuffle data, etc. We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.random()")," function to generate a random number between 0 and 1. If we multiply this number by 300, we will get a number between 0 and 300. If we add 1 to this number, we will get a number between 1 and 301. Then, if we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.floor()")," function to round the number down to the nearest integer, we will get a integer between 1 and 300."),(0,a.kt)("p",null,"For our UFO game, we will generate a random location for the UFO by generating a random number between 1 and 300 for the x position and a random number between 1 and 500 for the y position."),(0,a.kt)("p",null,"Here is a sample code that generates a random location for the UFO:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-tsx"}),"const randomLocation = () => {\n  const x = Math.floor(Math.random() * 300) + 1;\n  const y = Math.floor(Math.random() * 500) + 1;\n  return {x, y};\n};\n")),(0,a.kt)("h2",d({},{id:"state"}),"State"),(0,a.kt)("p",null,"We will need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook to keep track of the score and the UFO's position. The score will be an integer, and the UFO's position will be an object with ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," properties."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-tsx"}),"const [score, setScore] = useState(0);\nconst [ufoPosition, setUfoPosition] = useState(randomLocation());\n")),(0,a.kt)("h2",d({},{id:"handle-ufo-click"}),"Handle UFO Click"),(0,a.kt)("p",null,"We will need to create a function that will be called when the user clicks on the UFO. This function will update the score and generate a new random location for the UFO."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-tsx"}),"const handleUfoPress = () => {\n  setScore(score + 1);\n  setUfoPosition(randomLocation());\n};\n")),(0,a.kt)("h2",d({},{id:"game-over-effect"}),"Game Over Effect"),(0,a.kt)("p",null,"We will need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to check if the score has reached 50. If it has, we will display an alert to the user."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-tsx"}),"useEffect(() => {\n  if (score >= 50) {\n    alert('Game Over!');\n  }\n}, [score]);\n")),(0,a.kt)("h2",d({},{id:"view-and-styles"}),"View and styles"),(0,a.kt)("p",null,"We will need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," component that will contain the score and the UFO. We will also need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component that will display the score. We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," component to display the UFO."),(0,a.kt)("p",null,"We will set the position of the UFO to ",(0,a.kt)("inlineCode",{parentName:"p"},"absolute")," and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"top")," properties to the randomly generated x and y values. We will also need to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"onPress")," event handler to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," component that will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleUfoPress")," function, which will update the score and generate a new random location for the UFO."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-tsx"}),"<View style={{flex: 1}}>\n  <Text\n    style={{\n      textAlign: 'center',\n      fontSize: 24,\n      marginVertical: 10,\n    }}>\n    Score: {score}\n  </Text>\n  <TouchableOpacity\n    style={{\n      position: 'absolute',\n      left: ufoPosition.x,\n      top: ufoPosition.y,\n    }}\n    onPress={handleUfoPress}>\n    <Text style={{fontSize: 30}}>\ud83d\udef8</Text>\n  </TouchableOpacity>\n</View>\n")),(0,a.kt)("p",null,"Put together, the code for the UFO game will look like this:"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"UFOGame","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20View%2C%20Text%2C%20TouchableOpacity%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20randomLocation%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20x%20%3D%20Math.floor(Math.random()%20*%20300)%20%2B%201%3B%5Cn%20%20const%20y%20%3D%20Math.floor(Math.random()%20*%20500)%20%2B%201%3B%5Cn%20%20return%20%7B%20x%2C%20y%20%7D%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bscore%2C%20setScore%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BufoPosition%2C%20setUfoPosition%5D%20%3D%20useState(randomLocation())%3B%5Cn%5Cn%20%20const%20handleUfoPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20setScore(score%20%2B%201)%3B%5Cn%20%20%20%20setUfoPosition(randomLocation())%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(score%20%3E%3D%2050)%20%7B%5Cn%20%20%20%20%20%20alert('Game%20Over!')%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%2C%20%5Bscore%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20textAlign%3A%20'center'%2C%20fontSize%3A%2024%2C%20marginVertical%3A%2010%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20Score%3A%20%7Bscore%7D%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20position%3A%20'absolute'%2C%5Cn%20%20%20%20%20%20%20%20%20%20left%3A%20ufoPosition.x%2C%5Cn%20%20%20%20%20%20%20%20%20%20top%3A%20ufoPosition.y%2C%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20onPress%3D%7BhandleUfoPress%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2030%20%7D%7D%3E%F0%9F%9B%B8%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,"This is what this UFO game will look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UFO Game",src:n(6653).Z,width:"421",height:"689"})),(0,a.kt)("h2",d({},{id:"ufo-game-with-timer"}),"UFO Game with Timer"),(0,a.kt)("p",null,"In this section, we will create a UFO game that will generate a new UFO every second.\nIf the user clicks on the UFO, the score will increase by 1. If the user does not click on the UFO, the UFO will disappear and the next UFO will appear after 1 second. The game will end when the score reaches 50."),(0,a.kt)("p",null,"In this capstone project, you are going to use what you have learned in this course to create the game. You will need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook to keep track of the score and the UFO's position. You will also need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to generate a new UFO every second. You will need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setInterval")," function to generate a new UFO every second."),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"UFOGameWithTimer","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20GameScreen%20%3D%20()%20%3D%3E%20%7B%5Cn%5Cn%5Cn%7D%3B%5Cn%5Cnexport%20default%20GameScreen%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))}k.isMDXComponent=!0},6653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chp6_ufo-c064b4b905df0c7a263da95b7507b942.png"}}]);