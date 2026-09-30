function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Y6CGxTt9tX":
        Script1();
        break;
      case "5lB4JKlavD6":
        Script2();
        break;
  }
}

function Script1()
{
  var hasil = Math.floor(Math.random() * 6) + 1;
GetPlayer().SetVar("HasilDadu", hasil);
}

function Script2()
{
  var player = GetPlayer();

var jumlah = player.GetVar("JumlahLemparan");

if (jumlah > 0) {
    player.SetVar("FR1", player.GetVar("Frekuensi1") / jumlah);
    player.SetVar("FR2", player.GetVar("Frekuensi2") / jumlah);
    player.SetVar("FR3", player.GetVar("Frekuensi3") / jumlah);
    player.SetVar("FR4", player.GetVar("Frekuensi4") / jumlah);
    player.SetVar("FR5", player.GetVar("Frekuensi5") / jumlah);
    player.SetVar("FR6", player.GetVar("Frekuensi6") / jumlah);
} else {
    player.SetVar("FR1", 0);
    player.SetVar("FR2", 0);
    player.SetVar("FR3", 0);
    player.SetVar("FR4", 0);
    player.SetVar("FR5", 0);
    player.SetVar("FR6", 0);
}
}

