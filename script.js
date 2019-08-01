const name1 = prompt ('What is the first name?');
const name2 = prompt ('What is the second name?');
const name3 = prompt ('What is the third name?');


if(name1.length > name2.length && name1.length > name3.length){

     console.log(`${name1} has the longest name!`);
    //  console.log(name1.length);

}else if(name2.length > name1.length && name2.length > name3.length){

    console.log(`${name2} has the longest name!`);
    // console.log(name1.length);

}else if(name3.length > name2.length && name3.length > name2.length){

    console.log(`${name3} has the longest name!`);
    // console.log(name1.length);

}else if(name1.length === name2.length && name1.length > name3.length){

    console.log(`${name1}, ${name2} tie for the longest
    name`);

}else if(name1.length === name3.length && name1.length > name2.length){

    console.log(`${name1}, ${name3} tie for the longest
    name`);

}else if(name1.length === name2.length && name1.length === name3.length){

    console.log(`All three names, ${name1}, ${name2},
    and ${name3}, are the same length.`)

}else{
    console.log('Try again')
}







// else if(name2.length > name3.length){

//     console.log(`${name2} has the longest name!`);
//     console.log(name2.length);

// }else if(name2.length < name3.length){

//     console.log(`${name3} has the longest name!`);
//     console.log(name3.length);

// }else if(name1.length === name2.length){

//     console.log(`${name1}, ${name2} tie for the longest
//     name`);

// }else if(name1.length === name3.length){

//     console.log(`${name1}, ${name3} tie for the longest
//     name`);

// }else if(name2.length === name1.length){

//     console.log(`${name1}, ${name2} tie for the longest
//     name`);

// }else if(name2.length === name3.length){

//     console.log(`${name2}, ${name3} tie for the longest
//     name`);

// }else if(name3.length === name1.length){

//     console.log(`${name3}, ${name1} tie for the longest
//     name`);

// }else if(name3.length === name2.length){

//     console.log(`${name3}, ${name2} tie for the longest
//     name`);

// }else if (name1.length === name2.length && name3.length ){
//     console.log(`All three names, ${name1}, ${name2},
//     and ${name3}, are the same length.`)
// }else{
//     console.log('Try again!')
// }

