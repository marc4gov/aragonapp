/* global artifacts */
var CounterApp = artifacts.require('CounterApp.sol')
var RegistryApp = artifacts.require('RegistryApp.sol')


module.exports = function(deployer) {
  deployer.deploy(CounterApp)
  deployer.deploy(RegistryApp)  
}
