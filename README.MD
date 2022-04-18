# Calendar-daemon
simple service to edit google calendar events via googleapis

## Clone 

```$ git clone https://github.com/5ouya/calendar-daemon.git```


## Scripts
### Development

- ```$ yarn```
- ```$ yarn dev```

### Compile

```$ yarn build```

### Build binary

```$ yarn build:bin```

### Build debian package

```$ yarn build:debian:package```

### Run binary
#### Download
- [calendard-linux](https://github.com/5ouya/calendar-daemon/releases/download/v1.0.0/calendard-linux.zip)
- [calendard-macos](https://github.com/5ouya/calendar-daemon/releases/download/v1.0.0/calendard-macos.zip)
- [calendard-win.exe](https://github.com/5ouya/calendar-daemon/releases/download/v1.0.0/calendard-win.zip) 

#### Or
#### Build
```$ yarn build && yarn build:bin```
#### Configuration
- Edit `./config.ini` ([example config.ini](https://raw.githubusercontent.com/5ouya/calendar-daemon/main/config.ini))

#### Options
`-c | --config-file` to set config-file path. Default is `./config.ini` 
#### Start
```$ ./calendard-linux``` using default config file path\
```$ ./calendard-linux -c config-local.ini```\
Or\
```$ ./bin/calendard-linux``` using default config file path\
```$ ./bin/calendard-linux -c config-local.ini```\


### Run as daemon
#### Download
[calendard-daemon.deb](https://github.com/5ouya/calendar-daemon/releases/download/v1.0.0/calendar-daemon.deb)
#### Or
#### Build
```$ yarn build && yarn build:bin && yarn build:debian:package```
### Install 
```# dpkg -i calendar-daemon.deb``` \
Or\
```# dpkg -i package_build_dir/calendar-daemon.deb``` \
The service runs after installation
### Configuration
- Edit `/opt/calendar-daemon/config.ini`
- ```# service calendard restart``` to read config changes
### Control
- ```# service calendard status```
- ```# service calendard start```
- ```# service calendard stop```
- ```# service calendard restart```
## Journal
```# journalctl -u calendard -f```
