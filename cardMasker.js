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

mask("4012 8888 8888 1881")