import {loadRecords} from './storage.js';
export function exportWorksheet(format='json'){
  const records=loadRecords();
  const body=format==='text'?records.map((r,i)=>[`Record ${i+1}`,`Service: ${r.service}`,`Purpose: ${r.purpose}`,`Owner: ${r.owner}`,`Environment: ${r.environment}`,`Recovery URL: ${r.recoveryUrl||'Not recorded'}`,`Rotation procedure: ${r.rotation}`,`Last rotation: ${r.lastRotation||'Not recorded'}`,`Last test: ${r.lastTest||'Not recorded'}`,`Fallback operator: ${r.fallback||'Not recorded'}`,`Backup location reference: ${r.backupLocation||'Not recorded'}`].join('\n')).join('\n\n'):JSON.stringify(records,null,2);
  const blob=new Blob([body],{type:format==='text'?'text/plain':'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`agent-backup-metadata.${format==='text'?'txt':'json'}`;a.click();URL.revokeObjectURL(url);
}
export function showExportPreview(target){if(!target)return;const records=loadRecords();target.textContent=records.length?JSON.stringify(records,null,2):'No metadata records are saved locally.';}
