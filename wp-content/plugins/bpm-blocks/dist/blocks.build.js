!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.blockEditor},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2),n(5),n(8),n(11)},function(e,t,n){"use strict";var l=n(3),a=(n.n(l),n(4)),__=(n.n(a),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/block-bpm-blocks",{title:__("bpm-blocks - CGB Block"),icon:"shield",category:"common",keywords:[__("bpm-blocks \u2014 CGB Block"),__("CGB Example"),__("create-guten-block")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("p",null,"\u2014 Hello from the backend."),wp.element.createElement("p",null,"CGB BLOCK: ",wp.element.createElement("code",null,"bpm-blocks")," is a new Gutenberg block"),wp.element.createElement("p",null,"It was created via"," ",wp.element.createElement("code",null,wp.element.createElement("a",{href:"https://github.com/ahmadawais/create-guten-block"},"create-guten-block")),"."))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement("p",null,"\u2014 Hello from the frontend."),wp.element.createElement("p",null,"CGB BLOCK: ",wp.element.createElement("code",null,"bpm-blocks")," is a new Gutenberg block."),wp.element.createElement("p",null,"It was created via"," ",wp.element.createElement("code",null,wp.element.createElement("a",{href:"https://github.com/ahmadawais/create-guten-block"},"create-guten-block")),"."))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(6),a=(n.n(l),n(7));n.n(a);!function(e,t,n,l,a,r){var o=l.createElement,c=t.RichText;e.registerBlockType("bpm-blocks/bpm-section-block-content",{title:n.__("Section with title and content","bpm-blocks"),icon:"smiley",category:"text",attributes:{title:{type:"array",source:"children",selector:"h2"},ingredients:{type:"array",source:"children",selector:".ingredients"},instructions:{type:"array",source:"children",selector:".steps"}},edit:function(e){var t=e.attributes;return o("div",{className:e.className},o(c,{tagName:"h2",inline:!0,placeholder:n.__("Put your title here","bpm-blocks"),value:t.title,onChange:function(t){e.setAttributes({title:t})}}),o("h3",{},n.__("The list","bpm-blocks")),o(c,{tagName:"ul",multiline:"li",placeholder:n.__("Add your list here","bpm-blocks"),value:t.ingredients,onChange:function(t){e.setAttributes({ingredients:t})},className:"ul-bpm-block"}),o("h3",{},n.__("Instructionss","bpm-blocks")),o(c,{tagName:"div",inline:!1,placeholder:n.__("Your text here","bpm-blocks"),value:t.instructions,onChange:function(t){e.setAttributes({instructions:t})}}))},save:function(e){var t=e.attributes;return o("section",{className:e.className},o("div",{className:"container"},o("div",{className:"row"},o("div",{className:"col-md-4"},o(c.Content,{tagName:"h2",value:t.title,className:"display-4 text-primary"})),o("div",{className:"col-md-8"},o(c.Content,{tagName:"ul",className:"ul-bpm-block",value:t.ingredients}),o(c.Content,{tagName:"div",className:"steps",value:t.instructions})))))}})}(window.wp.blocks,window.wp.editor,window.wp.i18n,window.wp.element,window.wp.components,window._)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(9),a=(n.n(l),n(10)),r=(n.n(a),n(0)),__=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,c=wp.editor.InnerBlocks;o("bpm-blocks/jumbotron-basic",{title:__("bpm-blocks - Jumbotron Basic"),icon:"smiley",category:"common",keywords:[__("bpm-blocks \u2014 Jumbotron Basic"),__("Jumbotron with background, left & right columns and base"),__("create-guten-block")],attributes:{jumbotron_h1:{type:"string",source:"text",selector:"h1"},jumbotron_h2:{type:"string",source:"text",selector:"h2"},jumbotron_p:{type:"string",source:"text",selector:"p"},jumbotron_btn_text:{selector:"a",source:"children"},jumbotron_btn_url:{selector:"a",source:"attribute",attribute:"href"}},edit:function(e){function t(t){e.setAttributes({jumbotron_h1:t})}function n(t){e.setAttributes({jumbotron_h2:t})}function l(t){e.setAttributes({jumbotron_p:t})}function a(t){e.setAttributes({jumbotron_btn_url:t})}function o(t){e.setAttributes({jumbotron_btn_text:t})}var s=e.attributes.jumbotron_h1,i=e.attributes.jumbotron_h2,m=e.attributes.jumbotron_p,u=e.attributes.jumbotron_btn_text,b=e.attributes.jumbotron_btn_url;return wp.element.createElement("div",{id:"block-editable-box",class:"bpm-editor-block"}," ",wp.element.createElement("label",null,"What's the H1?"),wp.element.createElement(r.RichText,{format:"string",className:e.className,onChange:t,value:s,placeholder:"H1 text"}),wp.element.createElement("label",null,"What's the H2?"),wp.element.createElement(r.RichText,{format:"string",className:e.className,onChange:n,value:i,placeholder:"H1 text"}),wp.element.createElement("label",null,"What's the p tag?"),wp.element.createElement(r.RichText,{format:"string",className:e.className,onChange:l,value:m,placeholder:"H1 text"}),wp.element.createElement("label",null,"CTA button text:"),wp.element.createElement(r.RichText,{className:e.className,onChange:o,value:u,placeholder:"Name of the link"}),wp.element.createElement("label",null,"CTA button URL:"),wp.element.createElement(r.RichText,{format:"string",className:e.className,onChange:a,value:b,placeholder:"URL of the link"}),wp.element.createElement("label",null,"Select the image for the right side"),wp.element.createElement(c,{allowedBlocks:["core/image"]}))},save:function(e){return wp.element.createElement("div",{class:"jumbotron"},wp.element.createElement("div",{class:"jumbotron-bg"}),wp.element.createElement("div",{class:"jumbotron-main"},wp.element.createElement("div",{class:"container"},wp.element.createElement("div",{class:"row"},wp.element.createElement("div",{class:"col-md-6 jumbotron-text"},wp.element.createElement("p",{class:""},e.attributes.jumbotron_p),wp.element.createElement("h1",{class:"animated fadeInDown"},e.attributes.jumbotron_h1),wp.element.createElement("h2",{class:"animated fadeInDown"},e.attributes.jumbotron_h2),wp.element.createElement("p",{class:"animated fadeInUpBig"},wp.element.createElement("a",{href:e.attributes.jumbotron_btn_url,class:"btn btn-lg btn-primary btn-pulse"},e.attributes.jumbotron_btn_text))),wp.element.createElement("div",{class:"col-md-6 jumbotron-img"},wp.element.createElement(c.Content,null))))),wp.element.createElement("div",{class:"jumbotron-base"},wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1280 70",class:"jumbotron-base-curve"},wp.element.createElement("polygon",{points:"1280 70 0 70 0 0"}))))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(12),a=(n.n(l),n(13)),r=(n.n(a),n(0)),__=(n.n(r),wp.i18n.__);(0,wp.blocks.registerBlockType)("bpm-blocks/simple-link",{title:__("bpm-blocks - Simple Link"),icon:"smiley",category:"common",keywords:[__("bpm-blocks \u2014 Simple link"),__("from https://medium.com/@eudestwt/how-to-make-an-editable-wordpress-gutenberg-block-e8641b3e4b75"),__("create-guten-block")],attributes:{link_text:{selector:"a",source:"children"},link_url:{selector:"a",source:"attribute",attribute:"href"}},edit:function(e){function t(t){e.setAttributes({link_url:t})}function n(t){e.setAttributes({link_text:t})}var l=e.attributes.link_text,a=e.attributes.link_url;return wp.element.createElement("div",{id:"block-editable-box"}," ",wp.element.createElement("p",null,"Sample Link Block"),wp.element.createElement("label",null,"Name:"),wp.element.createElement(r.RichText,{className:e.className,onChange:n,value:l,placeholder:"Name of the link"}),wp.element.createElement("label",null,"URL:"),wp.element.createElement(r.RichText,{format:"string",className:e.className,onChange:t,value:a,placeholder:"URL of the link"}))},save:function(e){return wp.element.createElement("a",{href:e.attributes.link_url},e.attributes.link_text)}})},function(e,t){},function(e,t){}]);