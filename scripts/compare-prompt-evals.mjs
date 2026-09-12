import fs from 'node:fs';
import {compareRuns} from '../eval/assess.mjs';
const [left,right]=process.argv.slice(2);
if(!left||!right)throw Error('Usage: node scripts/compare-prompt-evals.mjs LEFT_RUN_JSON RIGHT_RUN_JSON');
console.log(JSON.stringify(compareRuns(JSON.parse(fs.readFileSync(left,'utf8')),JSON.parse(fs.readFileSync(right,'utf8'))),null,2));
