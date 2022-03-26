const friends = ["Guadalupe", "Ollie", "Aki"];

function writeCards(friends) {

  const cards = []

  for (let i = 0; i < friends.length; i++) {
    cards.push(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
  }

return cards;

}



function countDown() {
  let timer = 10;
  while (timer >= 0) {
    console.log(timer--)
  }
}