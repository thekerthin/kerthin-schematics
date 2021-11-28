# kerthin-schematics

## Run schematics locally

### Install dependencies

```sh
$ npm i -g @angular-devkit/schematics-cli
```

### Generate schema interface

```sh
# Inside the schematic folder run the following
$ npx -p dtsgenerator dtsgen ./schema.json -o ./<schematic-name>.schema.d.ts
```

### Run schematic locally

```sh
# build project
$ yarn build

# inside schematics root folder
$ schematics .:aggregate --dry-run=false <...params>

# example
$ schematics .:aggregate --dry-run=false --directory=example --moduleName=user --properties="name:Name,email:Email,addresses:Address:true,profile:Profile::true"
```
