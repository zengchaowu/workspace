import { createRxDatabase, addRxPlugin, RxDatabase } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";

const databaseName = "rxdb";
let database: RxDatabase | undefined;

/**
 * 初始化Rxdb
 */
export const initRxdb = async () => {
  addRxPlugin(RxDBDevModePlugin);
  database = await createRxDatabase({
    name: databaseName,
    storage: getRxStorageDexie(),
  });
};

/**
 * 获取Collection，不存在会添加并返回。
 */
export const getCollection = async (name: string) => {
  let collection = database?.[name];
  if (database && !collection) {
    let schema = await import(`./schemas/${name}.js`);
    const config: any = {};
    config[name] = { schema: schema.default };
    const collections = await database.addCollections(config);
    collection = collections[name];
  }
  return collection;
};
