import { describe, it } from "mocha";

import { comGsReturn } from "./workflow/com-gs-return";
import { comTranform } from './workflow/com-gs-transform';
import { comGsIfElse } from "./workflow/com-gs-if";
import { comGsSwitch } from "./workflow/com-gs-switch";

comGsReturn();
comGsIfElse();
comGsSwitch();
comTranform();