const cheiros = [
  "leite creme","leite azedo","leite achocolatado","leite condensado",
  "presunto curado",
  "veneno para ratos",
  "maçãs podres",
  "chulé de chinês",
  "manteiga de amendoim",
  "marmelada","geleia","compota de maracujá",
  "pickles",
  "cebola",
  "WC Pato",
  "fiambre da perna extra",
  "queijo da serra","queijo flamengo","requeijão",
  "pão recesso","pão de forma","pão rústico",
  "coentros estragados",
  "bacalhau fora do prazo",
  "framboesa podre",
  "beterraba",
  "tremoços secos",
  "merda fossilizada",
  "mijo de camelo",
  "foda",
  "esperma de cavalo"
];
const locais = [
  "da cabeça",
  "do cabelo",
  "da testa",
  "da cara",
  "das sobrancelhas","das pestanas",
  "dos olhos",
  "dos ouvidos","das orelhas",
  "do nariz","das narinas",
  "da boca",
  "dos lábios",
  "das gengivas",
  "dos dentes",
  "da garganta",
  "dos ombros",
  "das axilas",
  "dos sovacos",
  "dos braços",
  "dos cotovelos",
  "do antebraço",
  "das mãos",
  "dos dedos","dos dedos dos pés",
  "das unhas","das unhas dos pés",
  "da barriga",
  "das costas",
  "dos mamilos",
  "do umbigo",
  "do cu","do olho do cu","das bordas do cu","do rego do cu",
  "da cabeça da piça","da paxaxa",
  "do intestino grosso",
  "das pernas",
  "dos joelhos",
  "das coxas",
  "dos gémeos",
  "dos tornozelos",
  "dos pés"
];

botao = document.getElementById('botao');

botao.onclick = function() {
  //randomizar
  var cheiro = cheiros[Math.floor(Math.random() * cheiros.length)];
  var local = locais[Math.floor(Math.random() * locais.length)];

  //actualizar página
  const insulto = document.getElementById("insulto");
  insulto.innerHTML = "Cheiras a " + cheiro + " " + local;
  botao.innerHTML = "INSULTA-ME MAIS SUA PORCA BARRAQUEIRA!";
}