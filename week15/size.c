#include <stdio.h>

enum boolean { NO, YES };

int main(void) {
    enum boolean isReady = YES;

    if (isReady == YES)
        printf("System is ready!\n");
    else
        printf("System is not ready!\n");

    return 0;
}
