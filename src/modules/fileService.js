
import fs from 'fs';
import mkdirp from 'mkdirp';
const getDirName = require('path').dirname;

export default class File {
    constructor(packageName, runTime, errorFile = false) {
        this._packageName = packageName;
        this._runTime = runTime;
        this._path = `./output/${this._packageName}/${this._runTime}${errorFile && '-errors'}.txt`;
    }

    _writeFile(data) {
        mkdirp(getDirName(this._path), (err) => {
            if (err) {
                console.log(err);
                return false;
            }
            fs.writeFile(
                this._path,
                data,
                err => {
                    if (err) console.log(err);
                    console.log('🗂  [LOGS] - Logs saved successfully.');
                }
            );
        });
    }
}
