class Rabbit {
        constructor(type) {
            this.type = type;
        }
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`);
    }
    
}

let whiteRabbit = new Rabbit("white");
let hungryRabbit = new Rabbit("hungry");

whiteRabbit.speak("I'm proud of my white color.");
hungryRabbit.speak("I'm so hungry.")
