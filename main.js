document.getElementById("okay").addEventListener("click", function() {

        var img = document.createElement("img");
        img.src = "Accepted.gif"; // 
        img.alt = "Image";


        document.body.appendChild(img);


        alert("Thank you for being honest with me. I really appreciate your response, and I'm glad to know that you feel the same way. I'm looking forward to getting to know you better and spending more time together.");

    });
    
    
    function moveButton() {
            const button = document.getElementById('moveButton');
            const maxX = window.innerWidth - button.clientWidth;
            const maxY = window.innerHeight - button.clientHeight;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            button.style.left = `${randomX}px`;
            button.style.top = `${randomY}px`;
        }
        
        
     
             const imageContainer = document.getElementById('imageContainer');
        const replaceWithImageButton = document.getElementById('okay');
        

        const imageUrl = 'Accepted.gif';

        replaceWithImageButton.addEventListener('click', () => {

            const newImage = document.createElement('img');
            newImage.src = imageUrl;
            newImage.alt = 'Specific Image';


            document.body.innerHTML ="<span class='love-text'>I'm looking forward to getting to know you even better and building something special together.</span>";


            document.body.appendChild(newImage);
            
                    
        });
        
        
 let clickCount = -7;
const maxClicks = 3; 

const button = document.getElementById('moveButton');

button.addEventListener('click', () => {
    clickCount++;

    if (clickCount >= maxClicks) {
        button.style.display = 'none';
    }
});
let username = window.prompt("Enter Your name");
let word = document.getElementById("name");
word.textContent = username;
document.getElementById("name").innerHTML = username;
alert("hi") 
alert(username)
confirm("Can I have your attention for a bit?")
alert("thanks god you didn't cancel")
confirm("Btw, how was your day? Are you doing fine lately?") 
alert("If not, always remember that I'm always here for you. I can cheer you up with some ice cream basta treat mo.")
alert("Joke lang of course, Just always remember that every problem has a solution. Just don't give up, and you'll find the true value of living.")
alert("btw I'm here to confess you're so ganda not only beautiful but also smart first encounter with you feels so unreal!")
confirm("I'm shocked. I didn't know that such an impeccable girl still exists in this generation. I know you aren't perfect, but still, you never fail to amaze me. Agree kaman?")
alert("Even though we never interact or did interact, I like you no matter what. No one can change that. Enjoy the rest and have a nice day. Just always remember to keep a smile on your face; it will make my day complete. Thank you for the time.")
