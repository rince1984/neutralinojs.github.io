(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,n,i){"use strict";i.d(n,"a",(function(){return s})),i.d(n,"b",(function(){return p}));var t=i(0),a=i.n(t);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},s=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=b(i),u=t,p=s["".concat(l,".").concat(u)]||s[u]||w[u]||o;return i?a.a.createElement(p,r(r({ref:n},c),{},{components:i})):a.a.createElement(p,r({ref:n},c))}));function p(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=i.length,l=new Array(o);l[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:t,l[1]=r;for(var c=2;c<o;c++)l[c]=i[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},89:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return o})),i.d(n,"metadata",(function(){return l})),i.d(n,"toc",(function(){return r})),i.d(n,"default",(function(){return c}));var t=i(3),a=(i(0),i(109));const o={title:"Neutralino.window"},l={unversionedId:"api/window",id:"api/window",isDocsHomePage:!1,title:"Neutralino.window",description:"The Neutralino.window namespace contains methods related to the current native window instance.",source:"@site/docs/api/window.md",slug:"/api/window",permalink:"/docs/api/window",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/window.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.app",permalink:"/docs/api/app"},next:{title:"Neutralino.filesystem",permalink:"/docs/api/filesystem"}},r=[{value:"window.setTitle(title)",id:"windowsettitletitle",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"window.minimize()",id:"windowminimize",children:[]},{value:"window.maximize()",id:"windowmaximize",children:[]},{value:"window.unmaximize()",id:"windowunmaximize",children:[]},{value:"window.isMaximized()",id:"windowismaximized",children:[{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]},{value:"window.setFullScreen()",id:"windowsetfullscreen",children:[]},{value:"window.exitFullScreen()",id:"windowexitfullscreen",children:[]},{value:"window.isFullScreen()",id:"windowisfullscreen",children:[{value:"Return object (awaited):",id:"return-object-awaited-1",children:[]}]},{value:"window.show()",id:"windowshow",children:[]},{value:"window.hide()",id:"windowhide",children:[]},{value:"window.isVisible()",id:"windowisvisible",children:[{value:"Return object (awaited):",id:"return-object-awaited-2",children:[]}]},{value:"window.focus()",id:"windowfocus",children:[]},{value:"window.move(x, y)",id:"windowmovex-y",children:[{value:"Parameters",id:"parameters-1",children:[]}]},{value:"window.setIcon(icon)",id:"windowseticonicon",children:[{value:"Parameters",id:"parameters-2",children:[]}]},{value:"window.setDraggableRegion(domId)",id:"windowsetdraggableregiondomid",children:[{value:"Parameters",id:"parameters-3",children:[]}]},{value:"window.unsetDraggableRegion(domId)",id:"windowunsetdraggableregiondomid",children:[{value:"Parameters",id:"parameters-4",children:[]}]},{value:"window.setSize(Options)",id:"windowsetsizeoptions",children:[{value:"Options",id:"options",children:[]}]},{value:"window.create(url, WindowOptions)",id:"windowcreateurl-windowoptions",children:[{value:"Parameters",id:"parameters-5",children:[]},{value:"WindowOptions",id:"windowoptions",children:[]}]}],d={toc:r};function c({components:e,...n}){return Object(a.b)("wrapper",Object(t.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Neutralino.window")," namespace contains methods related to the current native window instance.\nThis namespace's methods will work only for the ",Object(a.b)("a",{parentName:"p",href:"/docs/configuration/modes#window"},Object(a.b)("inlineCode",{parentName:"a"},"window"))," mode."),Object(a.b)("h2",{id:"windowsettitletitle"},"window.setTitle(title)"),Object(a.b)("p",null,"Sets the title of the native window."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title")," String (optional): Title of the window. Clears the title, if the function was called without the parameter.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.setTitle('New title');\n")),Object(a.b)("h2",{id:"windowminimize"},"window.minimize()"),Object(a.b)("p",null,"Minimizes the native window."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.minimize();\n")),Object(a.b)("h2",{id:"windowmaximize"},"window.maximize()"),Object(a.b)("p",null,"Maximizes the native window."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.maximize();\n")),Object(a.b)("h2",{id:"windowunmaximize"},"window.unmaximize()"),Object(a.b)("p",null,"Restores the native window."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.unmaximize();\n")),Object(a.b)("h2",{id:"windowismaximized"},"window.isMaximized()"),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if the native window is maximized."),Object(a.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"true")," or ",Object(a.b)("inlineCode",{parentName:"li"},"false")," based on current maximized status.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let status = await Neutralino.window.isMaximized();\n")),Object(a.b)("h2",{id:"windowsetfullscreen"},"window.setFullScreen()"),Object(a.b)("p",null,"Enables the full screen mode."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.setFullScreen();\n")),Object(a.b)("h2",{id:"windowexitfullscreen"},"window.exitFullScreen()"),Object(a.b)("p",null,"Exits from the full screen mode."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.exitFullScreen();\n")),Object(a.b)("h2",{id:"windowisfullscreen"},"window.isFullScreen()"),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if the native window is in the full screen mode."),Object(a.b)("h3",{id:"return-object-awaited-1"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"true")," or ",Object(a.b)("inlineCode",{parentName:"li"},"false")," based on current full screen status.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let status = await Neutralino.window.isFullScreen();\n")),Object(a.b)("h2",{id:"windowshow"},"window.show()"),Object(a.b)("p",null,"Shows the native window."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.show();\n")),Object(a.b)("h2",{id:"windowhide"},"window.hide()"),Object(a.b)("p",null,"Hides the native window."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.hide();\n")),Object(a.b)("h2",{id:"windowisvisible"},"window.isVisible()"),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if the native window is visible."),Object(a.b)("h3",{id:"return-object-awaited-2"},"Return object (awaited):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"true")," or ",Object(a.b)("inlineCode",{parentName:"li"},"false")," based on current visibility status.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let status = await Neutralino.window.isVisible();\n")),Object(a.b)("h2",{id:"windowfocus"},"window.focus()"),Object(a.b)("p",null,"Focuses the native window."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.focus();\n")),Object(a.b)("h2",{id:"windowmovex-y"},"window.move(x, y)"),Object(a.b)("p",null,"Moves the native window into given coordinates. Neutralinojs's cross-platform coordinate system starts from top-left corner of the screen.\nIn other words, ",Object(a.b)("inlineCode",{parentName:"p"},"x=0,y=0")," point refers to the top-left corner of the device's main screen."),Object(a.b)("h3",{id:"parameters-1"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"x")," Number: A integer value for the horizontal position."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"y")," Number: A integer value for the vertical position.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.move(200, 400);\n")),Object(a.b)("h2",{id:"windowseticonicon"},"window.setIcon(icon)"),Object(a.b)("p",null,"Sets an icon for the native window or Dock.\xa0"),Object(a.b)("h3",{id:"parameters-2"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"icon")," String: Path of the icon. A ",Object(a.b)("inlineCode",{parentName:"li"},"200x200")," PNG image file works fine on all supported operating systems.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const icon = '/resources/icons/appIcon.png';\nawait Neutralino.window.setIcon(icon);\n")),Object(a.b)("h2",{id:"windowsetdraggableregiondomid"},"window.setDraggableRegion(domId)"),Object(a.b)("p",null,"Converts a given DOM element to a draggable region. The user will be able to drag the native window by dragging the given DOM element. This feature is suitable to make custom window bars along with the ",Object(a.b)("a",{parentName:"p",href:"../configuration/neutralino.config.json#modeswindowborderless-boolean"},"borderless mode"),"."),Object(a.b)("h3",{id:"parameters-3"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"domId")," String | HTMLElement: A DOM element identifier.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.setDraggableRegion('myCustomTitleBar');\n")),Object(a.b)("h2",{id:"windowunsetdraggableregiondomid"},"window.unsetDraggableRegion(domId)"),Object(a.b)("p",null,"Converts a draggable region to a normal DOM elements by removing drag event handlers."),Object(a.b)("h3",{id:"parameters-4"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"domId")," String | HTMLElement: A DOM element identifier.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.unsetDraggableRegion('myCustomTitleBar');\n")),Object(a.b)("h2",{id:"windowsetsizeoptions"},"window.setSize(Options)"),Object(a.b)("p",null,"This method sets the size of the window."),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"width")," Number (optional): Window width in pixels."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"height")," Number (optional): Window height in pixels."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"minWidth")," Number (optional): Minimum width of the window in pixels."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"minHeight")," Number (optional): Minimum height of the window in pixels."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"maxWidth")," Number (optional): Maximum width of the window in pixels."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"maxHeight")," Number (optional): Maximum height of the window in pixels."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"resizable")," Boolean (optional): A boolean value to make the window resizable or fixed.")),Object(a.b)("p",null,"This method always expects width and height couples.\nFor example, if you are setting ",Object(a.b)("inlineCode",{parentName:"p"},"minWidth"),", you should set ",Object(a.b)("inlineCode",{parentName:"p"},"minHeight")," too."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.setSize({\n    width: 500,\n    height: 200,\n    maxWidth: 600,\n    maxHeight: 400\n});\n\nawait Neutralino.window.setSize({\n    resizable: false\n});\n")),Object(a.b)("h2",{id:"windowcreateurl-windowoptions"},"window.create(url, WindowOptions)"),Object(a.b)("p",null,"Creates a native window. You can use this method to create new window for your multi-window Neutralinojs app.\nNeutralinojs spawns a new process for each native window. Therefore, the new window works as an isolated app once the window is created."),Object(a.b)("p",null,"However, you can build communication streams between windows with the ",Object(a.b)("a",{parentName:"p",href:"/docs/api/storage"},"storage API"),"."),Object(a.b)("h3",{id:"parameters-5"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"url")," String: URL to be loaded. Eg: ",Object(a.b)("inlineCode",{parentName:"li"},"/resources/aboutWindow.html"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"options")," (optional): an instance of ",Object(a.b)("inlineCode",{parentName:"li"},"WindowOptions")," type.")),Object(a.b)("h3",{id:"windowoptions"},"WindowOptions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title")," String: Window title."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"icon")," String: Window icon path."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fullScreen")," Boolean: Sets full screen mode."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"alwaysOnTop")," Boolean: Activates the top-most mode."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"enableInspector")," Boolean: Activates developer tools and opens the web inspector window."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"borderless")," Boolean: Makes the window borderless."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"maximize")," Boolean: Launches the window maximized."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hidden")," Boolean: Hides the window."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"maximizable")," Boolean: Makes the window maximizable or not."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"exitProcessOnClose")," Boolean: Exits the application process when the user clicks the window's close button."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"processArgs")," String: Additional command-line arguments for the new window process.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.window.create('/resources/aboutWindow.html', {\n    icon: '/resources/icons/aboutIcon.png',\n    enableInspector: false,\n    width: 500,\n    height: 300,\n    maximizable: false,\n    exitProcessOnClose: true,\n    processArgs: '--window-id=W_ABOUT'\n});\n")))}c.isMDXComponent=!0}}]);