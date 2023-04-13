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

let InstagramPost2 = new InstagramPost("@danielodediran", "Tech Bro with the swag", 
"https://www.instagram.com/danielodediran/img3", 140000, 35000)

/* 
Q. 3 Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

*/

function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location
    }
}