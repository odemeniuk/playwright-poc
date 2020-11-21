# kb-playwright-tests

**Automation test framework**

The main goal is to create an automation test framework which is based on playwright.

The target is Kanboard(https://kanboard.org/).

**Set up env**

On Linux
1. Install Apache and PHP
```
sudo apt-get update
sudo apt-get install -y apache2 libapache2-mod-php7.0 php7.0-cli php7.0-mbstring php7.0-sqlite3 php7.0-opcache php7.0-json php7.0-mysql php7.0-pgsql php7.0-ldap php7.0-gd php7.0-xml
```
2. Install Kanboard
```
cd /var/www/html

# Download the latest release from https://github.com/kanboard/kanboard/releases
wget https://github.com/kanboard/kanboard/archive/v<version>.zip

unzip kanboard-<version>.zip
chown -R www-data:www-data kanboard-<version>/data
rm kanboard-<version>.zip
```
`<version> = 1.2.13`

3. Start/Stop apache

`sudo service apache2 start`

`sudo service apache2 stop`

**Set up automation framework**

On linux

1. Install node

2. Install dependencies

`npm install`

3. Run tests

`npm run test`

4. Check report

projectRoot/jest_html_reporters.html

