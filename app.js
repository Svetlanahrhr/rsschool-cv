// function createSecretHolder(secret) {
//   console.log(secret);
//   return {
//       getSecret () {
//       return secret;
//     },
//      setSecret(secret) {
//        this.prop
//     },
//   };
// }

// let s = createSecretHolder(5);
// console.log(s.getSecret());
// console.log(s.setSecret(1));
// console.log(s.getSecret());

function numberOfFridaythe13thsIn(jahr) {
	var count = 0;
	for (var month=0; month<12; month++) {
		 var d = new Date(jahr,month,13);
		 if(d.getDay() == 5){
			count++;
	 
		}
	}
	return count;                            
}

console.log(numberOfFridaythe13thsIn(2018));
