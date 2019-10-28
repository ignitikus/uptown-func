function call(func) {
  func()
}

function callTwice(func) {
  for(let i = 0; i<2; i++){
    func()
  }
}

function callXTimes(func, n) {
  for(let i = 0; i<n; i++){
    func()
  }
}

function returnFromFunc(func) {
  return func()
}

function modifyString(str, func) {
  return func(str)
}

function modifyNumber(num, func) {
  return func(num)
}

function modifyAnything(value, func) {
  return func(value)
}

function twoFuncs(func1, func2) {
  return func2(func1())
}

function twoValues(value1, value2, func) {
  return func(value1, value2)
}

function twoValuesRTL(value1, value2, func) {
  return func(value2, value1)
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}