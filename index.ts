console.log("Hello World!");

//Quest 2,3 ---------------------------------------------------------------------------
let myName: string = "Sidra khalid";
console.log("Hello " + myName + " how are you today?");
console.log("Printing cases:Upper, lower and title \n");

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

function titleCase(name: string) {
    var sentence = name.toLowerCase().split(" ");
    const titlecase = sentence.map((word) => word[0].toUpperCase() + word.slice(1));
    //for(var i = 0; i< sentence.length; i++){
    //  sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    //}
    return titlecase.join(" ");

}
var title = titleCase(myName);
console.log(title);


//Question 4,5 -------------------------------------------------------------------------------
let author = "Albert Einstein";
let quote = "\"A person who never made a mistake never tried anything new.\"";
console.log(author + " once said," + quote);

console.log("-------------------------------------------\n");
//Question 6 -------------------------------------------------------------------------------
let personName = "\t \t Albert Einstein\n"
console.log(personName);
console.log("After stripping white spaces: ");
console.log(personName.trim());


console.log("-------------------------------------------\n");
//Question 7,8,9,10 -------------------------------------------------------------------------------
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
console.log("-------------------------------------------\n");
let favNum = 7;
let message = "My favourite number is: " + favNum;
//print this meesage to display fav num
console.log(message);


console.log("-------------------------------------------\n");
//Question 11,12,13 -------------------------------------------------------------------------------
let Names = ["Tehreem", "Sana", "Noor", "Arsala"];
for (var i = 0; i < 4; i++) {
    console.log(Names[i] + " " + message);
}
let vehicles = ["motorcycle", "van", "bus", "rickshaw", "car"];
console.log("I would like to go by " + vehicles[3]);


console.log("-------------------------------------------\n");
//Question 14 ,15 , 16 -------------------------------------------------------------------------------
let persons = ["Marwa", "Arham", "Ibrahim", "Ahad"];
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i] + " you are invited to the dinner");
}
console.log("-------------------------------------------\n");
console.log(persons[1] + " will not be able to make it to the dinner.");
persons[1] = "Sidra";
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i] + " you are invited to the dinner");
}
console.log("-------------------------------------------\n");
console.log("We have found a bigger dinning table");
persons.splice(0, 0, "Ali");
persons.splice(3, 0, "Ahmad");
persons.push("Zaeem");

//append???????

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i] + " you are invited to the dinner");
}

//Question 17 --------------------------------------------------------
console.log("-------------------------------------------\n");
console.log("New dinner table din't come on time, I can invite only two guests now. \n");
for (let i = persons.length - 1; i > 1; i--) {
    console.log(persons[i] + " you are NOT invited to the dinner anymore ");
    persons.pop();
}

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i] + " you are invited to the dinner");
}

//removing last two names also to empty the list
for (let i = 0; i <= persons.length; i++) {
    persons.pop();
}
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i] + "List of persons ");
}


//Question 18-------------------------------------------------------------------------------
console.log("-------------------------------------------\n");
let locations = ["America", "Switzerland", "France", "Germany", "Deosai"];
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i] + "\t");
}
console.log("------------------");
console.log("Sorted array");
let sorted = [...locations].sort();
for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i] + "\t");
}
console.log("------------------");
console.log("Original array");
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i] + "\t");
}
let reversed = [...sorted].reverse();
console.log("------------------");
console.log("Reversed array");
for (let i = 0; i < reversed.length; i++) {
    console.log(reversed[i] + "\t");
}
console.log("------------------");
console.log("Original array");
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i] + "\t");
}
locations.reverse();
console.log("------------------");
console.log("Reversed original array");
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i] + "\t");
}

