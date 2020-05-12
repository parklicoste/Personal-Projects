#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

#include "Date.h"

Date::Date(int d, int m, int y, int h, int mins)
{
  set(d, m, y, h, mins);

}

void Date::set(int d, int m, int y, int h, int mins)
{
  year  = ( ( y > 0) ? y : 0 );
  month = ( ( m > 0 && m <= 12) ? m : 0 );
  day   = ( ( d > 0 && d <= lastDayInMonth() ) ? d : 0 );
  taem.set(h, mins, 0);
}

void Date::printShort()
{
  taem.print();
  cout<<setfill('0')<<setw(2)<<day<<"/"
      <<setfill('0')<<setw(2)<<month<<"/"
      <<setfill('0')<<setw(4)<<year<<endl;
}

void Date::printLong()
{
  taem.print();
  cout<<getMonthStr()<<" "<<day<<", "<<year<<endl;
}

int Date::lastDayInMonth()
{
  switch(month)
  {
    case 2:
      if (leapYear())
        return 29;
      else
        return 28;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    default:
      return 30;
  }
}

bool Date::leapYear()
{
  if ( year%400 == 0 ||
       (year%4 == 0 && year%100 != 0) )
    return true;
  else
    return false;
}

string Date::getMonthStr()
{
  string monthStrings[] = {
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" };

  if ( month >= 1 && month <= 12 )
    return monthStrings[month-1];
  else
    return "Unknown";
}
bool Date::operator<(Date& d)
{
    if(year == d.year && month == d.month && day == d.day )
        return(taem<(d.taem));
    else if(year == d.year && month == d.month)
        return(day < d.day);
    else if( year == d.year)
        return(month < d.month);
    return(year < d.year);
}
