function generatePassword()
{
    // Get positions of words to be used from the wordlist
    positions = new Uint32Array(2);
    self.crypto.getRandomValues(positions);
    positions[0] = positions[0] % wordlist.length;
    positions[1] = positions[1] % wordlist.length;

    // Get special character to be used in password
    special_chars = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

    special_char_position = new Uint8Array(1);
    self.crypto.getRandomValues(special_char_position);
    special_char_position[0] = special_char_position[0] % special_chars.length;

    // Generate number to be used in password
    number = new Uint8Array(1);
    self.crypto.getRandomValues(number);
    number[0] = number[0] % 10;

    // Create password string
    password = "";
    // Capitalize first letter of each word
    password += wordlist[positions[0]][0].toLocaleUpperCase() + wordlist[positions[0]].slice(1);
    password += wordlist[positions[1]][0].toLocaleUpperCase() + wordlist[positions[1]].slice(1);

    password += number[0];
    password += special_chars[special_char_position[0]];
    
    document.getElementById("passwordOutput").value = password;
}