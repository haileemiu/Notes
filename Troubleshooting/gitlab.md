# cloning repo error

```
haileemiu@Hailees-MacBook-Pro DiveHub % git clone https://gitlab.com/nm-apps/DiveHub.git
Cloning into 'DiveHub'...
Username for 'https://gitlab.com': hailee.miu
Password for 'https://hailee.miu@gitlab.com': 
remote: HTTP Basic: Access denied
remote: You must use a personal access token with 'read_repository' or 'write_repository' scope for Git over HTTP.
remote: You can generate one at https://gitlab.com/-/profile/personal_access_tokens
fatal: Authentication failed for 'https://gitlab.com/nm-apps/DiveHub.git/'
```
^ follow the link and directions

git clone https://oauth2:<ACCESS_TOKEN>@gitlab.com/nm-apps/DiveHub.git
