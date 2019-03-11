a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
d = document.getElementById("slot4");
e = document.getElementById("slot5");
f = document.getElementById("slot6");
g = document.getElementById("slot7");
h = document.getElementById("slot8");
i = document.getElementById("slot9");
j = document.getElementById("slot10");
k = document.getElementById("slot11");
l = document.getElementById("slot12");
m = document.getElementById("slot13");
n = document.getElementById("slot14");
o = document.getElementById("slot15");
p = document.getElementById("slot16");
q = document.getElementById("slot17");

function anagram(el){
	if (el.src.match("images/a.png")){
		el.src = "images/e.png";	
	} else if (el.src.match("images/e.png")){
		el.src = "images/h.png";
	} else if (el.src.match("images/h.png")){
		el.src = "images/o.png";
	} else if (el.src.match("images/o.png")){
		el.src = "images/b.png";
	} else if (el.src.match("images/b.png")){
		el.src = "images/i.png";
	} else if (el.src.match("images/i.png")){
		el.src = "images/m.png";
	} else if (el.src.match("images/m.png")){
		el.src = "images/n.png";
	} else if (el.src.match("images/n.png")){
		el.src = "images/a.png";
	} else {
		// do nothing
	}
}

function anagram1(el){
	if (el.src.match("images/o.png")){
		el.src = "images/r.png";	
	} else if (el.src.match("images/r.png")){
		el.src = "images/y.png";
	} else if (el.src.match("images/y.png")){
		el.src = "images/h.png";
	} else if (el.src.match("images/h.png")){
		el.src = "images/a.png";
	} else if (el.src.match("images/a.png")){
		el.src = "images/d.png";
	} else if (el.src.match("images/d.png")){
		el.src = "images/s.png";
	} else if (el.src.match("images/s.png")){
		el.src = "images/p.png";
	} else if (el.src.match("images/p.png")){
		el.src = "images/o.png";
	} else {
		// do nothing
	}
}

function jackpot(el) {
	if (a.src.match("images/b.PNG") && b.src.match("images/o.PNG") && c.src.match("images/h.PNG") && d.src.match("images/e.PNG") && e.src.match("images/m.PNG") && f.src.match("images/i.PNG") && g.src.match("images/a.PNG") && h.src.match("images/n.PNG") && i.src.match("images/space.PNG") && j.src.match("images/r.PNG") && k.src.match("images/h.PNG")&& l.src.match("images/a.PNG") && m.src.match("images/p.PNG") && n.src.match("images/s.PNG") && o.src.match("images/o.PNG") && p.src.match("images/d.PNG") && q.src.match("images/y.PNG")){
		console.log("You Win!");
		a.classList.add("opaque");
		b.classList.add("opaque");
	}else {
	}
}