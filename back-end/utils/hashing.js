import bcrypt from 'bcryptjs';

export const doHash = (value, saltValue) =>{
    const salt = bcrypt.genSaltSync(saltValue);
    const result = bcrypt.hashSync(value, salt);
   return result;
} 

export const doHashValidation = (value, hashedValue) =>{
    const hash = bcrypt.genSaltSync(hashedValue);
    const result = bcrypt.compare(value,hash);
    return result;
}

