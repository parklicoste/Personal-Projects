#include<iostream>
#include<iomanip>
#include<string>
using namespace std;

#include "Calendar.h"

Calendar::Calendar(string naam){
    cal_name = naam;
    cur_events = 0;
    //collection = new List()<T>;
}

Calendar::~Calendar(){
        //delete collection;
}

void Calendar::add(Event* eve){
    collection.add(eve);
    /*int pos = 0;
    for(int i=0; i<cur_events; i++)
        if((collection->eve_date).lessThan(eve->eve_date))
            pos = i;
    for(int j=cur_events; j>pos;j--)
        collection[j] = collection[j-1];
    collection[pos] = eve;*/
    cur_events++;

}

void Calendar::copyEvents(Array& a){
  collection.copy(a);
}
void Calendar::print(){
    cout<<"\n"<<cal_name<<"\n";
    collection.print();
}
