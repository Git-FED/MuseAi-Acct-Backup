const STORAGE_KEY='abk-inventory-v2';
export function loadRecords(){try{const value=localStorage.getItem(STORAGE_KEY);const parsed=JSON.parse(value||'[]');return Array.isArray(parsed)?parsed:[];}catch{return [];}}
export function saveRecords(records){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(records));return true;}catch{return false;}}
export function clearRecords(){try{localStorage.removeItem(STORAGE_KEY);return true;}catch{return false;}}
export function storageAvailable(){try{const key='abk-storage-test';localStorage.setItem(key,'1');localStorage.removeItem(key);return true;}catch{return false;}}
export {STORAGE_KEY};
