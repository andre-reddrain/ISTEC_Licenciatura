#include <iostream>

using namespace std;

void selos() {
    int quoc, resto, s5, s3, euros;
    printf("Introduza euros:");
    cin >> euros;
    if (euros >= 8) {
        resto = euros % 5;
        quoc = euros / 5;

        switch(resto) {
            case 0: s5 = quoc; s3 = 0; break;
            case 1: s5 = quoc - 1; s3 = 2; break;
            case 2: s5 = quoc - 2; s3 = 4; break;
            case 3: s5 = quoc; s3 = 1; break;
            case 4: s5 = quoc - 1; s3 = 3; break;
            default: s5 = 0; s3 = 0; break;
        }

        cout << "S5:" << s5 << "\n";
        cout << "S3:" << s3 << "\n";
    } else {
        cout << "Erro";
    }
}

int main() {
    selos();
}