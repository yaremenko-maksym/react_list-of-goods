(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(4),i=n.n(s),o=n(2),c=n(5),r=n(6),l=n(8),a=n(7),u=n(1),b=n.n(u),h=(n(13),n(14),n(0)),j=b.a.memo((function(t){var e=t.list;return Object(h.jsxs)("ul",{className:"list",children:[e.length>0&&Object(h.jsx)("h1",{className:"title",children:"Goods count ".concat(e.length)}),e.map((function(t){return Object(h.jsx)("li",{className:"list__item",children:t},t)}))]})})),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(t){Object(l.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={visibleGoods:[],isStartVisible:!0,isReversed:!1,minLength:1},t.start=function(){t.setState((function(t){return{visibleGoods:d,isStartVisible:!t.isStartVisible}}))},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed,visibleGoods:Object(o.a)(t.visibleGoods).reverse()}}))},t.sortList=function(){t.setState((function(t){return{visibleGoods:Object(o.a)(t.visibleGoods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.resetList=function(){t.setState({visibleGoods:d,minLength:1})},t.sortLength=function(){t.setState((function(t){return{visibleGoods:Object(o.a)(t.visibleGoods).sort((function(t,e){return t.length-e.length}))}}))},t.filterLength=function(e){var n=e.target.value;t.setState({minLength:+n})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.visibleGoods,n=t.isStartVisible,s=t.minLength,i=e.filter((function(t){return t.length>=s}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{list:i}),n?Object(h.jsx)("button",{type:"button",onClick:this.start,className:"start",children:"Start"}):Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",onClick:this.reverseList,className:"button",children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sortList,className:"button",children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.resetList,className:"button",children:"Reset"}),Object(h.jsx)("button",{type:"button",onClick:this.sortLength,className:"button",children:"Sort by length"}),Object(h.jsxs)("select",{name:"length",onChange:this.filterLength,value:s,className:"select",children:[Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"}),Object(h.jsx)("option",{value:"4",children:"4"}),Object(h.jsx)("option",{value:"5",children:"5"}),Object(h.jsx)("option",{value:"6",children:"6"}),Object(h.jsx)("option",{value:"7",children:"7"}),Object(h.jsx)("option",{value:"8",children:"8"}),Object(h.jsx)("option",{value:"9",children:"9"}),Object(h.jsx)("option",{value:"10",children:"10"})]})]})]})}}]),n}(b.a.PureComponent),p=v;i.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5d61056e.chunk.js.map