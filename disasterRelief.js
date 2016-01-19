// VICTIMS 

var victimPrompt=prompt("How many victims do you want to enter?");





// for victimPrompt {
// if (number >= 1) {
// 	alert("Please press OK to continue")
// }
// else {
// 	alert("Do you have any Volunteers to enter into the database? YES or NO"){
// 		if (YES) {
// 			// DO SOMETHING THAT WILL MAKE IT GO TO VOLUNTEER SECTION
// 		}
// 		else {
// 			alert("I'm not sure why you're here then...")
// 		}
// 	}
// }






var newVictim=prompt("Victim's full name");

var victimNames = ["John Smith"];
victimNames.push(newVictim);

console.log(victimNames)




var newPhone=prompt("Victim's phone number");

var phoneNumbers = ["333-333-3333"];
phoneNumbers.push(newPhone);

console.log(phoneNumbers)




var newAddress=prompt("Victim's Address");

var addresses = ["555 West Flanders Ln"];
addresses.push(newAddress);

console.log(addresses);




var victims = [victimNames, phoneNumbers, addresses]
console.log(victims)







// VOLUNTEERS-- CAN I MAKE AN ARRAY OF ARRAYS???

var volunteerPrompt=prompt("How many volunteers do you want to enter?");





var newVolunteer=prompt("Volunteer's full name");

var volunteerNames = ["Florence Nightengale"];
volunteerNames.push(newVolunteer);

console.log(volunteerNames)





var newVolunteerNumber=prompt("Volunteer's phone number");

var volunteerNumbers = ["555-555-5555"];
volunteerNumbers.push(newVolunteerNumber);

console.log(volunteerNumbers)






var newVolunteerStreet=prompt("Volunteer's street address");

var volunteerAddresses=["1894 Battlefield Ln."]
volunteerAddresses.push(newVolunteerStreet);

console.log(volunteerAddresses)


var volunteers = [volunteerNames, volunteerNumbers, volunteerAddresses]
console.log(volunteers)



