let callCount = 0

// this is just a promise that resolves after 300ms
// and console logs a counter
function fakeAPICall() {
  return new Promise(resolve => {
    setTimeout(() => {
      callCount++
      console.log("Calls Made:" + callCount)
      resolve()
    }, 300)
  })
}

fakeAPICall() // 1
fakeAPICall() // 2
fakeAPICall() // 3

function debounce(callback) {
    // each call to debounce creates a new timeoutId
    let timeoutId
    return function() {
      // this inner function keeps a reference to
      // timeoutId from the function outside of it
      clearTimeout(timeoutId)
      timeoutId = setTimeout(callback, 800)
    }
}

// wraps the fakeAPICall function and returns
// a function that calls fakeAPICall
const debouncedFakeApiCall = debounce(fakeAPICall)

// all these calls cancel each other
// Until the last call finally happens after 800 ms
debouncedFakeApiCall()
debouncedFakeApiCall()
debouncedFakeApiCall()
debouncedFakeApiCall()
debouncedFakeApiCall()
debouncedFakeApiCall()
debouncedFakeApiCall() // 4