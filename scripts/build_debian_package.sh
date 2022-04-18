#!/usr/bin/env bash

mkdir -p ./package_build_dir/calendar-daemon
cp -R ./DEBIAN ./package_build_dir/calendar-daemon

chmod +x ./package_build_dir/calendar-daemon/DEBIAN/postinst
chmod +x ./package_build_dir/calendar-daemon/DEBIAN/postrm
chmod +x ./package_build_dir/calendar-daemon/DEBIAN/prerm

mkdir -p ./package_build_dir/calendar-daemon/opt/calendar-daemon/
mkdir -p ./package_build_dir/calendar-daemon/opt/calendar-daemon/secrets
mkdir -p ./package_build_dir/calendar-daemon/etc/systemd/system/

cp ./bin/calendard-linux ./package_build_dir/calendar-daemon/opt/calendar-daemon/calendard
cp  ./config.ini ./package_build_dir/calendar-daemon/opt/calendar-daemon/

cp ./systemd/calendard.service ./package_build_dir/calendar-daemon/etc/systemd/system/calendard.service

cd package_build_dir &&  dpkg-deb --build calendar-daemon