locations.reverse();
console.log("------------------");
console.log("Reversed to original order array");
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i] + "\t");
}
console.log("------------------");
console.log("Original array Sorted to Alphabetical order array");
locations.sort();
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i] + "\t");
}
console.log("------------------");
console.log("Original array Sorted to reverse Alphabetical order array");
locations.reverse();
for (let i = 0; i < locations.length; i++) {
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
const rivers = ["jehlum", "chanab", "ravi", "satluj"];
console.log("List of rivers: ");
rivers.forEach(river => console.log(river));


//Question 21--------------------------------------------
console.log("-----------------------------------------");
let myfavobject = {
    river: "jehlum",
    fruit: "apple",
    vegetable: "okra"
}
console.log(myfavobject.fruit);



//Question 22 intentional error--------------------------------------------
console.log("-----------------------------------------");
for (let i = 0; i <= rivers.length; i++) {
    console.log(rivers[i]);
}

//Question 23 --------------------------------------------
console.log("-----------------------------------------");
let car = 'subaru';
console.log("1. Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
let age = 31;
console.log("2. Is age is > than 30 ? I predict True ");
console.log(age > 30);
let grade = 'A';
console.log("3. Is grade = B ? I predict False ");
console.log(grade == 'B');
let won = true;
console.log("4. Did they win the match ? I predict True ");
console.log(won == true);


//Question 24 --------------------------------------------
console.log("-----------------------------------------");
//with strings
let bigBrother = "Arham";
let youngerBrother = "Rahim"
let winnerName = "Arham";
if (winnerName == "Arhams") {
    console.log("I am the Elder Brother Arham");
}
else
    console.log("I am the younger Brother Rahim ");

//lowercase
if (winnerName.toLowerCase() == "arham") {
    console.log("It's the lower case arham")
}
else
    console.log("It's the capital case Arham");
let marks = 50;
if (marks > 80) {
    console.log("Your grade is A")
}
else if (marks == 50) {
    console.log("Your have scored 50 marks ")
}
else if (marks < 50) {
    console.log("Your have scored less than 50 marks ")
}
else if (marks > 50) {
    console.log("Your have scored greater than 50 marks ")
}
else
    console.log("Bye bye")
if (marks > 50 && marks == 50) {
    console.log("Marks are greater and equal to 50")
}
if (marks > 80 || marks == 50) {
    console.log("Marks are equal to 50")
}
let items = ["hairband", "pony", "ring", "donut", "cup", "gum"];
console.log("Does this items list includes pony? " + items.includes("pony"))
console.log("Does this items list includes plate? " + items.includes("plate"))


//Question 25 --------------------------------------------
console.log("-----------------------------------------");
let alien_color = 'green';
if (alien_color == "green")
    console.log("Yaye alien's color is green, you have earned 5 points");
if (alien_color == 'yellow')
    console.log("It's not yellow!! ");


//Question 26 --------------------------------------------
console.log("-----------------------------------------");
alien_color = "yellow"
if (alien_color == 'green') {
    console.log("alien is green and you have just earned 5 points for shooting the alien");
}
else if (alien_color != 'green')
    console.log("alien is " + alien_color + " you just earned 10 points");


//Question 27 --------------------------------------------pass as same as 26
console.log("-----------------------------------------");


//Question 28 --------------------------------------------
console.log("-----------------------------------------");
let person_age = 19;
if (person_age < 2)
    console.log("You are a baby")
else if (person_age >= 2 && person_age < 4)
    console.log("You are a toddler")
else if (person_age >= 4 && person_age < 13)
    console.log("You are a Kid")
else if (person_age >= 13 && person_age < 20)
    console.log("You are a teenager")
else if (person_age >= 20 && person_age < 65)
    console.log("You are a adult")
else if (person_age >= 65)
    console.log("You are an elder")


//Question 29 --------------------------------------------
console.log("-----------------------------------------");
let fav_fruit = ["mango", "banana", "apple"];
if (fav_fruit.includes("banana"))
    console.log("You really like bananas");
if (fav_fruit.includes("mango"))
    console.log("You really like Mango");
if (fav_fruit.includes("apple"))
    console.log("You really like apple");
if (fav_fruit.includes("Mango"))
    console.log("You really like mango");
if (fav_fruit.includes("kiwi"))
    console.log("You really like kiwi");


//Question 30 --------------------------------------------
console.log("-----------------------------------------");
let user_name = ["Eric", "admin", "John", "Julie", "David"];
for (let i = 0; i < user_name.length; i++) {
    if (user_name[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?")
    }
    else console.log("Hello " + user_name[i] + ", thank you for logging in again.");
}


//Question 31 --------------------------------------------
console.log("-----------------------------------------");
if (user_name == null) {
    console.log("List is empty, We need to find users! ");
}
else console.log("list is not empty ");
user_name.length = 0;
if (user_name.length == 0) {
    console.log("List is empty, We need to find users! ");
}
else console.log("list is still not empty ");


//Question 32 --------------------------------------------
console.log("-----------------------------------------");
let current_users = ["Jim", "BEN", "Daisy", "Flora", "Mick"];
let new_users = ["jim", "Lucy", "Ben", "Jimmy", "Adam"];
let flag = false;
for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            console.log(new_users[i] + " is not available, You need a new user name ");
            flag = true;
            break;
        }
    }
    if (!flag) console.log(new_users[i] + " This user name is avilable.")

}


