//Reset du formulaire
$('#reset').on('click', function() {
  $('#noteOne').val('');
  $('#noteTwo').val('');
  $('#noteThree').val(''); 
  $('#noteFour').val('');
  $('#noteFive').val('');
  $('#appreciation').text('')
})

//Click Event calucle de moyenne
$('#sumbitNotes').on('click', function() {
  let noteOne = parseInt($('#noteOne').val());
  let noteTwo = parseInt($('#noteTwo').val());
  let noteThree = parseInt($('#noteThree').val()); 
  let noteFour =  parseInt($('#noteFour').val());
  let noteFive = parseInt($('#noteFive').val());

  //Vérification des valeurs de notes
  if (noteOne > 20 ||
      noteTwo > 20 || 
      noteThree > 20 || 
      noteFour > 20 || 
      noteFive > 20
      ) {
        alert(`Petit canaillou de margoulin ! Je te surveille tu sais ?! Tu pensais pouvoir améliorer ta moyenne en te mettant des notes supérieures à 20 ??? Non mais !!!`) 
  } else {
    //Calcule de la moyenne
    let moyenne = (noteOne + noteTwo + noteThree + noteFour + noteFive)/5;

    //Détermination appréciations
    if (moyenne >= 0 && moyenne < 10 ) {
      $('#appreciation').text(`Ta moyenne est de ${moyenne}. Tu es en dessous de la moyenne, c'est mal (comme la drogue m'voyez?)`)
    } else if (moyenne >= 10 && moyenne < 13 ) {
      $('#appreciation').text(`Ta moyenne est de ${moyenne}. C'est assez moyen, poursuis tes efforts.`)
    } else if (moyenne >= 13 && moyenne < 16 ) {
      $('#appreciation').text(
        `Ta moyenne est de ${moyenne}.
        C'est bien, continue ton chemin trough the sky!`)
    } else if (moyenne >= 16 && moyenne < 20 ) {
      $('#appreciation').text(`Ta moyenne est de ${moyenne}. Bravo, c'est super chouette, tu es un excellent élément.`)
    } else if (moyenne === 20 ) {
      $('#appreciation').text(`Ta moyenne est de ${moyenne}. Excellent, avec une telle moyenne, tu pourrais presque envisager de devenir formateur à La Manu :)`)
    }
  } 
})