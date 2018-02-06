To protest Twitter's new 280 char feature, we've created a counter-culture bird-themed social network called Chirp. 'Cause seriously, who needs 280 characters????? 

Can you find the security vulnerability and describe a proof of concept?

```
struct Chirp {
	char* content[140]; 
	int likes;
	int rechirps;
	char* chirper[30];
	int chirp_id;
};


void chirp(struct User* user, char* content) {
	struct Chirp chirp;
	snprintf(chirp->content, sizeof(chirp->content), "Chirp! %s", content);
	
}

void like(struct Chirp* chirp) {
	chirp->likes++;
}

void rechirp(struct Chirp* chirp) {
	chirp->rechirps++;
}
```
