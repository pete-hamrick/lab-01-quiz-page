export function isYes(word){
    //logic to determine if user input should count as a yes
    //return true or false
    word = word.toLowerCase();

    if (word === 'yes' || word === 'y'){
        return true;
    } else {
        return false;
    }
}