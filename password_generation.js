function generatePassword()
{
    // Get positions of words to be used from the wordlist
    positions = new Uint32Array(2);
    self.crypto.getRandomValues(positions);
    positions[0] = positions[0] % wordlist.length;
    positions[1] = positions[1] % wordlist.length;

    console.log(positions);
}