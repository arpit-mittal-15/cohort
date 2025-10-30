#include <iostream>
using namespace std;

int main() {

  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  int testcases;
  cin >> testcases;

  while(testcases--){
    int animals = 0;
    int legs;
    cin >> legs;

    animals += legs/4;

    if(legs%4 > 0) animals++;

    cout << animals << '\n';
  }
}