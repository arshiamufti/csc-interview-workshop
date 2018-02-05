This is a simple function to authenticate a user. Can you find the security vulnerability and describe a proof of concept? 

Usage:  ./authenticate <username> <password>

Output:
- 1 if correct username and password are provided
- 0 otherwise 

```
char* username[] = “admin”;
char* password[] = “password”;

int authenticate(char* provided_username, char* provided_password) {
	if (memcmp(username, provided_username, strlen(provided_username)) == 0 && memcmp(password, provided_password,strlen(provided_password)) == 0 ) {
	return 1;
  }
  else {
	  return 0;
  }
}

int main(int argc, char* argv[]) {
	return authenticate(argv[0], argv[1]);
}
```
