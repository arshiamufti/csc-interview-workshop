function replaceText(text, symbol, replaceWord) {
  return;
}

function main() {
  var text = "<p>Hello my name is $name</p>";
  var symbol = "%name";
  var myName = "Iris"
  console.log(replaceText(text,symbol,myName));
}

main();
