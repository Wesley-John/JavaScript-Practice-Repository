function mask(card) {

  if (card.includes("-")) {
    const splitCard = card.split("-");

    let maskArray = [];
    
    for (let i = 0; i < splitCard.length - 1; i++) {
      maskArray.push(splitCard[i].replace(splitCard[i], "****"));
    };

    maskArray.push(splitCard[3]);

    const maskedCard = maskArray.join("-");
    
    card = maskedCard;
    
  } else if (card.includes(" ")) {
    const splitCard = card.split(" ");
    
    let maskArray = [];
    
    for (let i = 0; i < splitCard.length - 1; i++) {
      maskArray.push(splitCard[i].replace(splitCard[i], "****"));
    }

    maskArray.push(splitCard[3])
    
    const maskedCard = maskArray.join(" ")
    
    card = maskedCard
    
  }

  return card;
}

mask("4012 8888 8888 1881");
console.log(mask("4012 8888 8888 1881")); //**** **** **** 1881//
console.log(mask("4012-8888-8888-1881")); //****-****-****-1881//
console.log(mask("6011 1111 1111 1117")); //**** **** **** 1117//
console.log(mask("5105 1051 0510 5100")); //**** **** **** 5100//
console.log(mask("2223-0000-4845-0010")); //****-****-****-0010//