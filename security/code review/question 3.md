We’ve implemented a system that lets users rate lizards. You may ask “Why?”, to which we say, they’re good lizards Bront. 

Usage:
./lizard_rates \<lizard id\> \<lizard name\> \<lizard rating\>

Can you find the security vulnerability and describe a proof of concept? 

```
struct {
	char* name;
	unsigned long rating;
} lizards[300];

int create_lizard(int lizard_id, char* name, unsigned long rating) {
	lizards[lizard_id].name = name;
	lizards[lizard_id].rating = rating;
}

void main(int argc, char* argv[]) {
	if (create_lizard(argv[0], argv[1], argv[2]) {
	  printf(“Thank you for rating a lizard!);
  }
  else {
    print(“Usage:”);
    print(“./lizard_rates <lizard id> <lizard name> <lizard rating>”);
  }
}
```
