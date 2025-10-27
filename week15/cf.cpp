#include <iostream>
using namespace std;

int main() {

  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  string expression;
  cin >> expression;

  int arr[3] = {0};

  for(int i=0; i<expression.size(); i++){
    if(expression[i] != '+'){
      arr[expression[i]-49]++;
    }
  }

  int numCount = arr[0] + arr[1] + arr[2];

  while(arr[0]--){
    cout << '1';
    if(--numCount > 0) cout << '+';
  }

  while(arr[1]--){
    cout << '2';
    if(--numCount > 0) cout << '+';
  }

  while(arr[2]--){
    cout << '3';
    if(--numCount > 0) cout << '+';
  }

}