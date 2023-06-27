function ageInDays() {
  const dateOfBirthTag = document.getElementById("dateOfBirth");
  const dateOfBirth = new Date(dateOfBirthTag.value);
  date = new Date();
  const dayToday = date.getDate();
  const monthToday = date.getMonth();
  const currentYear = date.getFullYear();
  const myYearOfBirth = dateOfBirth.getFullYear();
  const myMonthOfBirth = dateOfBirth.getMonth();
  const myDayOfBirth = dateOfBirth.getDate();
  const months = {
    0: { days: 31, monthYearDays: 31, prevMonthDays: 0 },
    1: { days: 28, monthYearDays: 59, prevMonthDays: 31 },
    2: { days: 31, monthYearDays: 90, prevMonthDays: 59 },
    3: { days: 30, monthYearDays: 120, prevMonthDays: 90 },
    4: { days: 31, monthYearDays: 151, prevMonthDays: 120 },
    5: { days: 30, monthYearDays: 181, prevMonthDays: 151 },
    6: { days: 31, monthYearDays: 212, prevMonthDays: 181 },
    7: { days: 31, monthYearDays: 243, prevMonthDays: 212 },
    8: { days: 30, monthYearDays: 273, prevMonthDays: 243 },
    9: { days: 31, monthYearDays: 304, prevMonthDays: 273 },
    10: { days: 30, monthYearDays: 334, prevMonthDays: 304 },
    11: { days: 31, monthYearDays: 365, prevMonthDays: 334 },
  };
  const daysInMonth = months[myMonthOfBirth].days;
  const leftDays = months[myMonthOfBirth].monthYearDays;
  const prevMonthsDays = months[monthToday].prevMonthDays;

  let daysInYearOfBirth = 366;
  if (myYearOfBirth % 4) {
    daysInYearOfBirth = 365;
  }
  const myDaysInBornYear = daysInYearOfBirth - leftDays + daysInMonth - myDayOfBirth;
  const myDaysInBetweenYears =
    (currentYear - myYearOfBirth - 1) * 365 + Math.floor((currentYear - myYearOfBirth + 1) / 4);
  const DaysInCurrentYear = prevMonthsDays + dayToday;
  const myDays = myDaysInBornYear + myDaysInBetweenYears + DaysInCurrentYear;
  result = document.getElementById("result"); //here we receive result from html without value
  result.value = myDays; //we put  this value in "result"
}
