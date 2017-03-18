/**
 * Created by Toby Dustin on 17/03/2017.
 */

function main() {
    setInterval(change(),2000);
    console.log("hit");
    var q = document.getElementById("quote");
}
function checkSize() {
    if (window.innerWidth < 1000) {
        q.style.backgroundColor = "#fff";
    }
}
function change(){
    var funnies = ["Hachoo","Everything is online, except when it's not.","Who are you? who who who who.", "cOmPuTeRs R kOoL lOl","why did the number 6 laugh? because it was in binary. 101","I have no .idea what i'm doing.","I spent £100 on my laptop. Just sying...","undefined...jks","I live on NULL island","You can't spell success without cce.","I have slydexia... deslaxia... I  can't spell.","public static void main(String[] args){System.out.print('I know Java lol');}","'Look off screen Toby, it'll make you look cool'"];
    var random1 = Math.round(Math.random()*funnies.length);
    if (random1 == funnies.length){
        random1-=1;
    }
    document.getElementById("qot").innerHTML =funnies[random1];
}