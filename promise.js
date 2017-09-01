// function getTempCallback (location, callback){
//     callback(undefined, 78);
//     callback('City not found');    
// }

// getTempCallback('Philadelphia', function(err, temp){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise (location){
//     return new Promise (function(resolve, reject){
//         setTimeout (function(){
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Philadelphia').then(function(temp){
//     console.log('promise success', temp);
// }, function (err){
//     console.log('error', err);
// });

function addPromise(a,b) {
    return new Promise ( function (resolve, reject){
        setTimeout(function(){
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject('Inputs are not numbers');
            }
        }, 1000);
    });
}

addPromise (12,'N').then(function(addition){
    console.log('Success', addition);
}, function(err){
    console.log('error', err);
});