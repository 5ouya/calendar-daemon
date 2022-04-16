#!/usr/bin/env bash

PACKAGE_VERSION=$(./scripts/version.sh)

echo $PACKAGE_VERSION
sed -i "s/^Version.*/Version: $PACKAGE_VERSION/" DEBIAN/control