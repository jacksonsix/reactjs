// obj tree 

function write(data) {
	console.log(data);
}


function addhead() {
	write("import  React from 'react';");
	write("import ReactDOM from 'react-dom';");
}
labeltag = {};
labeltag.tag = 'Label';

labeltag.children = [];
labeltag.props = [];
labeltag.hasChildren =  function() { return labeltag.children.length > 0; }

function toreact (obj) {
	write('<' +obj.tag);
	// props
	for(var i = 0; i < obj.props.length ; i++) {
		var kv = {};
		kv.text = obj.props[i];
		kv.out ='     ';
		
		var c = kv.text.indexOf(':');		
		kv.key =  kv.text.substring(0,c) ;
		kv.value =  kv.text.substring(c+ 1);
		
		//kv.out =  Object.assign({}, kv.out , kv.key);
		kv.out  = kv.out.concat(kv.key );
		kv.out  = kv.out.concat(' = ');
		kv.out  = kv.out.concat(kv.value);
		kv.out  = kv.out.concat(' ');
		write(kv.out);
	}
	// children
	for(var i = 0; i< obj.children.length; i++) {
		var child = obj.children[i];
		toreact(child);
	}
	
	if(obj.hasChildren()){
     	write('</' + obj.tag+ '>');
	}
	else {
		write(' />');
	}
	
}

labeltag.props.push('ref:"text"');
labeltag.props.push('color:"red"');

var inner = {};
inner.tag = 'Label';

inner.children = [];
inner.props = [];
inner.hasChildren =  function() { return inner.children.length > 0; }
inner.props.push('ref:"text"');
inner.props.push('color:"blue"');

labeltag.children.push(inner);

toreact(labeltag);
