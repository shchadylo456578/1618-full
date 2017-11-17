$(function () {
  count = 0;
  setInterval(function () {
    count++;
    $("#changeWords_1").fadeOut(1000, function () {
      $(this).html(window.headervars.line1[count % window.headervars.line1.length]).fadeIn(1000);
    });
  }, 3000);
});


$(function () {
  count = 0;
  setInterval(function () {
    count++;
    $("#changeWords_2").fadeOut(1000, function () {
      $(this).html(window.headervars.line2[count % window.headervars.line2.length]).fadeIn(1000);
    });
  }, 3000);
});



// var words = [
//   'Ви зростаєте <br/> Ми втілюємо',
//   'Ви відпочиваєте <br/> Ми працюємо',
//   'Ви спите <br/> Ми ремонтуємо',
//   'Ви радієте <br/> Ми будуємо'
// ];
//
// $(function () {
//   count = 0;
//   setInterval(function () {
//     count++;
//     $("#changeWords").fadeOut(500, function () {
//       $(this).html(words[count % words.length]).fadeIn(500);
//     });
//   }, 3000);
// });
