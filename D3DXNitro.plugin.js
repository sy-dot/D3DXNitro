/**
 * @name D3DXNitro
 * @version 1.0.0.0
 * @description Go to sex without condon!
 * @author sy
 * @source https://github.com/sy-dot/D3DXNitro
 * @updateUrl https://raw.githubusercontent.com/sy-dot/D3DXNitro/main/D3DXNitro.plugin.js
 */
 module.exports = class xxx {
  load() { }
  start() {
    BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = 2;
    BdApi.alert("Заебись!", "FullHD & 60FPS воркает! А если нет, значит это пофиксили... (ツ)", 1);
}

stop(){ }}