//Question 33 --------------------------------------------
console.log("-----------------------------------------");
let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] == 1)
        console.log(ordinal_numbers[i] + "st");
    else if (ordinal_numbers[i] == 2)
        console.log(ordinal_numbers[i] + "nd");
    else if (ordinal_numbers[i] == 3)
        console.log(ordinal_numbers[i] + "rd");
    else
        console.log(ordinal_numbers[i] + "th");
}

//Question 34 --------------------------------------------
console.log("-----------------------------------------");
let pizza_type = ["pepporoni", "barbeque", "tikka", "fajita"];
pizza_type.forEach(pizza => console.log("I like " + pizza + " pizza"));
console.log("I really like pizza");


//Question 35 --------------------------------------------
console.log("-----------------------------------------");
let pet_animals = ["Dog", "Cat", "Rabbit"];
for (let i = 0; i < pet_animals.length; i++) {
    console.log("A " + pet_animals[i] + " would make a great Pet!!");
}
console.log("These animals are faithful ")


//Question 36 --------------------------------------------
console.log("-----------------------------------------");
function make_shirt(size: string, message: string) {
    console.log("This is " + size + " sized shirt")
    console.log(message);
}

let s = "Medium";
let shirt_message = "I am a cute Panda!!";
make_shirt(s, shirt_message);


//Question 37 --------------------------------------------
console.log("-----------------------------------------");
function large_shirt(size: string = 'large', message: string = "I love TypeScript.") {
    console.log("This is a " + size + " sized shirt");
    console.log(message);
}
large_shirt('medium');
large_shirt("small", "Hey PIAC");


//Question 38 --------------------------------------------
console.log("-----------------------------------------");
function describe_city(city: string = 'Karachi', country: string = 'Pakistan') {
    console.log(city + " is in " + country);
}

describe_city("Lahore");
describe_city();
describe_city("Paris", "France");


//Question 39 --------------------------------------------
console.log("-----------------------------------------");
function city_country(city_name: string, country: string) {
    return ("" + city_name + "," + country + "");
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("London", "England"));


//Question 40 --------------------------------------------
console.log("-----------------------------------------");
function make_album(artist_name: string, album_title: string, no_of_tracks: number = 0) {
    const album = {
        Artist_name: artist_name,
        Album_title: album_title,
        No_of_Tracks: no_of_tracks > 0 ? no_of_tracks : "",
    };
    return album;
}

console.log(make_album("Junaid Jamshed", "Bewafa", 9));
console.log(make_album("David B.", "Shallow", 12));
console.log(make_album("EK", "Numb"));

//Question 41 --------------------------------------------
console.log("-----------------------------------------");
let magician_name = ["Eric", "David", "John"];
function show_magicians(magicians: string[]) {
    magicians.forEach(element => console.log(element));
}

show_magicians(magician_name);


//Question 42 --------------------------------------------
console.log("-----------------------------------------");
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    //magicians.forEach(magician=>"The Great "+magician);
}
//make_great(magician_name);
show_magicians(magician_name);


//Question 43 --------------------------------------------
console.log("-----------------------------------------");

let new_magician_name = [...magician_name];
make_great(new_magician_name);
show_magicians(new_magician_name);
show_magicians(magician_name);


//Question 44 --------------------------------------------
console.log("-----------------------------------------");
let sandwitch_items = ["Cabbage", "Chicken", "Cheese", "Cucumber", "Egg", "Oil", "Sausage", "Tomatoe"]
function sandwitch(items: string[]) {
    console.log("The sandwitch includes ");
    items.forEach(element => console.log(element));
}

sandwitch(["Cabbage", "Chicken"]);
sandwitch(sandwitch_items.slice(1, 4));
sandwitch(["Cheese", "Egg"]);



//Question 45 --------------------------------------------
console.log("-----------------------------------------");

function car_info(manufacturer: string, model: string, ...args:string[]) {
    const Car = {
        manufacturer: manufacturer,
        model: model,
        args:args
    }
    return Car;
}

console.log(car_info("Honda", "2019","color","white"));