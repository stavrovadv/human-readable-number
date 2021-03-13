module.exports = function toReadable(number) {
  if(number > 999) return;
    let res = '';
    if (number >= 100) {
        let hundreds = Math.trunc(number / 100);
        number %= 100;
        res += units(hundreds) + ' hundred';
    }

    if (number >= 20) {
        let dozens = Math.trunc(number / 10);
        number %= 10;
        switch (dozens) {
            case 2:
                res += ' twenty';
                break;
            case 3:
                res += ' thirty';
                break;
            case 4:
                res += ' forty';
                break;
            case 5:
                res += ' fifty';
                break;
            case 6:
                res += ' sixty';
                break;
            case 7:
                res += ' seventy';
                break;
            case 8:
                res += ' eighty';
                break;
            case 9:
                res += ' ninety';
                break;
        }
    }

    if (number > 9) {
        switch (number) {
            case 19:
                res += ' nineteen';
                break;
            case 18:
                res += ' eighteen';
                break;
            case 17:
                res += ' seventeen';
                break;
            case 16:
                res += ' sixteen';
                break;
            case 15:
                res += ' fifteen';
                break;
            case 14:
                res += ' fourteen';
                break;
            case 13:
                res += ' thirteen';
                break;
            case 12:
                res += ' twelve';
                break;
            case 11:
                res += ' eleven';
                break;
            case 10:
                res += ' ten';
                break;
        }
    }
    else {
        if((res.length > 0 && number !== 0) || res.length === 0)
        {
            res += ' ' + units(number);
        }
    }

    function units(numb) {
        switch (numb) {
            case 0:
                return 'zero';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            default:
                return '';
        }
    }

    return res.trim();
}
