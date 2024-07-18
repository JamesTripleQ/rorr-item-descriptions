const fs = require('node:fs');
const JSON5 = require('json5');

const langFile = JSON5.parse(fs.readFileSync('./lang_to_convert/lang.json'));

const isEn = langFile.hud.objective.default === 'Find the teleporter.';

const equipmentTimes = {
	"rottenBrain": 30,
	"safeguardLantern": 45,
	"snowglobe": 45,
	"explorersKey": 90,
	"foreignFruit": 45,
	"instantMinefield": 45,
	"jarOfSouls": 45,
	"carraraMarble": 45,
	"sawmerang": 45,
	"shatteredMirror": 75,
	"disposableMissileLauncher": 45,
	"goldPlatedBomb": 45,
	"droneRepairKit": 45,
	"thqwib": 45,
	"dynamitePlunger": 45,
	"maceReplica": 45,
	"giganticAmethyst": 8,
	"crudelyDrawnBuddy": 45,
	"prescriptions": 45,
	"shieldGenerator": 45,
	"unstableWatch": 67,
	"lostDoll": 45,
	"pillagedGold": 45,
	"captainsBrooch": 135,
	"theBackup": 45,
	"massiveLeech": 45,
	"glowingMeteorite": 70,
	"nematocystNozzle": 22,
	"carraraMarbleUsed": 45,
	"strangeBattery": 45
};

Object.keys(langFile.item).forEach(key => {
    if (langFile.item[key].description) {
        let counter = 0;
        let inBracket = false;
        const desc = langFile.item[key].description.split('');
        desc.forEach((char, index) => {
            if (!inBracket) counter++;
            if (char === '<') inBracket = true;
            else if (char === '>') inBracket = false;

            if (char === ' ' && counter >= 95) {
                desc[index] = '\n';
                counter = 0;
            }
        });
        langFile.item[key].description = desc.join('');
        if (equipmentTimes[key]) langFile.item[key].description += ` <spr ChatIconTimedItem></c> <b>${equipmentTimes[key]}${isEn?' sec.':'s'}</c>`;
        langFile.item[key].pickup = langFile.item[key].description;
    }
});

fs.writeFileSync('./descriptions/lang.json', JSON.stringify(langFile, null, 4));

console.log('Done!');