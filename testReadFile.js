const { exists, readdir, remove } = require('fs-extra');
const { join } = require('path');
const { spawn } = require('child_process');
const { readdirSync } = require('fs');
const tmpDir = "."
const dirs = readdirSync(join(tmpDir), { withFileTypes: false });
dirs.forEach(element => {
    console.log('--> ' + element);
});
