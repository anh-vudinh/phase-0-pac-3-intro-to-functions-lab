function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
    return string;
}

function logWhisper(string){
    console.log(string.toLowerCase());
    return string;
}


function sayHiToGrandma(string){
    if(string === string.toLowerCase()){
        return string = "I can't hear you!";
    }
    else if (string === string.toUpperCase()){
        return string = "YES INDEED!";
    }
    else if(string === "I love you, Grandma."){
        return string = "I love you, too.";
    }
}

sayHiToGrandma("HELLO");