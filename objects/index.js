/*
Q. 1 Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, 

*/

function InstagramPost(authorHandle, content, imageLink, noOfViews, noOfLikes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.noOfViews = noOfViews;
    this.noOfLikes = noOfLikes;
}

/*
Q. 2 Create 2 Instagram post objects from the constructor function you created above
*/

let InstagramPost1 = new InstagramPost("@bmeera", "Myra to the world!",
"https://www.instagram.com/@bmeera/img1", 200000, 100000)
console.log(InstagramPost1)

let InstagramPost2 = new InstagramPost("@danielodediran", "Tech Bro with the swag", 
"https://www.instagram.com/danielodediran/img3", 140000, 35000)
console.log(InstagramPost2)

/* 
Q. 3 Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

3a. Using the factory method, implement a createPerson() factory function
 that takes name, age and location as arguments. 
 Afterwards, create an object representing Musa from the factory function. 

*/

function CreatePerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location
    }
}

let Musa = CreatePerson("Musa Dawodu", 19, "Lekki, Lagos State")

/*
3b Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the 
object as a property to Musa object you created above in (a) above
*/

function CreateJambScores(eng, govt, lit, crk) {
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    }
}

let MusaJambScores = CreateJambScores(70,85,82,94)

Musa.MusaJambScores = MusaJambScores;

console.log(Musa);

/*
Q. 4 What are the different ways you can clone an object? Give examples for each of them.
*/

//There are three different ways to clone or make a copy of an object
//Let us clone this object

let amyPhotograph = {
    height: 24.6,
    width: 45.4,
    colors: "black, white, red and purple",
    imageDescription: "a hand-drawn portrait of Amy smiling"
}

//Method 1 - using Object.assign()

let baniPhotograph = Object.assign({}, amyPhotograph)
baniPhotograph.imageDescription = "a hand-drawn portrait of Bani laughing"

console.log(amyPhotograph);
console.log(baniPhotograph);

//Method 2 - using spread syntax (...)
let jomiPhotograph = {...amyPhotograph}
jomiPhotograph.imageDescription = "an AI-drawn picture of Jomi swimming"
console.log(jomiPhotograph);

//Method 3 - using JSON.parse(JSON.stringify(object_name))
//JSON stands for JavaScript Object Notation. it's a format for representing data in JS

let davidPhotograph = JSON.parse(JSON.stringify(amyPhotograph));
davidPhotograph.name = "David"
console.log(davidPhotograph);

/*
As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
*/

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 

for(key in presidentialCandidates) {
    console.log(presidentialCandidates[key]+ " is the presidential candidate of "+ key);
}

console.log("\nGo out and vote!");
