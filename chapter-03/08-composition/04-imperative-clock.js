// Log Clock Time every Second
setInterval(logClockTime, 1000);

function logClockTime() {
  // Dapatkan string Waktu sebagai waktu sipil
  var time = getClockTime();

  // Kosongkan Console dan catat waktunya
  console.clear();
  console.log(time);
}

function getClockTime() {
  // Dapatkan Waktu Saat Ini
  var date = new Date();

  // Serialisasi waktu jam
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };

  // Ubah ke waktu sipil
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }

  // Tambahkan 0 pada jam untuk membuat dua digit
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }

  // tambahkan 0 pada menit untuk membuat dua digit
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }

  // tambahkan 0 pada detik untuk membuat dua digit
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }

  // Format waktu jam sebagai string "hh:mm:ss tt"
  return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}
