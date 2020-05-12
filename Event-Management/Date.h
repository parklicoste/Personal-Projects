#ifndef DATE_H
#define DATE_H
#include<string>
using namespace std;
#include "Time.h"


class Date
{
  public:
    Date(int=0, int=0, int=2000, int=0, int mins=0);
    void set(int, int, int, int, int);
    void printShort();
    void printLong();
    bool operator<(Date&);

  private:
    int day;
    int month;
    int year;
    int  lastDayInMonth();
    bool leapYear();
    string getMonthStr();
    Time taem;

};

#endif
