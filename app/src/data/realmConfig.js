import Realm from "realm";
import { Memory } from "./memory";

const realmConfig = {
  schema: [Memory], 
};

export default new Realm(realmConfig);