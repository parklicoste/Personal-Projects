#include<iostream>
#include<string>
using namespace std;

#include "Control.h"
#include "WorkEvent.h"
#include "SchoolEvent.h"

Control::Control()
{
    workCal = new Calendar("WORK EVENT CALENDER");
    schoolCal = new Calendar("SCHOOL EVENT CALENDAR");

    eve = new EventServer(); // initializing a new event server pointer

    Array *work_local, *school_local; // makeing 2 local array pointers

    work_local = new Array();// initializing a new Array pointer
    school_local = new Array();// initializing a new Array pointer

    eve->retrieve(*school_local,*work_local); // retrieving the events of work and school in arrays from cloud storage

    for(int i=0; i<work_local->getSize(); i++){//adding the work events from server to work calendar
      workCal->add(work_local->get(i));
    }

    for(int j=0; j< school_local->getSize(); j++){//adding the work events from server to school calendar
      schoolCal->add(school_local->get(j));
    }

    delete school_local; // deleting the dynamic allocated memory
    delete work_local;// deleting the dynamic allocated memory
}
Control::~Control()
{
  Array *work_local, *school_local;// makeing 2 local array pointers

  work_local = new Array();// initializing a new Array pointer
  school_local = new Array();// initializing a new Array pointer

    workCal->copyEvents(*work_local);//adding the work events from calendar to event Server
    schoolCal->copyEvents(*school_local);//adding the school events from calendar to event Server

    eve->update(*school_local,*work_local);//updating the event server

    delete school_local;// deleting the dynamic allocated memory
    delete work_local;// deleting the dynamic allocated memory

    delete eve;// deleting the dynamic allocated memory

    delete schoolCal;// deleting the dynamic allocated memory
    delete workCal;// deleting the dynamic allocated memory
}

void Control::launch()
{
    int menuSelection;
     while (1) {
    menuSelection = -1;
    v.mainMenu(menuSelection);

    if (menuSelection == 0)
      break;
    else if (menuSelection == 1) {
        string eventName, author, eve_type;
        int    priority,day, month, year, hours, mins;

        v.eventType(eve_type);
        v.readEvent(eventName, priority, day, month, year, hours, mins);

        Event* temp_eve;

        if(eve_type == "Work"){
         // WorkEvent* temp_eve;
          temp_eve = new WorkEvent(eventName, priority);
          temp_eve->setDate(day, month, year, hours, mins);
          workCal->add(temp_eve);
        }

        else{
         // SchoolEvent* temp_eve;
          temp_eve = new SchoolEvent(eventName, priority);
          temp_eve->setDate(day, month, year, hours, mins);
          schoolCal->add(temp_eve);
        }
      }
    }
   // cout<<"\n ========== WORK EVENT ==========\n";
    v.printCalendar(workCal);
    cout<<"\n";
   // cout<<" ========== SCHOOL EVENT ========\n";
    v.printCalendar(schoolCal);
}
