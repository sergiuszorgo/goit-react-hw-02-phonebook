(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},2:function(t,e,n){t.exports={ContactBox:"ContactList_ContactBox__1qISR",ContactList:"ContactList_ContactList__3aWAl",ContactListItem:"ContactList_ContactListItem__2yL8h",ContactListName:"ContactList_ContactListName__3GFez"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),s=(n(17),n(11)),i=n(3),u=n(4),l=n(6),m=n(5),h=(n(18),n(12)),j=n(2),b=n.n(j),f=n(0),C=function(t){var e=t.contacts,n=t.deleteContact;return Object(f.jsxs)("div",{className:b.a.ContactBox,children:[Object(f.jsxs)("h2",{children:["Contacts: ",e.length]}),Object(f.jsx)("ul",{className:b.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:b.a.ContactListItem,children:[Object(f.jsxs)("p",{className:b.a.ContactListName,children:[a,": ",c]}),Object(f.jsx)("button",{onClick:function(){return n(e)},children:"Remoove"})]},e)}))})]})},d=n(10),p=n(8),O=n.n(p),x=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.resetForm=function(){t.setState({name:"",number:""})},t.pushContact=function(e){e.preventDefault(),t.props.addContact(t.state),t.resetForm()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:O.a.formList,children:[Object(f.jsxs)("label",{htmlFor:this.nameInputId,children:["Name:",Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.inputChange})]}),Object(f.jsxs)("label",{children:["Number:",Object(f.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.inputChange})]}),Object(f.jsx)("button",{className:O.a.formBtn,onClick:this.pushContact,children:"Add contact"})]})}}]),n}(a.Component),v=function(t){var e=t.filter,n=t.inputForm;return Object(f.jsxs)("label",{htmlFor:"",children:["Find contact by name"," ",Object(f.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},L=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.checkContact=function(e){return t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(h.a)(),name:n,number:a};t.checkContact(n)?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.renderContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.renderContacts();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{addContact:this.addContact}),Object(f.jsx)(v,{filter:this.state.filter,inputForm:this.changeFilter}),Object(f.jsx)(C,{contacts:t,deleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={formList:"ContactForm_formList__2zo8q",formBtn:"ContactForm_formBtn__1RT7i"}}},[[20,1,2]]]);
//# sourceMappingURL=main.0c3ba546.chunk.js.map