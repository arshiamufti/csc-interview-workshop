Allergic to cats? Don't want to clean litter boxes? This program is the solution you’ve been looking for! Cat Simulator (TM) simulates a feline companion without the hassle of wayward fur. 


Can you find the security vulnerability and describe a proof of concept?

```
#include <time.h>
#include <stdlib.h>

void nameTheCat() {
	printf("What would you like to name the cat? Not that they'll respond to it.\n"); 
	char long_cat_name[256];
	gets(long_cat_name);
	printf("Congrats! You have named the cat %s\n ", long_cat_name);
}

void feedTheCat() {
	printf("MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW ME-\n");
	printf("*You fill the dish with food*\n")
	printf("*The cat sniffs the food and walks away.*\n")	
}

void main() {
	printf("Hello welcome to Cat Simulator (TM)!\n");
	printf("Cat Simulator (TM), the solution to your feline companionship needs.\n");
	
	while(true) {
		printf("What would you like to do? Enter one of {name, feed, quit} .\n");
		char command[4];
		fgets(command, 4, stdin);
		if (strcmp(command,"name") == 0) { nameTheCat();}
		else if (strcmp(command,"feed") == 0) { feedTheCat(); }
		else if (strcmp(command,"quit") == 0) {
			printf("See ya! *paw sticks out from under the door*.");
			exit(0)
		}
		else {
			printf("Mrrp? That's not a valid command. Try again.")
		}
	}
}

```
