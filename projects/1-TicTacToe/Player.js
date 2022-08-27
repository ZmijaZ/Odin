function Player(text) {
  let name = text;

  function setName(text1) {
    name = text1;
  }

  function getName() {
    return name;
  }

  return { getName, setName };
}

export { Player };
