#ifndef LIST_H
#define	LIST_H

#include <string>
using namespace std;

#include "Event.h"
#include "Array.h"

template<class T>
class List{
	template<class V>
	class Node {
		 friend class List<T>;
		private:
		  T event;
		  Node* next;
	};

	private:
	  Node <T>* head;

	public:
  	  List();
  	  virtual ~List();
			void copy(Array&);
  	  void add(T);
      void print();
  	  //void format(string&);

};

template<class T>
List<T>::List(){
	head = NULL;
}

template<class T>
List<T>::~List(){
  Node<T>* currNode;
	Node<T>* nextNode;

  currNode = head;

  while (currNode != NULL) {
    nextNode = currNode->next;
    delete currNode->event;
    delete currNode;
    currNode = nextNode;
  }
}

template<class T>
void List<T>::add(T eve){
  Node<T>* tmpNode;
  Node<T>* currNode;
  Node<T>* prevNode;

  tmpNode = new Node<T>;
  tmpNode->event = eve;
  tmpNode->next = NULL;

  currNode = head;
  prevNode = NULL;

	while (currNode != NULL) {
    if (*eve < currNode->event)
      break;
    prevNode = currNode;
    currNode = currNode->next;
  }

  if (prevNode == NULL) {
    head = tmpNode;
  }
  else {
    prevNode->next = tmpNode;
  }

  tmpNode->next = currNode;
}

template<class T>
void List<T>::copy(Array& a){
	Node<T>* currNode = head;
	while(currNode != NULL){
		a.add(currNode->event);
		currNode = currNode->next;
	}
}

template<class T>
void List<T>::print(){
    Node<T>* currNode = head;

    while(currNode != NULL){
        currNode->event->print();
        currNode = currNode->next;
    }
}

#endif
