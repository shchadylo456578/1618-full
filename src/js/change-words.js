var words = [
  'Ви зростаєте <br/> Ми втілюємо',
  'Ви відпочиваєте <br/> Ми працюємо',
  'Ви спите <br/> Ми ремонтуємо',
  'Ви радієте <br/> Ми будуємо'
];

$(function () {
  count = 0;
  setInterval(function () {
    count++;
    $("#changeWords").fadeOut(500, function () {
      $(this).html(words[count % words.length]).fadeIn(500);
    });
  }, 3000);
});
