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
#### Build
```$ yarn build && yarn build:bin```

#### Configuration
- Edit `./config/config.ini`

#### Options
`-c | --config-file` to set config-file path. Default is `./config/config.ini` 
#### Start
```$ ./bin/calendard``` using default config file path\
```$ ./bin/calendard -c config-local.ini```


## Run as daemon

### Build
```$ yarn build && yarn build:bin && yarn build:debian:package```
### Install 
```# dpkg -i package_build_dir/calendar-daemon.deb``` \
The service runs after installation
### Configuration
- Edit `/opt/calendar-daemon/config/config.ini`
- Put the `keyFile` in `/opt/calendar-deamon/secrets/`
- ```# service calendard restart``` to read config changes
### Control
- ```# service calendard status```
- ```# service calendard start```
- ```# service calendard stop```
- ```# service calendard restart```
## Journal
```# journalctl -u calendard -f```
