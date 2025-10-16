#include <stdio.h>

int main()
{
  int c;
  while ((c = getchar())){

    if(c == EOF){
      putchar(c);
      printf("hello");
    }
  }
    
}