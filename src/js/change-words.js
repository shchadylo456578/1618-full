var wordsfirsr = [
  ' зростаєте',
  ' відпочиваєте',
  ' спите',
  ' радієте',
  ' мрієте'
];

$(function () {
  count = 0;
  setInterval(function () {
    count++;
    $("#changeWords_1").fadeOut(500, function () {
      $(this).html(wordsfirsr[count % wordsfirsr.length]).fadeIn(500);
    });
  }, 3000);
});


var wordssecond = [
  ' втілюємо',
  ' працюємо',
  ' ремонтуємо',
  ' будуємо',
  ' проектуємо'
];

$(function () {
  count = 0;
  setInterval(function () {
    count++;
    $("#changeWords_2").fadeOut(500, function () {
      $(this).html(wordssecond[count % wordssecond.length]).fadeIn(500);
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
