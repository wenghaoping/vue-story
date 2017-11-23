/**
 * Created by Admin on 2017/11/23.
 */
export function CurentTime () {
  var now = new Date();

  var year = now.getFullYear();       // 年
  var month = now.getMonth() + 1;     // 月
  var day = now.getDate();            // 日

  var hh = now.getHours();            // 时
  var mm = now.getMinutes();          // 分

  var clock = year + '年';

  if (month < 10) { clock += '0'; }

  clock += month + '月';

  if (day < 10) { clock += '0'; }

  clock += day + '日';

  if (hh < 10) { clock += '0'; }

  clock += hh + ':';
  if (mm < 10) clock += '0';
  clock += mm;
  return (clock);
}// 若要显示:当前日期加时间(如:2009-06-12 12:00)