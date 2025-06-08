function XOSlot({
  whichPLayerPosessesSlot,
  index,
  changeSlotPosessionFunction,
  ...props
}) {
  function onButtonClick() {
    if (whichPLayerPosessesSlot) {
      //if a player already posesses this slot don't let another player reposess it, kind of a dick move
      return;
    }

    changeSlotPosessionFunction(index);
  }

  return (
    <button onClick={onButtonClick} {...props}>
      {whichPLayerPosessesSlot}
    </button>
  );
}


export default XOSlot;