var nameVar = 'Josh';

var nameVar = 'Mike';

// console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';

// console.log('nameLet', nameLet);

const nameConst = 'Frank';


// console.log('nameConst', nameConst);

let getPetName = () => {
    var PetName = "Hal";
    return PetName
}

const petName = getPetName();
// console.log(petName);

var fullName = 'Joshua Rippon';

if (fullName) {
    let firstName = fullName.split(' ')[0];
}
console.log(firstName);