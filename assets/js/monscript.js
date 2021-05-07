//Reset du formulaire
$('#reset').on('click', function() {
  $('#nameInput').val('');
  $('#noteOne').val('');
  $('#noteTwo').val('');
  $('#noteThree').val(''); 
  $('#noteFour').val('');
  $('#noteFive').val('');
  $('#appreciation').text('')
  $('#nul').css({'display': 'none'})
  $('#moyen').css({'display': 'none'})
  $('#bien').css({'display': 'none'})
  $('#tresBien').css({'display': 'none'})
  $('#excellent').css({'display': 'none'})
  $('#animation').removeClass('action')
})

//Click Event calucle de moyenne
$('#sumbitNotes').on('click', function() {
  let noteOne = parseInt($('#noteOne').val());
  let noteTwo = parseInt($('#noteTwo').val());
  let noteThree = parseInt($('#noteThree').val()); 
  let noteFour =  parseInt($('#noteFour').val());
  let noteFive = parseInt($('#noteFive').val());

  //Security animation reset
  $('#nul').css({'display': 'none'})
  $('#moyen').css({'display': 'none'})
  $('#bien').css({'display': 'none'})
  $('#tresBien').css({'display': 'none'})
  $('#excellent').css({'display': 'none'})
  

  //Vérification remplissage prénom
  if (!$('#nameInput').val()) {
    alert(`Oups! Il semblerait que tu aies oublié de mettre ton prénom...`)
  //Vérification des valeurs de notes
  } else if (
    !$('#noteOne').val() ||
    !$('#noteTwo').val() ||
    !$('#noteThree').val() ||
    !$('#noteFour').val() ||
    !$('#noteFive').val() 
  ) {
    alert(`Attention l'étourdi, tu as oublié de renseigner une note !`)
  } else if (
      noteOne > 20 ||
      noteTwo > 20 || 
      noteThree > 20 || 
      noteFour > 20 || 
      noteFive > 20
      ) {
        alert(`Petit canaillou de margoulin ! Je te surveille tu sais ?! Tu pensais pouvoir améliorer ta moyenne en te mettant des notes supérieures à 20 ??? Non mais !!!`) 
  } else {
    //Calcule de la moyenne
    let moyenne = (noteOne + noteTwo + noteThree + noteFour + noteFive)/5;
    $('#animation').addClass('action')
    //Détermination appréciations
    if (moyenne >= 0 && moyenne < 10 ) {
      $('#appreciation').text(`${$('#nameInput').val()}, avec une moyenne de ${moyenne}, tu es officiellement un cancre, et ça, c'est mal (comme la drogue m'voyez?) 💩`)
      setTimeout(function(){$('#nul').css({'display': 'block'})}, 500)
      setTimeout(function(){$('#animation').removeClass('action')}, 1000)
    } else if (moyenne >= 10 && moyenne < 13 ) {
      $('#appreciation').text(`${$('#nameInput').val()}, ta moyenne est de ${moyenne}. C'est une assez moyenne moyenne. Poursuis tes efforts.`)
      setTimeout(function(){$('#moyen').css({'display': 'block'})}, 500)
      setTimeout(function(){$('#animation').removeClass('action')}, 1000)
    } else if (moyenne >= 13 && moyenne < 16 ) {
      $('#appreciation').text(
        `Ta moyenne est de ${moyenne}. C'est bien ${$('#nameInput').val()}, continue ton chemin trough the sky!`)
        setTimeout(function(){$('#bien').css({'display': 'block'})}, 500)
        setTimeout(function(){$('#animation').removeClass('action')}, 1000)
    } else if (moyenne >= 16 && moyenne < 20 ) {
      $('#appreciation').text(`Avec ta moyenne de ${moyenne}, tu te hisses parmi l'élite de ta classe. Bravo ${$('#nameInput').val()} !`)
      setTimeout(function(){$('#tresBien').css({'display': 'block'})}, 500)
      setTimeout(function(){$('#animation').removeClass('action')}, 1000)
    } else if (moyenne === 20 ) {
      $('#appreciation').text(`OMG 😱! Excellent ${$('#nameInput').val()}! Ta moyenne de ${moyenne} te permettrait presque d'envisager de devenir formateur à La Manu :)`)
      setTimeout(function(){$('#excellent').css({'display': 'block'})}, 500)
      setTimeout(function(){$('#animation').removeClass('action')}, 1000)
    }
  } 
})