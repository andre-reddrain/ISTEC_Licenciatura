#include <iostream>

using namespace std;

int main() {
    int alfa[] = { 1, 2, 3, 4, 5};
    int x = 4;
    int *ptr = &x;
    printf("x = %d &x = %p ptr = %p *ptr = %d ", x, &x, ptr, *ptr);

    ptr = alfa;
    printf("\n\nalfa = %p &alfa[0] = %d ptr = %p *ptr = %d", alfa, &alfa[0], ptr, *ptr);

    ptr++;
    printf("\n\nptr = %p *ptr = %d\n", ptr, *ptr);

    ptr = alfa;
    for (int i = 0; i <= 4; i++) {
        printf("\n*ptr = %d ptr = %p", *ptr, ptr);
        ptr++;
    }
}