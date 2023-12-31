#include <stdio.h>
//#include <stdlib.h>

long long int a, b, c;
int res = 0;

long long int pow(long long int x, long long int m) {
	if (m == 0)
		return 1;
	else if (m == 1)
		return x;
	else if (m % 2 > 0)
		return pow(x, m - 1) * x;

	long long int half = pow(x, m / 2);
	half %= c;
	return (half * half) % c;


}
int main() {
	scanf("%11d %11d %11d", &a, &b, &c);

	printf("%d", pow(a, b) % c);

	return 0;
}