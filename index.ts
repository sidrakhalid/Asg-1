console.log("Hello World!");

//Quest 2,3 ---------------------------------------------------------------------------
let myName:string="Sidra khalid";
console.log("Hello "+myName+ " how are you today?");
console.log("Printing cases:Upper, lower and title \n");

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

function titleCase() {
    var sentence = myName.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 return sentence;

 }
 var title = titleCase();
 console.log(title);


 //Question 4,5 -------------------------------------------------------------------------------
 let author="Albert Einstein";
 let quote="\"A person who never made a mistake never tried anything new.\"";
 console.log(author +"once said, "  +quote );

 console.log("-------------------------------------------\n");
 //Question 6 -------------------------------------------------------------------------------
 let personName="\t \t Albert Einstein\n"
 console.log(personName);
 console.log("Aftrer stripping white spaces: ");
 console.log(personName.trim());
 console.log("-------------------------------------------\n");
  //Question 7,8,9,10 -------------------------------------------------------------------------------
  console.log(5+3);
  console.log(10-2);
  console.log(2*4);
  console.log(16/2);
  console.log("-------------------------------------------\n");
  let favNum=7;
  let message="My favourite number is: "+favNum;
  //print this meesage to display fav num
  console.log(message);
  console.log("-------------------------------------------\n");
   //Question 11,12,13 -------------------------------------------------------------------------------
   let Names=["Tehreem" ,"Sana","Noor", "Arsala"];
for(var i=0; i<4;i++)
{
    console.log(Names[i] +" "+message);
}
let vehicles=["motorcycle", "van" , "bus" , "rickshaw","car"];
console.log("I would like to go by "+vehicles[3]);
console.log("-------------------------------------------\n");
 //Question 14 ,15 , 16 -------------------------------------------------------------------------------
 let persons=["Marwa", "Arham","Ibrahim", "Ahad"];
 for(let i=0; i<persons.length;i++)
{
    console.log(persons[i] +" you are invited to the dinner");
}
console.log("-------------------------------------------\n");
console.log(persons[1]+" will not be able to make it to the dinner.");
persons[1]="Sidra";
for(let i=0; i<persons.length;i++)
{
    console.log(persons[i] +" you are invited to the dinner");
}
console.log("-------------------------------------------\n");
console.log("We have found a bigger dinning table");
persons.splice(0,0,"Ali");
persons.splice(3,0,"Ahmad");
persons.push("Zaeem");

//append???????

for(let i=0; i<persons.length;i++)
{
    console.log(persons[i] +" you are invited to the dinner");
}

//Question 17 --------------------------------------------------------
console.log("-------------------------------------------\n");
console.log("New dinner table din't come on time, I can invite only two guests now. \n");
for(let i=persons.length-1; i>1 ;i--)
{
    console.log(persons[i] +" you are NOT invited to the dinner anymore ");
    persons.pop();
}

for(let i=0; i<persons.length;i++)
{
    console.log(persons[i] +" you are invited to the dinner");
}

//removing last two names also to empty the list
for(let i=0; i<=persons.length;i++)
{
    persons.pop();
}
for(let i=0; i<persons.length;i++)
{
    console.log(persons[i] +"List of persons ");
}


//Question 18-------------------------------------------------------------------------------
console.log("-------------------------------------------\n");
let locations=["America", "Switzerland","France" ,"Germany", "Deosai"];
for(let i=0; i<locations.length;i++)
{
    console.log(locations[i] + "\t");
}
console.log("------------------");
console.log("Sorted array");
let sorted = [...locations].sort();
for(let i=0; i<sorted.length;i++)
{
    console.log(sorted[i] + "\t");
}
console.log("------------------");
console.log("Original array");
for(let i=0; i<locations.length;i++)
{
    console.log(locations[i] + "\t");
}
let reversed=[...sorted].reverse();
console.log("------------------");
console.log("Reversed array");
for(let i=0; i<reversed.length;i++)
{
    console.log(reversed[i] + "\t");
}
console.log("------------------");
console.log("Original array");
for(let i=0; i<locations.length;i++)
{
    console.log(locations[i] + "\t");
}
locations.reverse();
console.log("------------------");
console.log("Reversed original array");
for(let i=0; i<locations.length;i++)
{
    console.log(locations[i] + "\t");
}

locations.reverse();
console.log("------------------");
console.log("Reversed to original order array");
for(let i=0; i<locations.length;i++)
{
    console.log(locations[i] + "\t");
}
console.log("------------------");
console.log("Original array Sorted to Alphabetical order array");
locations.sort();
for(let i=0; i<locations.length;i++)
{
    console.log(locations[i] + "\t");
}
console.log("------------------");
console.log("Original array Sorted to reverse Alphabetical order array");
locations.reverse();
for(let i=0; i<locations.length;i++)
{
    console.log(locations[i] + "\t");
}

//Question 19--------------------------------------------
console.log("-----------------------------------------");
console.log("Number of guests invited to dinner: ");
persons.push("Hira");
persons.push("Azeem");
persons.forEach(element => console.log(element));


//Question 20--------------------------------------------
console.log("-----------------------------------------");
const rivers=["jehlum", "chanab", "ravi","satluj"];
console.log("List of rivers: ");
rivers.forEach(river=>console.log(river));