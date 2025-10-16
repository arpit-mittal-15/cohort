#include <stdio.h>

int main()
{
  int c, i, nwhite, nother, maxi;
  int ndigit[10];
  nwhite = nother = maxi = 0;

  for (i = 0; i < 10; ++i)
    ndigit[i] = 0;

  while ((c = getchar()) != '$')
    if (c >= '0' && c <= '9')
    {
      ++ndigit[c - '0'];
      if (ndigit[c - '0'] > maxi)
        maxi = ndigit[c - '0'];
    }
    else if (c == ' ' || c == '\n' || c == '\t')
      ++nwhite;
    else
      ++nother;

  for (i = 0; i < 10; ++i)
  {
    for (int j = 0; j < 10; ++j)
    {
      if (maxi <= ndigit[j])
      {
        printf("|=| ");
      }
      else
        printf("     ");
    }
    maxi--;
    printf("\n");
  }

  printf(", white space = %d\n, other = %d\n", nwhite, nother);

  return 0;
}