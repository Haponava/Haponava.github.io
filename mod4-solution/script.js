var names=new Array();
names[0]="Yaakov";
names[1]="Jack";
names[2]="John";
names[3]="jim";
names[4]="sam";
names[5]="mads";
names[6]="emma";
names[7]="odry";
names[8]="sean";
names[9]="jakob";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}