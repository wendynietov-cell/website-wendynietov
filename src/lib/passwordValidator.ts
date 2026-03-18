import fetch from 'node-fetch';

/**
 * Checks if a password is compromised using the Have I Been Pwned API.
 * @param {string} password - The password to check.
 * @returns {Promise<boolean>} - Returns true if compromised, false otherwise.
 */
export async function isPasswordCompromised(password) {
    const hashedPassword = require('crypto').createHash('sha1').update(password).digest('hex').toUpperCase();
    const prefix = hashedPassword.substring(0, 5);
    const suffix = hashedPassword.substring(5);
    
    const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    const data = await response.text();
    
    return data.split('\n').some(line => line.startsWith(suffix));
}